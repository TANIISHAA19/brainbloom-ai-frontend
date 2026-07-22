import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain,
  ClipboardCheck,
  BookOpen,
  FileText,
  Sparkles,
  CalendarDays,
} from "lucide-react";


export const Route = createFileRoute("/learn")({
  component: LearnPage,
});


const modules = [
  {
    title: "AI Tutor",
    description:
      "Understand concepts with personalized AI explanations.",
    icon: Brain,
    route: "/chat",
  },
  {
    title: "Quiz Generator",
    description:
      "Create quizzes and test your understanding.",
    icon: ClipboardCheck,
    route: "/generate-quiz",
  },
  {
    title: "Flashcards",
    description:
      "Revise faster with smart AI flashcards.",
    icon: BookOpen,
    route: "/flashcards",
  },
  {
    title: "PDF Chat",
    description:
      "Upload notes and ask questions from your documents.",
    icon: FileText,
    route: "/pdf-chat",
  },
  {
    title: "Summarizer",
    description:
      "Turn lengthy notes into simple summaries.",
    icon: Sparkles,
    route: "/summarizer",
  },
  {
    title: "Study Planner",
    description:
      "Plan your preparation with an AI schedule.",
    icon: CalendarDays,
    route: "/planner",
  },
];


function LearnPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 px-6 py-24">

      <section className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">

          <h1 className="text-5xl font-extrabold text-slate-900">
            How do you want to{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              learn today?
            </span>
          </h1>

          <p className="mt-5 text-lg text-slate-600">
            Choose your learning style and let BrainBloom guide you.
          </p>

        </div>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {modules.map((module) => {

            const Icon = module.icon;

            return (
              <Link
                key={module.title}
                to={module.route}
                className="
                group
                rounded-3xl
                border
                border-pink-100
                bg-white/80
                p-8
                shadow-lg
                backdrop-blur-xl
                transition
                hover:-translate-y-2
                "
              >

                <div className="
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-pink-500
                  to-purple-600
                  text-white
                ">
                  <Icon size={28}/>
                </div>


                <h2 className="text-xl font-bold text-slate-900">
                  {module.title}
                </h2>


                <p className="mt-3 text-slate-600">
                  {module.description}
                </p>


                <p className="mt-6 font-semibold text-pink-600">
                  Start →
                </p>

              </Link>
            );
          })}

        </div>

      </section>

    </main>
  );
}