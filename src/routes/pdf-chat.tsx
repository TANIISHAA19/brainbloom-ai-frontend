import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  FileText,
  Sparkles,
  Upload,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageShell } from "@/components/site/Shared";
import { toast } from "sonner";


export const Route = createFileRoute("/pdf-chat")({
  head: () => ({
    meta: [
      { title: "PDF Chat — BrainBloom AI" },
      {
        name: "description",
        content: "Chat with your PDF using AI.",
      },
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

        throw new Error(
          data.error || "PDF chat failed"
        );

      }



      setAnswer(data.answer);

      toast.success("Answer generated!");



    } catch(error) {

      console.error(error);

      toast.error("Failed to chat with PDF");


    } finally {

      setLoading(false);

    }

  };



  return (

    <PageShell>


      <section className="
        rounded-3xl
        bg-gradient-to-br
        from-pink-50
        via-white
        to-purple-50
        p-8
        shadow-xl
      ">


        {/* HEADER */}

        <div className="text-center">


          <div className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-pink-500
            to-purple-600
            text-white
          ">

            <FileText className="h-8 w-8"/>

          </div>



          <h1 className="
            mt-6
            text-4xl
            font-bold
            text-slate-900
          ">

            Chat With Your PDF

          </h1>



          <p className="
            mt-3
            text-slate-600
          ">

            Upload your notes, books, or documents and learn with AI.

          </p>


        </div>





        {/* MAIN CARD */}


        <div className="
          mx-auto
          mt-10
          max-w-3xl
          rounded-3xl
          bg-white
          p-8
          shadow-lg
        ">



          {/* UPLOAD */}


          <label className="
            flex
            cursor-pointer
            flex-col
            items-center
            justify-center
            rounded-3xl
            border-2
            border-dashed
            border-purple-200
            p-10
            transition
            hover:bg-purple-50
          ">


            <Upload className="
              h-10
              w-10
              text-purple-500
            "/>


            <p className="
              mt-4
              font-semibold
              text-slate-800
            ">

              {
                file
                ? file.name
                : "Upload PDF file"
              }

            </p>



            <p className="
              mt-2
              text-sm
              text-slate-500
            ">

              Click to select your study material

            </p>



            <input

              type="file"

              accept="application/pdf"

              className="hidden"

              onChange={(e)=>
                setFile(
                  e.target.files?.[0] || null
                )
              }

            />


          </label>





          {/* QUESTION */}


          <div className="mt-6">


            <label className="
              mb-2
              block
              text-sm
              font-semibold
              text-slate-700
            ">

              Ask your question

            </label>



            <Input

              placeholder="Example: Explain the main concepts from this PDF"

              value={question}

              onChange={(e)=>
                setQuestion(e.target.value)
              }

            />


          </div>





          <Button

            onClick={askPDF}

            disabled={loading}

            className="
              mt-6
              w-full
              rounded-full
              bg-gradient-to-r
              from-pink-500
              to-purple-600
            "

          >

            <Sparkles className="mr-2 h-4 w-4"/>


            {
              loading
              ? "Thinking..."
              : "Ask AI"
            }


          </Button>




        </div>





        {/* ANSWER */}


        {answer && (

          <div className="
            mx-auto
            mt-8
            max-w-3xl
            rounded-3xl
            bg-white
            p-8
            shadow-lg
          ">


            <div className="
              flex
              items-center
              gap-3
            ">

              <MessageCircle className="
                text-purple-500
              "/>


              <h2 className="
                text-xl
                font-bold
              ">

                AI Answer

              </h2>


            </div>



            <p className="
              mt-5
              whitespace-pre-wrap
              leading-7
              text-slate-700
            ">

              {answer}

            </p>


          </div>

        )}



      </section>


    </PageShell>

  );

}