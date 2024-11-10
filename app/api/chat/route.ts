import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const latestMessage = messages[messages.length - 1];

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: messages.slice(0, -1).map((msg: any) => ({
        role: msg.role,
        parts: msg.content,
      })),
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
      JSON.stringify({ error: "Failed to process request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
