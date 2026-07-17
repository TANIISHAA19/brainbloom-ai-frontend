import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { CheckCircle2, XCircle, RotateCcw, Home, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/Shared";
import { mockQuiz } from "@/data/mock";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — QuizGenius AI" },
      { name: "description", content: "See your quiz results and review answers." },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  const answers = useMemo<Record<number, number>>(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(sessionStorage.getItem("qg_answers") || "{}");
    } catch {
      return {};
    }
  }, []);

  const total = mockQuiz.length;
  const correct = mockQuiz.filter((q) => answers[q.id] === q.correctIndex).length;
  const incorrect = total - correct;
  const accuracy = Math.round((correct / total) * 100);

  const size = 160;
  const stroke = 14;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (accuracy / 100) * c;

  return (
    <PageShell>
      <div className="mx-auto max-w-4xl">
        <div
          className="rounded-3xl border border-border/60 bg-card p-8 text-center"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <h1 className="text-2xl font-bold sm:text-3xl">Your Results</h1>
          <p className="mt-1 text-muted-foreground">Here's how you performed.</p>

          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
            <div className="relative" style={{ width: size, height: size }}>
              <svg width={size} height={size} className="-rotate-90">
                <circle cx={size / 2} cy={size / 2} r={r} stroke="oklch(0.92 0.02 265)" strokeWidth={stroke} fill="none" />
                <circle
                  cx={size / 2} cy={size / 2} r={r}
                  stroke="url(#g)" strokeWidth={stroke} fill="none"
                  strokeDasharray={`${dash} ${c}`} strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.6 0.2 250)" />
                    <stop offset="100%" stopColor="oklch(0.55 0.22 290)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <div>
                  <div className="text-3xl font-bold">{accuracy}%</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Stat label="Score" value={`${correct}/${total}`} />
              <Stat label="Correct" value={String(correct)} tone="good" />
              <Stat label="Incorrect" value={String(incorrect)} tone="bad" />
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-xl text-sm text-muted-foreground">
            {accuracy >= 80
              ? "Outstanding! You've mastered this topic."
              : accuracy >= 50
              ? "Nice work — a bit more practice and you're there."
              : "Keep going — review the explanations below and try again."}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/quiz"><Button className="rounded-full"><RotateCcw className="mr-2 h-4 w-4" />Retry Quiz</Button></Link>
            <Link to="/learn"><Button variant="outline" className="rounded-full"><BookOpen className="mr-2 h-4 w-4" />Learn More</Button></Link>
            <Link to="/"><Button variant="ghost" className="rounded-full"><Home className="mr-2 h-4 w-4" />Back Home</Button></Link>
          </div>
        </div>

        <h2 className="mt-10 text-xl font-bold">Question Review</h2>
        <div className="mt-4 space-y-4">
          {mockQuiz.map((q, i) => {
            const ua = answers[q.id];
            const ok = ua === q.correctIndex;
            return (
              <div key={q.id} className="rounded-2xl border border-border/60 bg-card p-5">
                <div className="flex items-start gap-3">
                  {ok ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  ) : (
                    <XCircle className="mt-0.5 h-5 w-5 text-destructive" />
                  )}
                  <div className="flex-1">
                    <div className="text-xs font-semibold uppercase text-muted-foreground">Q{i + 1}</div>
                    <div className="font-medium">{q.question}</div>
                    <div className="mt-2 text-sm">
                      <span className="text-muted-foreground">Your answer: </span>
                      <span className={ok ? "text-primary" : "text-destructive"}>
                        {ua != null ? q.options[ua] : "Not answered"}
                      </span>
                    </div>
                    {!ok && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">Correct: </span>
                        <span className="text-primary">{q.options[q.correctIndex]}</span>
                      </div>
                    )}
                    <div className="mt-2 rounded-lg bg-accent/50 p-3 text-sm text-accent-foreground">
                      {q.explanation}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "good" | "bad" }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background px-5 py-3 text-center">
      <div
        className={
          tone === "good"
            ? "text-2xl font-bold text-primary"
            : tone === "bad"
            ? "text-2xl font-bold text-destructive"
            : "text-2xl font-bold"
        }
      >
        {value}
      </div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}