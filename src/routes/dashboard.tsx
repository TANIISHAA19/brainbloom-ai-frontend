import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  console.log("🚀 Dashboard component rendered");
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    quizCount: 0,
    flashcardCount: 0,
    summaryCount: 0,
    plannerCount: 0,
  });

 useEffect(() => {
  console.log("Dashboard useEffect started");

  const token = localStorage.getItem("token");
  console.log("Token:", token);

  if (!token) {
    console.log("No token found");
    navigate({ to: "/login" });
    return;
  }

  const fetchStats = async () => {
    console.log("Calling dashboard API...");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/dashboard/stats`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response status:", response.status);

      const data = await response.json();
      console.log("Dashboard data:", data);

      setStats(data);
    } catch (error) {
      console.error("Dashboard fetch error:", error);
    }
  };

  fetchStats();
}, [navigate]);


  return (
    <PageShell>
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Welcome to BrainBloom AI 🌸
        </h1>

        <p className="mt-3 text-muted-foreground">
          Learn smarter with AI-powered quizzes, flashcards,
          study planners, PDF tools and your personal AI tutor.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border bg-card p-5 text-center shadow-sm">
          <h3 className="text-sm text-muted-foreground">Quizzes</h3>
          <p className="mt-2 text-3xl font-bold">
            {stats.quizCount}
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-5 text-center shadow-sm">
          <h3 className="text-sm text-muted-foreground">
            Flashcards
          </h3>
          <p className="mt-2 text-3xl font-bold">
            {stats.flashcardCount}
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-5 text-center shadow-sm">
          <h3 className="text-sm text-muted-foreground">
            Summaries
          </h3>
          <p className="mt-2 text-3xl font-bold">
            {stats.summaryCount}
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-5 text-center shadow-sm">
          <h3 className="text-sm text-muted-foreground">
            Study Plans
          </h3>
          <p className="mt-2 text-3xl font-bold">
            {stats.plannerCount}
          </p>
        </div>
      </div>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <Link
              key={tool.title}
              to={tool.link}
              className="rounded-2xl border border-border/60 bg-card p-6 transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-xl text-primary-foreground"
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

            <div className="mt-10 rounded-2xl border bg-card p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Continue Learning
        </h2>

        <p className="mt-2 text-muted-foreground">
          Jump back into your AI Tutor and continue your study journey.
        </p>

        <Link
          to="/chat"
          className="mt-5 inline-block rounded-full bg-primary px-6 py-3 text-primary-foreground"
        >
          Resume AI Tutor →
        </Link>
      </div>

      <div className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-bold">
          💡 Daily Motivation
        </h2>

        <p className="mt-3 italic text-muted-foreground">
          "Small progress every day leads to big success."
        </p>
      </div>
    </PageShell>
  );
}

export default Dashboard;