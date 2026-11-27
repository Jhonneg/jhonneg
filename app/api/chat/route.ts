import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16_000;
const MAX_MESSAGES = 20;
const MAX_MESSAGE_CHARS = 1_000;
const RATE_LIMIT = 10; // requests
const RATE_WINDOW_MS = 60_000; // per minute, per client

type ChatMessage = { role: "user" | "assistant"; content: string };

// Best-effort in-memory limiter. On serverless hosts each instance keeps its
// own counters, so this slows abuse but is not a hard global cap.
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5_000) {
    hits.forEach((times, k) => {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k);
    });
  }
  return false;
}

function clientKey(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || req.headers.get("x-real-ip") || "unknown";
}

function sameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

function json(body: unknown, status = 200, headers: HeadersInit = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
}

function fail(status: number, details: string, headers: HeadersInit = {}) {
  return json({ error: details, details }, status, headers);
}

function parseMessages(value: unknown): ChatMessage[] | null {
  if (
    !Array.isArray(value) ||
    value.length === 0 ||
    value.length > MAX_MESSAGES
  ) {
    return null;
  }
  const messages: ChatMessage[] = [];
  for (const item of value) {
    if (typeof item !== "object" || item === null) return null;
    const { role, content } = item as Record<string, unknown>;
    if (role !== "user" && role !== "assistant") return null;
    if (
      typeof content !== "string" ||
      content.trim().length === 0 ||
      content.length > MAX_MESSAGE_CHARS
    ) {
      return null;
    }
    messages.push({ role, content });
  }
  return messages[messages.length - 1].role === "user" ? messages : null;
}

export async function POST(req: Request) {
  if (!sameOrigin(req)) return fail(403, "Forbidden");

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return fail(503, "Chat is currently unavailable.");

  if (rateLimited(clientKey(req))) {
    return fail(429, "Too many messages. Please wait a minute.", {
      "Retry-After": String(RATE_WINDOW_MS / 1000),
    });
  }

  const declared = Number(req.headers.get("content-length") ?? 0);
  if (declared > MAX_BODY_BYTES) return fail(413, "Request too large.");

  let payload: unknown;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) return fail(413, "Request too large.");
    payload = JSON.parse(raw);
  } catch {
    return fail(400, "Invalid request.");
  }

  const messages = parseMessages(
    (payload as { messages?: unknown } | null)?.messages,
  );
  if (!messages) return fail(400, "Invalid request.");

  try {
    const model = new GoogleGenerativeAI(apiKey).getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction:
        "Your name is Lain.\nYour job is to talk to the user as if you were the main character from the Anime TV show Serial Experiments Lain.\nStart by greeting the user then asking how they're doing.\nFor responses, keep it under 10 sentences, do not include links in your responses.",
      generationConfig: { maxOutputTokens: 512 },
    });

    const latest = messages[messages.length - 1];
    const history = messages.slice(0, -1).map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    const result = await model.startChat({ history }).sendMessage(latest.content);
    return json({ role: "assistant", content: result.response.text() });
  } catch (error) {
    console.error("Chat error:", error);
    return fail(500, "Failed to process request.");
  }
}
