import { FileText, ArrowRight, MessageSquare } from "lucide-react";


export default function PDFSection() {

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
            from-blue-500
            to-purple-600
            text-white
            shadow-lg
          ">

            <FileText className="h-8 w-8"/>

          </div>



          <p className="
            mb-3
            text-sm
            font-semibold
            uppercase
            tracking-widest
            text-blue-500
          ">
            PDF Intelligence
          </p>



          <h2 className="
            text-4xl
            font-bold
            text-slate-900
          ">
            Understand Your PDFs With AI
          </h2>



          <p className="
            mt-6
            text-lg
            leading-8
            text-slate-600
          ">
            Upload your study material and let BrainBloom
            summarize, explain, and answer questions from your PDFs.
          </p>



          <ul className="
            mt-8
            space-y-3
            text-slate-700
          ">

            <li>✅ Upload and analyze PDFs</li>

            <li>✅ Generate instant summaries</li>

            <li>✅ Ask questions from documents</li>

            <li>✅ Learn complex topics faster</li>

          </ul>




          <button
            className="
            mt-10
            inline-flex
            items-center
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-purple-600
            px-6
            py-3
            font-semibold
            text-white
            shadow-lg
            transition
            hover:scale-105
            "
          >

            Explore PDF AI

            <ArrowRight className="ml-2 h-5 w-5"/>

          </button>



        </div>





        {/* RIGHT SIDE PREVIEW */}


        <div className="
          rounded-3xl
          border
          border-blue-100
          bg-gradient-to-br
          from-blue-50
          to-purple-50
          p-8
          shadow-xl
        ">


          <div className="
            rounded-2xl
            bg-white
            p-6
            shadow
          ">


            <div className="
              flex
              items-center
              gap-3
            ">

              <FileText className="text-blue-500"/>

              <div>

                <h3 className="
                  font-bold
                ">
                  Operating_System_Notes.pdf
                </h3>

                <p className="
                  text-sm
                  text-slate-500
                ">
                  42 pages analyzed
                </p>

              </div>


            </div>




            <div className="
              mt-6
              rounded-xl
              bg-slate-50
              p-5
            ">


              <p className="
                text-sm
                text-slate-500
              ">
                AI Summary
              </p>


              <p className="
                mt-2
                font-semibold
                text-slate-800
              ">
                "This document explains memory management,
                processes, and operating system concepts."
              </p>


            </div>




            <div className="
              mt-4
              flex
              items-center
              gap-3
              rounded-xl
              bg-purple-50
              p-4
            ">

              <MessageSquare className="
                text-purple-600
              "/>


              <p className="
                text-sm
                font-semibold
                text-slate-700
              ">
                Ask anything about this PDF...
              </p>


            </div>



          </div>


        </div>


      </div>


    </section>

  );

}