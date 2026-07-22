import { Link } from "@tanstack/react-router";
import { Brain, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-16 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600">
              <Brain className="h-6 w-6" />
            </div>

            <span className="text-xl font-bold">
              BrainBloom AI
            </span>

          </div>


          <p className="mt-4 text-sm leading-6 text-slate-400">
            Your AI-powered learning companion for smarter study,
            personalized practice, and better results.
          </p>

        </div>


        {/* Product */}
        <div>
          <h3 className="mb-4 font-semibold">
            Product
          </h3>

          <ul className="space-y-3 text-sm text-slate-400">

            <li>
              <Link to="/learn" className="hover:text-pink-400">
                AI Tutor
              </Link>
            </li>

            <li>
              <Link to="/generate-quiz" className="hover:text-pink-400">
                Quiz Generator
              </Link>
            </li>

            <li>
              <Link to="/flashcards" className="hover:text-pink-400">
                Flashcards
              </Link>
            </li>

            <li>
              <Link to="/pdf-chat" className="hover:text-pink-400">
                PDF Chat
              </Link>
            </li>

          </ul>
        </div>


        {/* Company */}
        <div>
          <h3 className="mb-4 font-semibold">
            Company
          </h3>

          <ul className="space-y-3 text-sm text-slate-400">

            <li className="hover:text-pink-400">
              About
            </li>

            <li className="hover:text-pink-400">
              Features
            </li>

            <li className="hover:text-pink-400">
              Contact
            </li>

          </ul>

        </div>


        {/* Social */}
        <div>

          <h3 className="mb-4 font-semibold">
            Follow
          </h3>


          <div className="flex gap-4">

            <Github className="h-5 w-5 text-slate-400 hover:text-pink-400" />

            <Twitter className="h-5 w-5 text-slate-400 hover:text-pink-400" />

            <Linkedin className="h-5 w-5 text-slate-400 hover:text-pink-400" />

          </div>

        </div>

      </div>


      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-500">

        © {new Date().getFullYear()} BrainBloom AI. All rights reserved.

      </div>

    </footer>
  );
}