import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { PageShell, LoadingSpinner, EmptyState } from "@/components/site/Shared";
import { mockLearning } from "@/data/mock";
import { toast } from "sonner";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Learn — QuizGenius AI" },
      { name: "description", content: "AI-generated lessons tailored to your topic and level." },
    ],
  }),
  component: LearnPage,
});

function LearnPage() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("beginner");
  const [style, setStyle] = useState("detailed");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<typeof mockLearning | null>(null);

 const onExplain = async () => {
  if (!topic.trim()) {
  toast.error("Please enter a topic first");
  return;
}

setLoading(true);
setContent(null);

try {
  const response = await fetch("http://localhost:3000/api/learn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic: topic,
      level: difficulty,
    }),
  });

  const data = await response.json();

  setContent({
    title: topic,
    summary: data.explanation,
    keyPoints: [],
    examples: [],
    notes: [],
  });

} catch (error) {
  toast.error("Failed to connect to backend");
  console.error(error);
} finally {
  setLoading(false);
}
 };
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Learn anything, your way</h1>
        <p className="mt-2 text-muted-foreground">
          Enter a topic and get an AI-crafted lesson tailored to your level.
        </p>
      </div>

      <div
        className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border/60 bg-card p-6"
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="topic">Topic</Label>
            <Input
              id="topic"
              placeholder="e.g. Binary Search Trees"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-1"
            />
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
            <Label>Learning Style</Label>
            <Select value={style} onValueChange={setStyle}>
              <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="short">Short Notes</SelectItem>
                <SelectItem value="detailed">Detailed Explanation</SelectItem>
                <SelectItem value="examples">Examples</SelectItem>
                <SelectItem value="interview">Interview Preparation</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={onExplain} className="mt-5 w-full rounded-full sm:w-auto">
          <Sparkles className="mr-2 h-4 w-4" /> Explain
        </Button>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        {loading && <LoadingSpinner label="Generating your lesson..." />}
        {!loading && !content && (
          <EmptyState
            icon={<BookOpen className="h-6 w-6" />}
            title="Your lesson will appear here"
            description="Fill the form above and click Explain to get started."
          />
        )}
        {!loading && content && (
          <article
            className="rounded-2xl border border-border/60 bg-card p-6"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <h2 className="text-2xl font-bold">{content.title}</h2>
            <p className="mt-3 text-muted-foreground">{content.summary}</p>

            <h3 className="mt-6 font-semibold">Key Points</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
              {content.keyPoints.map((k) => <li key={k}>{k}</li>)}
            </ul>

            <h3 className="mt-6 font-semibold">Examples</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
              {content.examples.map((k) => <li key={k}>{k}</li>)}
            </ul>

            <h3 className="mt-6 font-semibold">Important Notes</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-muted-foreground">
              {content.notes.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </article>
        )}
      </div>
    </PageShell>
  );
}