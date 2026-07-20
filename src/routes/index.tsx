import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bot,
  Brain,
  FileText,
  Layers,
  CalendarDays,
  MessageSquareText,
  ClipboardCheck,
  GraduationCap,
  ArrowRight,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { FeatureCard, PageShell } from "@/components/site/Shared";

export const Route = createFileRoute("/")({
  component: Index,
});


function Index() {
  return (
    <>

      {/* Hero */}
      <section className="relative overflow-hidden">

        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, oklch(0.55 0.22 270 / 0.35), transparent 60%)",
          }}
        />


        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 text-center sm:pt-24">

          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1 text-xs text-muted-foreground">
            <Star className="h-3.5 w-3.5 text-primary" />
            Powered by Gemini AI
          </div>


          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">

            Your Personal{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              AI Study Assistant
            </span>

          </h1>


          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">

            Learn, practice, revise, and prepare smarter with AI-powered
            quizzes, summaries, flashcards, study plans, and personalized
            feedback.

          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-3">


            <Link to="/dashboard">
              <Button size="lg" className="rounded-full">
                Open Dashboard
              </Button>
            </Link>


            <Link to="/learn">
              <Button size="lg" className="rounded-full">
                Start Learning
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>


            <Link to="/generate-quiz">
              <Button size="lg" variant="outline" className="rounded-full">
                Generate Quiz
              </Button>
            </Link>


            <Link to="/pdf-chat">
              <Button size="lg" variant="outline" className="rounded-full">
                Chat With PDF
              </Button>
            </Link>


          </div>

        </div>

      </section>



      <PageShell>


        {/* Features */}

        <section>

          <div className="mb-8 text-center">

            <h2 className="text-2xl font-bold sm:text-3xl">
              Your Complete AI Study Toolkit
            </h2>

            <p className="mt-2 text-muted-foreground">
              Eight powerful AI features in one learning workspace.
            </p>

          </div>



          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">


            <FeatureCard
              icon={<GraduationCap className="h-5 w-5" />}
              title="AI Learning"
              desc="Learn any topic with structured AI explanations."
            />


            <FeatureCard
              icon={<Bot className="h-5 w-5" />}
              title="AI Chat"
              desc="Ask questions and get instant AI explanations."
            />


            <FeatureCard
              icon={<Brain className="h-5 w-5" />}
              title="Quiz Generator"
              desc="Generate MCQs from any subject instantly."
            />


            <FeatureCard
              icon={<FileText className="h-5 w-5" />}
              title="PDF Summarizer"
              desc="Convert long notes into simple summaries."
            />


            <FeatureCard
              icon={<Layers className="h-5 w-5" />}
              title="Flashcards"
              desc="Create AI-powered revision flashcards."
            />


            <FeatureCard
              icon={<CalendarDays className="h-5 w-5" />}
              title="Study Planner"
              desc="Generate personalized study schedules."
            />


            <FeatureCard
              icon={<ClipboardCheck className="h-5 w-5" />}
              title="Answer Evaluation"
              desc="Get AI scoring and improvement feedback."
            />


            <FeatureCard
              icon={<MessageSquareText className="h-5 w-5" />}
              title="PDF Chat"
              desc="Ask questions directly from uploaded PDFs."
            />


          </div>

        </section>




        {/* Quick Access */}

        <section className="mt-16">


          <div className="mb-6">

            <h2 className="text-2xl font-bold">
              Quick Access
            </h2>

            <p className="text-sm text-muted-foreground">
              Choose a tool and start studying.
            </p>

          </div>



          <div className="grid gap-4 md:grid-cols-3">


            {[
              {
                title: "Generate Quiz",
                link: "/generate-quiz",
                icon: Brain,
              },

              {
                title: "Summarize PDF",
                link: "/summarizer",
                icon: FileText,
              },

              {
                title: "Create Flashcards",
                link: "/flashcards",
                icon: Layers,
              },

              {
                title: "Make Study Plan",
                link: "/planner",
                icon: CalendarDays,
              },

              {
                title: "Evaluate Answer",
                link: "/evaluate",
                icon: ClipboardCheck,
              },

              {
                title: "Chat With PDF",
                link: "/pdf-chat",
                icon: MessageSquareText,
              },

            ].map((item) => {

              const Icon = item.icon;

              return (

                <Link
                  key={item.title}
                  to={item.link}
                  className="rounded-2xl border border-border/60 bg-card p-5 transition hover:shadow-lg"
                >

                  <Icon className="h-6 w-6 text-primary" />

                  <h3 className="mt-3 font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Open AI tool
                  </p>

                </Link>

              );

            })}


          </div>


        </section>





        {/* CTA */}

        <section
          className="mt-16 overflow-hidden rounded-3xl p-10 text-center text-primary-foreground"
          style={{ background: "var(--gradient-hero)" }}
        >

          <h2 className="text-3xl font-bold">
            Ready to study smarter?
          </h2>


          <p className="mx-auto mt-2 max-w-xl opacity-90">
            Use AI to learn faster, revise better, and prepare confidently.
          </p>



          <div className="mt-6 flex flex-wrap justify-center gap-3">


            <Link to="/generate-quiz">

              <Button
                size="lg"
                variant="secondary"
                className="rounded-full"
              >
                Generate Quiz
              </Button>

            </Link>



            <Link to="/chat">

              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20"
              >
                Talk to AI
              </Button>

            </Link>


          </div>


        </section>


      </PageShell>

    </>
  );
}