import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, ProgressBar } from "@/components/site/Shared";
import { mockQuiz } from "@/data/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz — QuizGenius AI" },
      { name: "description", content: "Take your AI-generated quiz." },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const q = mockQuiz[idx];
  const total = mockQuiz.length;
  const progress = ((idx + 1) / total) * 100;
  const selected = answers[q.id];

  const setAnswer = (i: number) => setAnswers((a) => ({ ...a, [q.id]: i }));

  const submit = () => {
    // TODO: send answers to backend for grading
    sessionStorage.setItem("qg_answers", JSON.stringify(answers));
    navigate({ to: "/results" });
  };

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
          <span>Question {idx + 1} of {total}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <ProgressBar value={progress} />

        <div
          className="mt-6 rounded-2xl border border-border/60 bg-card p-6 sm:p-8"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            Question {idx + 1}
          </div>
          <h2 className="mt-2 text-xl font-semibold sm:text-2xl">{q.question}</h2>

          <div className="mt-6 grid gap-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setAnswer(i)}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-4 text-left transition-all hover:border-primary/60 hover:bg-accent",
                  selected === i
                    ? "border-primary bg-accent"
                    : "border-border bg-background",
                )}
              >
                <span className={cn(
                  "grid h-8 w-8 place-items-center rounded-full border text-sm font-semibold",
                  selected === i ? "border-primary bg-primary text-primary-foreground" : "border-border",
                )}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-sm sm:text-base">{opt}</span>
                {selected === i && <CheckCircle2 className="ml-auto h-5 w-5 text-primary" />}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <Button
              variant="outline"
              onClick={() => setIdx((i) => Math.max(0, i - 1))}
              disabled={idx === 0}
              className="rounded-full"
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> Previous
            </Button>
            {idx < total - 1 ? (
              <Button onClick={() => setIdx((i) => Math.min(total - 1, i + 1))} className="rounded-full">
                Next <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={submit} className="rounded-full">Submit Quiz</Button>
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}