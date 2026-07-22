import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { PageShell } from "@/components/site/Shared";
import { toast } from "sonner";

export const Route = createFileRoute("/generate-quiz")({
  head: () => ({
    meta: [
      { title: "Generate Quiz — QuizGenius AI" },
      { name: "description", content: "Create custom quizzes powered by AI in seconds." },
    ],
  }),
  component: GenerateQuiz,
});

function GenerateQuiz() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("beginner");
  const [count, setCount] = useState("5");
  const [type, setType] = useState("mcq");
  const [loading, setLoading] = useState(false);

const onGenerate = async () => {
  if (!subject || !topic) {
    toast.error("Please fill subject and topic");
    return;
  }

  setLoading(true);

  try {
       const token = localStorage.getItem("token");

          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/quiz`, {
        method: "POST",
         headers: {
       "Content-Type": "application/json",
       Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        subject,
        topic,
        difficulty,
        questions: Number(count),
        type,
      }),
    });

const data = await response.json();

if (!response.ok) {
  throw new Error(data.error || "Failed to generate quiz");
}

localStorage.setItem(
  "generatedQuiz",
  JSON.stringify(data.quiz)
);


toast.success("Quiz generated!");

navigate({ to: "/quiz" });
  } catch (error) {
    console.error(error);
    toast.error("Failed to generate quiz");
  } finally {
    setLoading(false);
  }
};

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">AI Quiz Generator</h1>
        <p className="mt-2 text-muted-foreground">
          Configure your quiz — we'll generate it in seconds.
        </p>
      </div>

      <div
        className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border/60 bg-card p-6"
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Computer Science" value={subject} onChange={(e) => setSubject(e.target.value)} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="topic">Topic</Label>
            <Input id="topic" placeholder="Operating Systems" value={topic} onChange={(e) => setTopic(e.target.value)} className="mt-1" />
          </div>
          <div>
            <Label>Difficulty</Label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="count">Number of Questions</Label>
            <Input id="count" type="number" min={1} max={30} value={count} onChange={(e) => setCount(e.target.value)} className="mt-1" />
          </div>
          <div className="sm:col-span-2">
            <Label>Question Type</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="mcq">MCQ</SelectItem>
                <SelectItem value="tf">True / False</SelectItem>
                <SelectItem value="mixed">Mixed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={onGenerate} disabled={loading} className="mt-5 w-full rounded-full sm:w-auto">
          <Wand2 className="mr-2 h-4 w-4" /> {loading ? "Generating..." : "Generate Quiz"}
        </Button>
      </div>

      {loading && (
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-16 w-full rounded-2xl" />
          ))}
        </div>
      )}
    </PageShell>
  );
}