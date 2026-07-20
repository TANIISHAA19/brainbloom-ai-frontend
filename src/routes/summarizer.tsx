import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/Shared";
import { toast } from "sonner";

export const Route = createFileRoute("/summarizer")({
  head: () => ({
    meta: [
      { title: "PDF Summarizer — QuizGenius AI" },
      { name: "description", content: "Summarize study PDFs using AI." },
    ],
  }),
  component: SummarizerPage,
});

function SummarizerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const summarize = async () => {
    if (!file) {
      toast.error("Please upload a PDF");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("pdf", file);

      const response = await fetch(
        "http://localhost:3000/api/summarize",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Summary failed");
      }

      setSummary(data.summary);
      toast.success("PDF summarized!");

    } catch (error) {
      console.error(error);
      toast.error("Failed to summarize PDF");

    } finally {
      setLoading(false);
    }
  };


  return (
    <PageShell>
      <div className="mx-auto max-w-3xl">

        <h1 className="text-3xl font-bold">
          AI PDF Summarizer
        </h1>

        <p className="mt-2 text-muted-foreground">
          Upload your notes and get an AI-generated summary.
        </p>


        <div className="mt-8 rounded-2xl border p-6">

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
          />


          <Button
            onClick={summarize}
            disabled={loading}
            className="mt-5"
          >
            {loading ? "Summarizing..." : "Generate Summary"}
          </Button>


          {summary && (
            <div className="mt-8 rounded-xl border p-5">
              <h2 className="font-semibold text-xl">
                Summary
              </h2>

              <p className="mt-3 whitespace-pre-wrap">
                {summary}
              </p>
            </div>
          )}

        </div>

      </div>
    </PageShell>
  );
}