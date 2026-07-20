import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageShell } from "@/components/site/Shared";
import { suggestedPrompts, type ChatMessage } from "@/data/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "AI Tutor — QuizGenius AI" },
      {
        name: "description",
        content: "Chat with your AI tutor about any topic.",
      },
    ],
  }),
  component: ChatPage,
});

function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = async (text?: string) => {
    const content = (text ?? input).trim();

    if (!content) return;

    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: "user",
        content,
        time: now,
      },
    ]);

    setInput("");
    setTyping(true);

    try {
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: data.reply || "No response from AI.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: "Unable to connect to the backend.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl">
        <div className="mb-4">
          <h1 className="text-2xl font-bold sm:text-3xl">
            AI Tutor
          </h1>
          <p className="text-sm text-muted-foreground">
            Ask anything — get instant explanations.
          </p>
        </div>

        <div
          className="flex h-[62vh] flex-col rounded-2xl border border-border/60 bg-card"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "flex gap-3",
                  m.role === "user" && "flex-row-reverse"
                )}
              >
                <div
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full",
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground"
                  )}
                >
                  {m.role === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>

                <div
                  className={cn(
                    "max-w-[80%]",
                    m.role === "user" && "text-right"
                  )}
                >
                  <div
                    className={cn(
                      "inline-block rounded-2xl px-4 py-2 text-sm",
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    )}
                  >
                    {m.content}
                  </div>

                  <div className="mt-1 text-[10px] text-muted-foreground">
                    {m.time}
                  </div>
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-accent">
                  <Bot className="h-4 w-4" />
                </div>

                <div className="inline-flex items-center gap-1 rounded-2xl bg-secondary px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          <div className="border-t border-border/60 p-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {suggestedPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {p}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="rounded-full"
              />

              <Button
                type="submit"
                size="icon"
                className="rounded-full"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageShell>
  );
}