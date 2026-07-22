import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Bot, Send, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageShell } from "@/components/site/Shared";
import { suggestedPrompts, type ChatMessage } from "@/data/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      {
        title: "AI Tutor — BrainBloom AI",
      },
      {
        name: "description",
        content: "Chat with your AI tutor.",
      },
    ],
  }),
  component: ChatPage,
});

function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [sending, setSending] = useState(false);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const send = async (text?: string) => {
    const content = (text ?? input).trim();

    if (!content || sending) return;

    const assistantId = Date.now() + 1;
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
      {
        id: assistantId,
        role: "assistant",
        content: "",
        time: now,
      },
    ]);

    setInput("");
    setTyping(true);
    setSending(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get AI response.");
      }

      if (!response.body) {
        throw new Error("Readable stream not supported.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let answer = "";
      let firstChunk = true;

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        if (firstChunk) {
          setTyping(false);
          firstChunk = false;
        }

        const chunk = decoder.decode(value, {
          stream: true,
        });

        answer += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? {
                  ...msg,
                  content: answer,
                }
              : msg
          )
        );
      }

      setTyping(false);
    } catch (error) {
      console.error(error);

      setTyping(false);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content:
                  "Sorry, I couldn't connect to the AI server. Please try again.",
              }
            : msg
        )
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <PageShell>
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            AI Tutor
          </h1>

          <p className="mt-2 text-muted-foreground">
            Ask questions, understand concepts, and learn faster with BrainBloom AI.
          </p>
        </div>

        <div
          className="flex h-[72vh] flex-col overflow-hidden rounded-3xl border border-border/60 bg-card"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="flex-1 space-y-5 overflow-y-auto p-6">
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt) => (
                  <Button
                    key={prompt}
                    type="button"
                    variant="outline"
                    className="rounded-full"
                    onClick={() => send(prompt)}
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.role === "user" && "flex-row-reverse"
                )}
              >
                <div
                  className={cn(
                    "grid h-10 w-10 shrink-0 place-items-center rounded-full",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground"
                  )}
                >
                  {message.role === "user" ? (
                    <User className="h-5 w-5" />
                  ) : (
                    <Bot className="h-5 w-5" />
                  )}
                </div>

                <div className="max-w-[80%]">
                  <div
                    className={cn(
                      "rounded-3xl px-5 py-3 text-sm leading-7 shadow-sm",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    )}
                  >
                    {message.content}
                  </div>

                  <div className="mt-1 px-2 text-[11px] text-muted-foreground">
                    {message.time}
                  </div>
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-accent">
                  <Bot className="h-5 w-5" />
                </div>

                <div className="rounded-3xl bg-secondary px-5 py-3 text-sm animate-pulse">
                  AI is typing...
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

                    <div className="border-t border-border/60 bg-background/60 p-4 backdrop-blur">
            {messages.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt) => (
                  <Button
                    key={prompt}
                    type="button"
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    disabled={sending}
                    onClick={() => send(prompt)}
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                void send();
              }}
              className="flex items-center gap-3"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask BrainBloom AI anything..."
                className="h-12 rounded-full"
                disabled={sending}
              />

              <Button
                type="submit"
                size="icon"
                className="h-12 w-12 rounded-full"
                disabled={sending || !input.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageShell>
  );
}