import { Link } from "@tanstack/react-router";
import { LockKeyhole } from "lucide-react";


export default function SaveProgress() {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-purple-50 px-6 py-20">

      <div className="mx-auto max-w-4xl text-center">

        <div className="
        mx-auto
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
        ">

          <LockKeyhole size={32}/>

        </div>


        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          Save Your Learning Journey
        </h2>


        <p className="mx-auto mt-4 max-w-xl text-slate-600">

          Login to save your quizzes, flashcards,
          PDF summaries, evaluations, and progress.

          You can also continue as a guest with temporary access.

        </p>


        <div className="mt-8 flex justify-center gap-4">

          <Link
            to="/login"
            className="
            rounded-full
            bg-gradient-to-r
            from-pink-500
            to-purple-600
            px-7
            py-3
            font-semibold
            text-white
            "
          >
            Login / Sign Up
          </Link>


          <Link
            to="/learn"
            className="
            rounded-full
            border
            px-7
            py-3
            font-semibold
            text-slate-700
            "
          >
            Continue as Guest
          </Link>

        </div>

      </div>

    </section>
  );
}