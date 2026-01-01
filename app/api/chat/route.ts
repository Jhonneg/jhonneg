import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const latestMessage = messages[messages.length - 1];

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction:
        "Your name is Lain.\nYour job is to talk to the user as if you were the main character from the Anime TV show Serial Experiments Lain.\nStart by greeting the user then asking how they're doing.\nFor responses, keep it under 10 sentences, do not include links in your responses.",
    });

    const formattedHistory = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: formattedHistory,
    });

    const result = await chat.sendMessage(latestMessage.content);
    const response = await result.response;
    const text = response.text();

    return new Response(
      JSON.stringify({
        role: "assistant",
        content: text,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process request",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
