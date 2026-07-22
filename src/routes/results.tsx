import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { CheckCircle2, XCircle, RotateCcw, Home, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/Shared";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — QuizGenius AI" },
      { name: "description", content: "See your quiz results and review answers." },
    ],
  }),
  component: ResultsPage,
});

type Question = {
  question: string;
  options: string[];
  answer: string;
};

function ResultsPage() {

  const [quiz, setQuiz] = useState<Question[]>([]);

  useEffect(() => {
    const savedQuiz = localStorage.getItem("generatedQuiz");

    if (savedQuiz) {
      try {
        setQuiz(JSON.parse(savedQuiz));
      } catch (error) {
        console.error("Quiz loading error:", error);
      }
    }
  }, []);


  const answers = useMemo<Record<number, number>>(() => {
    if (typeof window === "undefined") return {};

    try {
      return JSON.parse(
        sessionStorage.getItem("qg_answers") || "{}"
      );
    } catch {
      return {};
    }

  }, []);


  if (quiz.length === 0) {
    return (
      <PageShell>
        <div className="text-center mt-10">
          No quiz found. Please generate a quiz first.
        </div>
      </PageShell>
    );
  }


  const total = quiz.length;


  const correct = quiz.filter((q, index) => {
    const selectedIndex = answers[index];

    if (selectedIndex === undefined) return false;

    return q.options[selectedIndex] === q.answer;

  }).length;


  const incorrect = total - correct;

  const accuracy = Math.round(
    (correct / total) * 100
  );


  return (
    <PageShell>

      <div className="mx-auto max-w-4xl">

        <div
          className="rounded-3xl border border-border/60 bg-card p-8 text-center"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >

          <h1 className="text-2xl font-bold sm:text-3xl">
            Your Results
          </h1>

          <p className="mt-1 text-muted-foreground">
            Here's how you performed.
          </p>


          <div className="mt-8 grid grid-cols-3 gap-4">

            <Stat
              label="Score"
              value={`${correct}/${total}`}
            />

            <Stat
              label="Correct"
              value={String(correct)}
              tone="good"
            />

            <Stat
              label="Incorrect"
              value={String(incorrect)}
              tone="bad"
            />

          </div>


          <div className="mt-6 text-4xl font-bold">
            {accuracy}%
          </div>

          <div className="text-sm text-muted-foreground">
            Accuracy
          </div>


          <p className="mx-auto mt-8 max-w-xl text-sm text-muted-foreground">

            {accuracy >= 80
              ? "Outstanding! You've mastered this topic."
              : accuracy >= 50
              ? "Nice work — a bit more practice and you're there."
              : "Keep going — review the questions and try again."
            }

          </p>


          <div className="mt-6 flex flex-wrap justify-center gap-3">

            <Link to="/quiz">
              <Button className="rounded-full">
                <RotateCcw className="mr-2 h-4 w-4" />
                Retry Quiz
              </Button>
            </Link>


            <Link to="/learn">
              <Button variant="outline" className="rounded-full">
                <BookOpen className="mr-2 h-4 w-4" />
                Learn More
              </Button>
            </Link>


            <Link to="/">
              <Button variant="ghost" className="rounded-full">
                <Home className="mr-2 h-4 w-4" />
                Back Home
              </Button>
            </Link>

          </div>

        </div>



        <h2 className="mt-10 text-xl font-bold">
          Question Review
        </h2>


        <div className="mt-4 space-y-4">

          {quiz.map((q, index) => {

            const selectedIndex = answers[index];

            const selectedAnswer =
              selectedIndex !== undefined
                ? q.options[selectedIndex]
                : "Not answered";


            const isCorrect =
              selectedAnswer === q.answer;


            return (

              <div
                key={index}
                className="rounded-2xl border border-border/60 bg-card p-5"
              >

                <div className="flex items-start gap-3">


                  {isCorrect ? (
                    <CheckCircle2 className="mt-1 h-5 w-5" />
                  ) : (
                    <XCircle className="mt-1 h-5 w-5" />
                  )}


                  <div className="flex-1">

                    <div className="text-xs font-semibold uppercase text-muted-foreground">
                      Q{index + 1}
                    </div>


                    <div className="font-medium">
                      {q.question}
                    </div>


                    <div className="mt-2 text-sm">

                      <span className="text-muted-foreground">
                        Your answer:
                      </span>{" "}

                      {selectedAnswer}

                    </div>



                    {!isCorrect && (

                      <div className="text-sm mt-1">

                        <span className="text-muted-foreground">
                          Correct:
                        </span>{" "}

                        {q.answer}

                      </div>

                    )}

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



function Stat({
  label,
  value,
  tone
}: {
  label:string;
  value:string;
  tone?: "good" | "bad";
}) {

  return (

    <div className="rounded-2xl border border-border/60 bg-background px-5 py-3">

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

      <div className="text-xs text-muted-foreground">
        {label}
      </div>

    </div>

  );

}