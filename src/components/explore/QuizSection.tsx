import { Link } from "@tanstack/react-router";
import { ClipboardCheck, ArrowRight } from "lucide-react";

export default function QuizSection() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div>

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg">

            <ClipboardCheck className="h-8 w-8" />

          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-500">
            AI Quiz Generator
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Practice Smarter with AI Generated Quizzes
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Create unlimited quizzes from any topic.
            Choose the difficulty, number of questions,
            and let BrainBloom generate personalized practice tests instantly.
          </p>

          <ul className="mt-8 space-y-3 text-slate-700">
            <li>✅ Generate quizzes from any topic</li>
            <li>✅ Easy, Medium & Hard difficulty</li>
            <li>✅ Instant AI generation</li>
            <li>✅ Perfect for exam preparation</li>
          </ul>

          <Link
            to="/generate-quiz"
            className="mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Start Quiz

            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

        </div>

        {/* RIGHT SIDE */}

        <div className="rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 to-purple-50 p-8 shadow-xl">

          <div className="rounded-2xl bg-white p-6 shadow">

            <h3 className="text-xl font-bold">
              Quiz Preview
            </h3>

            <div className="mt-6 space-y-4">

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">
                  Topic
                </p>

                <p className="font-semibold">
                  Operating System
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">
                  Difficulty
                </p>

                <p className="font-semibold">
                  Medium
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">
                  Questions
                </p>

                <p className="font-semibold">
                  20 Questions
                </p>
              </div>

              <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-3 font-semibold text-white">
                Generate Quiz
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}