import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain,
  FileText,
  Layers,
  CalendarDays,
  ClipboardCheck,
  MessageSquareText,
  Bot,
} from "lucide-react";

import { PageShell } from "@/components/site/Shared";


export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});


const tools = [
  {
    title: "AI Chat",
    description: "Ask questions and learn with your AI tutor.",
    link: "/chat",
    icon: Bot,
  },
  {
    title: "Quiz Generator",
    description: "Create AI-powered quizzes instantly.",
    link: "/generate-quiz",
    icon: Brain,
  },
  {
    title: "PDF Summarizer",
    description: "Convert long notes into simple summaries.",
    link: "/summarizer",
    icon: FileText,
  },
  {
    title: "Flashcards",
    description: "Generate smart revision cards.",
    link: "/flashcards",
    icon: Layers,
  },
  {
    title: "Study Planner",
    description: "Create personalized study schedules.",
    link: "/planner",
    icon: CalendarDays,
  },
  {
    title: "Answer Evaluation",
    description: "Get AI feedback on your answers.",
    link: "/evaluate",
    icon: ClipboardCheck,
  },
  {
    title: "PDF Chat",
    description: "Chat with your uploaded documents.",
    link: "/pdf-chat",
    icon: MessageSquareText,
  },
];


function Dashboard() {

  return (

    <PageShell>

      <div className="text-center">

        <h1 className="text-4xl font-bold">
          Welcome to QuizGenius AI 🚀
        </h1>

        <p className="mt-3 text-muted-foreground">
          Your complete AI-powered study workspace.
        </p>

      </div>



      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">


        {tools.map((tool) => {

          const Icon = tool.icon;


          return (

            <Link
              key={tool.title}
              to={tool.link}
              className="rounded-2xl border border-border/60 bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="grid h-12 w-12 place-items-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-hero)" }}
              >

                <Icon className="h-6 w-6" />

              </div>


              <h2 className="mt-4 text-lg font-semibold">
                {tool.title}
              </h2>


              <p className="mt-2 text-sm text-muted-foreground">
                {tool.description}
              </p>


            </Link>

          );

        })}


      </section>


    </PageShell>

  );
}