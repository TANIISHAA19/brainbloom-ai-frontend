import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { PageShell } from "@/components/site/Shared";
import { toast } from "sonner";

export const Route = createFileRoute("/evaluate")({
  head: () => ({
    meta: [
      { title: "AI Answer Evaluation — QuizGenius AI" },
      { name: "description", content: "Evaluate answers using AI." },
    ],
  }),
  component: EvaluatePage,
});


function EvaluatePage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);


  const evaluate = async () => {
    if (!question || !answer) {
      toast.error("Please enter question and answer");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/evaluate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question,
            answer,
          }),
        }
      );


      const data = await response.json();


      if (!response.ok) {
        throw new Error(data.error || "Evaluation failed");
      }


      setResult(data);
      toast.success("Answer evaluated!");

    } catch (error) {
      console.error(error);
      toast.error("Evaluation failed");

    } finally {
      setLoading(false);
    }
  };


  return (
    <PageShell>

      <div className="mx-auto max-w-3xl">

        <h1 className="text-3xl font-bold">
          AI Answer Evaluator
        </h1>

        <p className="mt-2 text-muted-foreground">
          Get AI feedback on your answers.
        </p>


        <div className="mt-8 space-y-4 rounded-2xl border p-6">

          <Input
            placeholder="Enter question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />


          <Textarea
            placeholder="Enter your answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={6}
          />


          <Button
            onClick={evaluate}
            disabled={loading}
          >
            {loading ? "Evaluating..." : "Evaluate Answer"}
          </Button>

        </div>


        {result && (
          <div className="mt-8 rounded-2xl border p-6">

            <h2 className="text-2xl font-bold">
              Score: {result.score}/10
            </h2>


            <div className="mt-4">
              <h3 className="font-semibold">
                Feedback
              </h3>

              <p className="mt-2">
                {result.feedback}
              </p>
            </div>


            <div className="mt-4">
              <h3 className="font-semibold">
                Correct Explanation
              </h3>

              <p className="mt-2">
                {result.correct_explanation}
              </p>
            </div>

          </div>
        )}

      </div>

    </PageShell>
  );
}