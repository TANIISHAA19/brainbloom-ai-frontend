import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Brain, Sparkles, Upload, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageShell } from "@/components/site/Shared";
import { toast } from "sonner";


export const Route = createFileRoute("/flashcards")({
  head: () => ({
    meta: [
      { title: "AI Flashcards — BrainBloom AI" },
      {
        name: "description",
        content: "Generate AI-powered flashcards.",
      },
    ],
  }),
  component: FlashcardsPage,
});


type Card = {
  question: string;
  answer: string;
};


function FlashcardsPage() {

  const [mode, setMode] = useState<"topic" | "upload">("topic");

  const [topic, setTopic] = useState("");

  const [file, setFile] = useState<File | null>(null);

  const [cards, setCards] = useState<Card[]>([]);

  const [loading, setLoading] = useState(false);

  const [flipped, setFlipped] = useState<number | null>(null);



  const generateCards = async () => {

if (mode === "upload") {

  if (!file) {
    toast.error("Please upload a PDF or notes file");
    return;
  }

  setLoading(true);

  try {

    const formData = new FormData();

    formData.append("pdf", file);


    const response = await fetch(
      "http://localhost:3000/api/flashcards/upload",
      {
        method: "POST",
        body: formData,
      }
    );


    const data = await response.json();


    if (!response.ok) {
      throw new Error(
        data.error || "PDF flashcard generation failed"
      );
    }


    setCards(data.flashcards);

    toast.success(
      "Flashcards generated from PDF!"
    );


  } catch(error) {

    console.error(error);

    toast.error(
      "PDF flashcard generation failed"
    );


  } finally {

    setLoading(false);

  }


  return;
}



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

        throw new Error(
          data.error || "Failed to generate flashcards"
        );

      }



      setCards(data.flashcards);

      toast.success("Flashcards generated!");



    } catch(error) {

      console.error(error);

      toast.error("Flashcard generation failed");


    } finally {

      setLoading(false);

    }

  };



  return (

    <PageShell>


      <section className="
        rounded-3xl
        bg-gradient-to-br
        from-purple-50
        via-white
        to-pink-50
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
            from-purple-500
            to-pink-600
            text-white
          ">

            <Brain className="h-8 w-8"/>

          </div>



          <h1 className="
            mt-6
            text-4xl
            font-bold
            text-slate-900
          ">

            AI Flashcard Generator

          </h1>



          <p className="
            mt-3
            text-slate-600
          ">

            Turn topics and study material into smart revision cards.

          </p>


        </div>




        {/* MODE SELECTOR */}


        <div className="
          mx-auto
          mt-10
          flex
          max-w-xl
          gap-4
        ">


          <button

            onClick={() => setMode("topic")}

            className={`
              flex-1
              rounded-2xl
              border
              p-4
              font-semibold
              transition
              ${
                mode === "topic"
                ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
                : "bg-white"
              }
            `}

          >

            <Brain className="mx-auto mb-2"/>

            Topic

          </button>




          <button

            onClick={() => setMode("upload")}

            className={`
              flex-1
              rounded-2xl
              border
              p-4
              font-semibold
              transition
              ${
                mode === "upload"
                ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
                : "bg-white"
              }
            `}

          >

            <Upload className="mx-auto mb-2"/>

            Upload Material

          </button>



        </div>





        {/* INPUT CARD */}


        <div className="
          mx-auto
          mt-8
          max-w-3xl
          rounded-3xl
          bg-white
          p-6
          shadow-lg
        ">


          {
            mode === "topic" ? (

              <Input

                placeholder="Example: Operating Systems"

                value={topic}

                onChange={(e)=>setTopic(e.target.value)}

              />

            ) : (


              <label className="
                flex
                cursor-pointer
                flex-col
                items-center
                rounded-2xl
                border-2
                border-dashed
                p-8
              ">


                <FileText className="
                  h-10
                  w-10
                  text-purple-500
                "/>


                <span className="
                  mt-3
                  font-semibold
                ">

                  {file
                    ? file.name
                    : "Upload PDF or Notes"
                  }

                </span>



                <input

                  type="file"

                  className="hidden"

                  onChange={(e)=>
                    setFile(
                      e.target.files?.[0] || null
                    )
                  }

                />


              </label>


            )
          }




          <Button

            onClick={generateCards}

            disabled={loading}

            className="
              mt-5
              w-full
              rounded-full
              bg-gradient-to-r
              from-purple-500
              to-pink-600
            "

          >

            <Sparkles className="mr-2"/>

            {
              loading
              ? "Generating..."
              : "Generate Flashcards"
            }


          </Button>



        </div>





        {/* FLASHCARDS */}

                         {/* FLASHCARDS */}

<div
  className="
    mt-12
    grid
    gap-8
    md:grid-cols-2
  "
>

{
cards.map((card,index)=> (

<div
  key={index}
  className="
    group
    h-64
    cursor-pointer
    [perspective:1000px]
  "
  onClick={() =>
    setFlipped(
      flipped === index
      ? null
      : index
    )
  }
>

  <div
    className={cn(
      `
      relative
      h-full
      w-full
      transition-transform
      duration-700
      [transform-style:preserve-3d]
      `,
      flipped === index &&
      "[transform:rotateY(180deg)]"
    )}
  >


    {/* FRONT QUESTION */}

    <div
      className="
        absolute
        inset-0
        rounded-3xl
        bg-slate-900
        p-8
        text-white
        shadow-xl
        [backface-visibility:hidden]
      "
    >

      <p className="
        text-sm
        font-semibold
        uppercase
        tracking-wider
        text-purple-300
      ">
        Question
      </p>


      <p className="
        mt-6
        text-xl
        font-bold
      ">
        {card.question}
      </p>


      <p className="
        absolute
        bottom-8
        text-sm
        opacity-70
      ">
        Click to reveal answer
      </p>


    </div>



    {/* BACK ANSWER */}


    <div
      className="
        absolute
        inset-0
        rounded-3xl
        bg-pink-50
        p-8
        shadow-xl
        [transform:rotateY(180deg)]
        [backface-visibility:hidden]
      "
    >

      <p className="
        text-sm
        font-semibold
        uppercase
        tracking-wider
        text-purple-600
      ">
        Answer
      </p>


      <p className="
        mt-6
        text-xl
        font-bold
        text-slate-800
      ">
        {card.answer}
      </p>


      <p className="
        absolute
        bottom-8
        text-sm
        text-slate-500
      ">
        Click to see question
      </p>


    </div>


  </div>


</div>


))
}

</div>
       


      </section>


    </PageShell>

  );

}