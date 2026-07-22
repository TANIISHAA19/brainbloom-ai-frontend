import { Sparkles, ArrowRight, CheckCircle } from "lucide-react";


export default function EvaluationSection() {

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
            from-yellow-400
            to-pink-500
            text-white
            shadow-lg
          ">

            <Sparkles className="h-8 w-8"/>

          </div>



          <p className="
            mb-3
            text-sm
            font-semibold
            uppercase
            tracking-widest
            text-pink-500
          ">
            AI Evaluation
          </p>



          <h2 className="
            text-4xl
            font-bold
            text-slate-900
          ">
            Improve Your Answers With AI Feedback
          </h2>



          <p className="
            mt-6
            text-lg
            leading-8
            text-slate-600
          ">
            Submit your answers and get instant AI-powered
            evaluation, suggestions, and improvement tips.
          </p>



          <ul className="
            mt-8
            space-y-3
            text-slate-700
          ">

            <li>✅ Analyze your answers</li>

            <li>✅ Get accuracy scores</li>

            <li>✅ Find improvement areas</li>

            <li>✅ Prepare better for exams</li>

          </ul>



          <button
            className="
            mt-10
            inline-flex
            items-center
            rounded-full
            bg-gradient-to-r
            from-yellow-400
            to-pink-500
            px-6
            py-3
            font-semibold
            text-white
            shadow-lg
            transition
            hover:scale-105
            "
          >

            Evaluate Answer

            <ArrowRight className="ml-2 h-5 w-5"/>

          </button>


        </div>




        {/* RIGHT SIDE PREVIEW */}


        <div className="
          rounded-3xl
          border
          border-yellow-100
          bg-gradient-to-br
          from-yellow-50
          to-pink-50
          p-8
          shadow-xl
        ">


          <div className="
            rounded-2xl
            bg-white
            p-6
            shadow
          ">


            <h3 className="
              text-xl
              font-bold
            ">
              AI Feedback Report
            </h3>



            <div className="
              mt-6
              space-y-4
            ">


              <div className="
                rounded-xl
                bg-slate-50
                p-4
              ">

                <p className="
                  text-sm
                  text-slate-500
                ">
                  Score
                </p>


                <p className="
                  mt-1
                  text-3xl
                  font-bold
                  text-pink-600
                ">
                  85%
                </p>

              </div>



              <div className="
                rounded-xl
                bg-green-50
                p-4
              ">

                <div className="
                  flex
                  items-center
                  gap-2
                  font-semibold
                  text-green-700
                ">

                  <CheckCircle size={18}/>

                  Strong Concept Understanding

                </div>


              </div>



              <div className="
                rounded-xl
                bg-purple-50
                p-4
                text-sm
                font-semibold
                text-slate-700
              ">

                Suggestion:
                Add more examples to improve your answer.

              </div>



            </div>


          </div>


        </div>


      </div>


    </section>

  );

}