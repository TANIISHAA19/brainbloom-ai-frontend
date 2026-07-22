import { ArrowDown, Sparkles } from "lucide-react";

export default function ExploreHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-white to-purple-50">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-5 py-2 shadow-sm">
          <Sparkles className="h-4 w-4 text-pink-500" />

          <span className="text-sm font-semibold text-pink-600">
            Explore BrainBloom AI
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">

          Discover Every Way

          <br />

          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            To Learn Smarter
          </span>

        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">

          BrainBloom combines powerful AI tools into one intelligent learning
          platform. Generate quizzes, create flashcards, summarize PDFs,
          chat with your notes, evaluate answers, and master any subject
          faster than ever.

        </p>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Scroll to Explore
          </p>

          <div className="animate-bounce rounded-full border border-pink-200 bg-white p-4 shadow-lg">
            <ArrowDown className="h-6 w-6 text-pink-500" />
          </div>

        </div>

      </div>

    </section>
  );
}