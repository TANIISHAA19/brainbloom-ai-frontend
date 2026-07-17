import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Brain, Zap, BarChart3, ArrowRight, GraduationCap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard, PageShell } from "@/components/site/Shared";
import { testimonials } from "@/data/mock";

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
            Powered by next-gen learning AI
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Learn Smarter with{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              AI
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Generate personalized lessons, quizzes, and explanations instantly using AI.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/learn">
              <Button size="lg" className="rounded-full">
                Start Learning <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/generate-quiz">
              <Button size="lg" variant="outline" className="rounded-full">
                Generate Quiz
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <PageShell>
        {/* Features */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Everything you need to learn</h2>
            <p className="mt-2 text-muted-foreground">Four powerful tools in one clean workspace.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={<Bot className="h-5 w-5" />} title="AI Tutor" desc="Chat with an AI tutor that explains topics in plain language." />
            <FeatureCard icon={<Brain className="h-5 w-5" />} title="AI Quiz Generator" desc="Create quizzes on any topic in seconds — MCQ, T/F, or mixed." />
            <FeatureCard icon={<Zap className="h-5 w-5" />} title="Instant Feedback" desc="Get answers and explanations the moment you submit." />
            <FeatureCard icon={<BarChart3 className="h-5 w-5" />} title="Performance Analytics" desc="Track accuracy, weak topics, and growth over time." />
          </div>
        </section>

        {/* Recent Learning */}
        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">Recent Learning</h2>
              <p className="text-sm text-muted-foreground">Pick up where you left off.</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "Operating Systems", p: 72 },
              { t: "Data Structures", p: 45 },
              { t: "Computer Networks", p: 88 },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-border/60 bg-card p-5"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{c.t}</div>
                    <div className="text-xs text-muted-foreground">Continue lesson</div>
                  </div>
                </div>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full" style={{ width: `${c.p}%`, background: "var(--gradient-hero)" }} />
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{c.p}% complete</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-16">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Loved by learners</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm">{t.quote}</p>
                <div className="mt-4 text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="mt-16 overflow-hidden rounded-3xl p-10 text-center text-primary-foreground"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="text-3xl font-bold">Ready to level up your studies?</h2>
          <p className="mx-auto mt-2 max-w-xl opacity-90">
            Join thousands of learners using AI to master any subject faster.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/generate-quiz">
              <Button size="lg" variant="secondary" className="rounded-full">
                Generate a Quiz
              </Button>
            </Link>
            <Link to="/chat">
              <Button size="lg" variant="outline" className="rounded-full border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20">
                Talk to AI Tutor
              </Button>
            </Link>
          </div>
        </section>
      </PageShell>
    </>
  );
}
