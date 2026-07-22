import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/data/mock";

type Props = {
  message: ChatMessage;
};

export default function ChatBubble({ message }: Props) {
  return (
    <div
      className={cn(
        "flex gap-3",
        message.role === "user" && "flex-row-reverse"
      )}
    >
      <div
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-full",
          message.role === "user"
            ? "bg-primary text-primary-foreground"
            : "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
        )}
      >
        {message.role === "user" ? (
          <User className="h-4 w-4" />
        ) : (
          <Bot className="h-4 w-4" />
        )}
      </div>

      <div
        className={cn(
          "max-w-[80%]",
          message.role === "user" && "text-right"
        )}
      >
        <div
          className={cn(
            "rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap",
            message.role === "user"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary"
          )}
        >
          {message.content}
        </div>

        <div className="mt-1 text-[10px] text-muted-foreground">
          {message.time}
        </div>
      </div>
    </div>
  );
}