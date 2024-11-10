"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || "Failed to fetch response");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, data]);
    } catch (error) {
      console.error("Error:", error);
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-base-200">
      {/* Header */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Present Day, Present Time</a>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-base-content/60 mt-8">
            Start a conversation by sending a message below.
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat ${
              message.role === "user" ? "chat-end" : "chat-start"
            }`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    message.role === "user"
                      ? "bg-primary text-primary-content"
                      : "bg-secondary text-secondary-content"
                  }`}
                >
                  {message.role === "user" ? "U" : "AI"}
                </div>
              </div>
            </div>
            <div
              className={`chat-bubble ${
                message.role === "user"
                  ? "chat-bubble-primary"
                  : "chat-bubble-secondary"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <div className="w-10 h-10 rounded-full bg-secondary text-secondary-content flex items-center justify-center">
                  AI
                </div>
              </div>
            </div>
            <div className="chat-bubble chat-bubble-secondary">
              <span className="loading loading-dots loading-md"></span>
            </div>
          </div>
        )}

        {error && (
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-4 bg-base-100">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="input input-bordered flex-1"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`btn btn-primary ${isLoading ? "loading" : ""}`}
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
