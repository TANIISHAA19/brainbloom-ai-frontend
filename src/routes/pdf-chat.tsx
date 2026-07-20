import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageShell } from "@/components/site/Shared";
import { toast } from "sonner";

export const Route = createFileRoute("/pdf-chat")({
  head: () => ({
    meta: [
      { title: "PDF Chat — QuizGenius AI" },
      { name: "description", content: "Chat with your PDF using AI." },
    ],
  }),
  component: PDFChatPage,
});


function PDFChatPage() {
  const [file, setFile] = useState<File | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);


  const askPDF = async () => {

    if (!file || !question) {
      toast.error("Upload PDF and enter question");
      return;
    }


    setLoading(true);


    try {

      const formData = new FormData();

      formData.append("pdf", file);
      formData.append("question", question);


      const response = await fetch(
        "http://localhost:3000/api/pdf-chat",
        {
          method: "POST",
          body: formData,
        }
      );


      const data = await response.json();


      if (!response.ok) {
        throw new Error(data.error || "PDF chat failed");
      }


      setAnswer(data.answer);

      toast.success("Answer generated!");

    } catch (error) {

      console.error(error);
      toast.error("Failed to chat with PDF");

    } finally {

      setLoading(false);

    }
  };


  return (
    <PageShell>

      <div className="mx-auto max-w-3xl">

        <h1 className="text-3xl font-bold">
          Chat With PDF
        </h1>

        <p className="mt-2 text-muted-foreground">
          Upload your notes and ask questions.
        </p>


        <div className="mt-8 rounded-2xl border p-6 space-y-5">


          <input
            type="file"
            accept="application/pdf"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
          />


          <Input
            placeholder="Ask something from PDF..."
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
          />


          <Button
            onClick={askPDF}
            disabled={loading}
          >
            {loading ? "Thinking..." : "Ask AI"}
          </Button>


        </div>


        {answer && (
          <div className="mt-8 rounded-2xl border p-6">

            <h2 className="text-xl font-semibold">
              AI Answer
            </h2>

            <p className="mt-3 whitespace-pre-wrap">
              {answer}
            </p>

          </div>
        )}

      </div>

    </PageShell>
  );
}