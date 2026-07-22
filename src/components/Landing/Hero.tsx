import {
  ArrowRight,
  Sparkles,
  Brain,
  FileText,
  BookOpen,
  ClipboardCheck,
  WandSparkles,
  Star,
} from "lucide-react";

import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { BrainBloomLogo } from "@/components/site/BrainBloomLogo";


export default function Hero() {

  const features = [
    {
      icon: ClipboardCheck,
      title: "AI Quiz",
      position: "top-8 left-4",
    },
    {
      icon: Brain,
      title: "Flashcards",
      position: "top-24 right-0",
    },
    {
      icon: FileText,
      title: "PDF Intelligence",
      position: "bottom-32 left-0",
    },
    {
      icon: BookOpen,
      title: "AI Tutor",
      position: "bottom-12 right-8",
    },
    {
      icon: WandSparkles,
      title: "AI Generator",
      position: "top-1/2 right-0",
    },
    {
      icon: Star,
      title: "Evaluation",
      position: "top-1/2 left-0",
    },
  ];


  const scrollToTools = () => {
    document
      .getElementById("ai-tools")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };


  return (

    <section
      className="
      relative
      overflow-hidden
      bg-gradient-to-b
      from-pink-50
      via-white
      to-purple-50
      "
    >

      <div
        className="
        absolute
        -top-40
        left-1/2
        h-[550px]
        w-[550px]
        -translate-x-1/2
        rounded-full
        bg-pink-200/40
        blur-3xl
        "
      />


      <div
        className="
        relative
        mx-auto
        flex
        max-w-7xl
        flex-col
        items-center
        gap-16
        px-6
        pt-32
        pb-24
        lg:flex-row
        lg:justify-between
        "
      >


        {/* LEFT */}

        <div className="max-w-xl">


          <div
            className="
            mb-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-pink-200
            bg-white
            px-5
            py-2
            shadow-sm
            "
          >

            <Sparkles className="h-4 w-4 text-pink-500"/>

            <span className="text-sm font-semibold text-pink-600">
              BrainBloom AI Learning Platform
            </span>

          </div>



          <h1
            className="
            text-5xl
            font-extrabold
            leading-tight
            text-slate-900
            sm:text-6xl
            "
          >

            Learn Smarter.

            <br/>

            <span
              className="
              bg-gradient-to-r
              from-pink-500
              via-purple-500
              to-indigo-500
              bg-clip-text
              text-transparent
              "
            >
              Bloom Faster.
            </span>

          </h1>



          <p className="
            mt-6
            text-lg
            leading-8
            text-slate-600
          ">
            Your AI-powered study companion that transforms
            PDFs, notes, and subjects into quizzes, flashcards,
            summaries, evaluations, and personalized learning.
          </p>



          <div className="mt-10 flex flex-wrap gap-4">


            <Button
              size="lg"
              onClick={scrollToTools}
              className="
              rounded-full
              bg-gradient-to-r
              from-pink-500
              to-purple-600
              px-7
              shadow-lg
              "
            >
              Start Learning
            </Button>



            <Link to="/explore">

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-7"
              >

                Explore Features

                <ArrowRight className="ml-2 h-4 w-4"/>

              </Button>

            </Link>


          </div>


        </div>




        {/* RIGHT BRAIN MAP */}


        <div
          className="
          relative
          flex
          h-[420px]
          w-[420px]
          items-center
          justify-center
          sm:h-[480px]
          sm:w-[480px]
          "
        >


          <div className="
            absolute
            h-72
            w-72
            rounded-full
            border
            border-pink-200
          "/>


          <div className="
            absolute
            h-96
            w-96
            rounded-full
            border
            border-purple-100
          "/>



          <div className="
            z-10
            flex
            h-32
            w-32
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-2xl
          ">

            <BrainBloomLogo size={90}/>

          </div>




          {features.map((item,index)=>{

            const Icon=item.icon;


            return (

              <div
                key={index}
                className={`
                absolute
                ${item.position}
                flex
                items-center
                gap-2
                rounded-2xl
                border
                bg-white
                px-4
                py-3
                shadow-lg
                `}
              >

                <Icon className="h-5 w-5 text-pink-500"/>

                <span className="
                  text-sm
                  font-semibold
                  text-slate-700
                ">
                  {item.title}
                </span>

              </div>

            );

          })}



        </div>


      </div>


    </section>

  );

}