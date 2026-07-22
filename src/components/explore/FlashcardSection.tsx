import { Brain, ArrowRight } from "lucide-react";


export default function FlashcardSection() {

  return (

    <section className="bg-white py-24">

      <div className="
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-16
        px-6
        lg:grid-cols-2
      ">


        {/* LEFT SIDE */}

        <div>

          <div className="
            mb-6
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
            shadow-lg
          ">

            <Brain className="h-8 w-8"/>

          </div>


          <p className="
            mb-3
            text-sm
            font-semibold
            uppercase
            tracking-widest
            text-purple-500
          ">
            AI Flashcards
          </p>


          <h2 className="
            text-4xl
            font-bold
            text-slate-900
          ">
            Revise Faster With AI Generated Flashcards
          </h2>


          <p className="
            mt-6
            text-lg
            leading-8
            text-slate-600
          ">
            Transform your notes and topics into smart
            flashcards designed for quick revision and better memory.
          </p>


          <ul className="
            mt-8
            space-y-3
            text-slate-700
          ">

            <li>✅ Create flashcards instantly</li>
            <li>✅ Convert notes into revision cards</li>
            <li>✅ Improve exam preparation</li>
            <li>✅ Learn with active recall</li>

          </ul>


          <button
            className="
            mt-10
            inline-flex
            items-center
            rounded-full
            bg-gradient-to-r
            from-purple-500
            to-pink-600
            px-6
            py-3
            font-semibold
            text-white
            shadow-lg
            transition
            hover:scale-105
            "
          >

            Start Flashcards

            <ArrowRight className="ml-2 h-5 w-5"/>

          </button>


        </div>



        {/* RIGHT SIDE PREVIEW */}


        <div className="
          rounded-3xl
          border
          border-purple-100
          bg-gradient-to-br
          from-purple-50
          to-pink-50
          p-8
          shadow-xl
        ">


          <div className="
            rounded-2xl
            bg-white
            p-8
            shadow
          ">


            <h3 className="
              text-xl
              font-bold
            ">
              Flashcard Preview
            </h3>


            <div className="
              mt-6
              rounded-2xl
              bg-gradient-to-br
              from-purple-500
              to-pink-600
              p-8
              text-center
              text-white
            ">

              <p className="text-sm opacity-80">
                Question
              </p>


              <p className="
                mt-4
                text-xl
                font-bold
              ">
                What is Virtual Memory?
              </p>


            </div>


            <div className="
              mt-4
              rounded-2xl
              bg-slate-50
              p-6
            ">

              <p className="text-sm text-slate-500">
                Answer
              </p>


              <p className="
                mt-2
                font-semibold
                text-slate-800
              ">
                A memory management technique that uses secondary storage.
              </p>


            </div>


          </div>


        </div>


      </div>


    </section>

  );

}