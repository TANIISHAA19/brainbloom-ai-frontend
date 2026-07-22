import { MessageCircle, ArrowRight, Bot } from "lucide-react";
import { Link } from "@tanstack/react-router";


export default function AITutorSection() {

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
            from-pink-500
            to-purple-600
            text-white
            shadow-lg
          ">

            <Bot className="h-8 w-8"/>

          </div>



          <p className="
            mb-3
            text-sm
            font-semibold
            uppercase
            tracking-widest
            text-pink-500
          ">
            AI Tutor
          </p>



          <h2 className="
            text-4xl
            font-bold
            text-slate-900
          ">
            Your Personal AI Study Partner
          </h2>



          <p className="
            mt-6
            text-lg
            leading-8
            text-slate-600
          ">
            Ask questions, clear doubts, and get
            personalized explanations anytime with your AI tutor.
          </p>



          <ul className="
            mt-8
            space-y-3
            text-slate-700
          ">

            <li>✅ Instant answers to your questions</li>

            <li>✅ Simple explanations for difficult topics</li>

            <li>✅ Personalized learning support</li>

            <li>✅ Available anytime you study</li>

          </ul>



          <Link
               to="/chat"
               className="
               mt-10
               inline-flex
               items-center
               rounded-full
               bg-gradient-to-r
               from-pink-500
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

               Chat With AI Tutor

              <ArrowRight className="ml-2 h-5 w-5"/>

       </Link>

        </div>




        {/* RIGHT PREVIEW */}


        <div className="
          rounded-3xl
          border
          border-pink-100
          bg-gradient-to-br
          from-pink-50
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


            <h3 className="
              text-xl
              font-bold
            ">
              AI Tutor Chat
            </h3>



            <div className="
              mt-6
              space-y-4
            ">


              <div className="
                rounded-xl
                bg-slate-100
                p-4
                text-sm
                text-slate-700
              ">
                Explain Operating System scheduling.
              </div>



              <div className="
                rounded-xl
                bg-gradient-to-r
                from-pink-500
                to-purple-600
                p-4
                text-sm
                text-white
              ">
                CPU scheduling decides how processes are
                selected and executed efficiently.
              </div>



              <div className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-purple-50
                p-4
              ">

                <MessageCircle className="text-purple-600"/>

                <span className="
                  text-sm
                  font-semibold
                  text-slate-700
                ">
                  Ask your next question...
                </span>

              </div>



            </div>


          </div>


        </div>


      </div>


    </section>

  );

}