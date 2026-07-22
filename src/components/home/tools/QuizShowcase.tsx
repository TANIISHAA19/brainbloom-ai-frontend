import { Link } from "@tanstack/react-router";
import {
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function QuizShowcase() {
  return (
    <section
      id="quiz-generator"
      className="py-28 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-xl">
            <ClipboardCheck size={30} />
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-pink-500">
            AI Quiz Generator
          </p>

          <h2 className="text-5xl font-bold leading-tight text-slate-900">
            Generate quizzes for
            <span className="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              any subject instantly.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Practice exactly what you need. Select your topic, choose the
            difficulty, decide how many questions you want, and let BrainBloom
            create an AI-powered quiz in seconds.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Generate quizzes from any topic</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Easy • Medium • Hard Difficulty</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Unlimited AI-generated questions</span>
            </div>

          </div>

          <Link
            to="/generate-quiz"
            className="mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Start Quiz
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

        </div>

        {/* RIGHT */}
        <div className="rounded-[32px] border border-pink-100 bg-white p-8 shadow-2xl">

          <div className="mb-6 flex items-center justify-between">

            <h3 className="text-xl font-bold">
              BrainBloom Quiz
            </h3>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              Ready
            </span>

          </div>

          <div className="mb-5 rounded-2xl bg-slate-50 p-5">

            <p className="text-sm text-slate-500">
              Topic
            </p>

            <p className="mt-1 font-semibold">
              Operating System
            </p>

          </div>

          <div className="mb-5 rounded-2xl bg-slate-50 p-5">

            <p className="text-sm text-slate-500">
              Difficulty
            </p>

            <div className="mt-3 flex gap-2">

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm">
                Easy
              </span>

              <span className="rounded-full bg-pink-100 px-3 py-1 text-sm">
                Medium
              </span>

              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm">
                Hard
              </span>

            </div>

          </div>

          <div className="mb-8 rounded-2xl bg-slate-50 p-5">

            <p className="text-sm text-slate-500">
              Questions
            </p>

            <div className="mt-3 flex gap-2">

              <span className="rounded-full bg-white px-3 py-1 shadow">
                10
              </span>

              <span className="rounded-full bg-pink-500 px-3 py-1 text-white shadow">
                20
              </span>

              <span className="rounded-full bg-white px-3 py-1 shadow">
                30
              </span>

            </div>

          </div>

          <button className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 py-4 font-semibold text-white transition hover:opacity-90">
            Generate Quiz
          </button>

        </div>

      </div>
    </section>
  );
}