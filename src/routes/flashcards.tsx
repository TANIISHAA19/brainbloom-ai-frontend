import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageShell } from "@/components/site/Shared";
import { toast } from "sonner";

export const Route = createFileRoute("/flashcards")({
  head: () => ({
    meta: [
      { title: "AI Flashcards — QuizGenius AI" },
      { name: "description", content: "Generate AI-powered flashcards." },
    ],
  }),
  component: FlashcardsPage,
});


type Card = {
  question: string;
  answer: string;
};


function FlashcardsPage() {
  const [topic, setTopic] = useState("");
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(false);
  const [flipped, setFlipped] = useState<number | null>(null);


  const generateCards = async () => {
    if (!topic) {
      toast.error("Please enter a topic");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3000/api/flashcards",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic,
          }),
        }
      );


      const data = await response.json();


      if (!response.ok) {
        throw new Error(data.error || "Failed to generate flashcards");
      }


      setCards(data.flashcards);

      toast.success("Flashcards generated!");

    } catch (error) {
      console.error(error);
      toast.error("Flashcard generation failed");

    } finally {
      setLoading(false);
    }
  };


  return (
    <PageShell>

      <div className="mx-auto max-w-4xl">

        <h1 className="text-3xl font-bold">
          AI Flashcard Generator
        </h1>

        <p className="mt-2 text-muted-foreground">
          Create smart flashcards using Gemini AI.
        </p>


        <div className="mt-6 flex gap-3">

          <Input
            placeholder="Enter topic (e.g. DBMS)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          <Button
            onClick={generateCards}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate"}
          </Button>

        </div>


        <div className="mt-8 grid gap-5 sm:grid-cols-2">

          {cards.map((card, index) => (

            <button
              key={index}
              onClick={() =>
                setFlipped(
                  flipped === index ? null : index
                )
              }
              className="rounded-2xl border p-6 text-left bg-card min-h-48"
            >

              <h2 className="font-semibold text-lg">
                {flipped === index
                  ? "Answer"
                  : "Question"}
              </h2>


              <p className="mt-4">
                {flipped === index
                  ? card.answer
                  : card.question}
              </p>


              <p className="mt-6 text-sm text-muted-foreground">
                Click to flip
              </p>

            </button>

          ))}

        </div>

      </div>

    </PageShell>
  );
}