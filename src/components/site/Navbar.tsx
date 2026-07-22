import { Link } from "@tanstack/react-router";
import { BrainBloomLogo } from "./BrainBloomLogo";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="
      fixed top-4 left-1/2 z-50
      w-[95%] max-w-6xl
      -translate-x-1/2
      rounded-2xl
      border border-white/40
      bg-white/80
      px-5 py-3
      shadow-lg
      backdrop-blur-xl
    ">

      <div className="flex items-center justify-between">


        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2"
        >

          <BrainBloomLogo size={50}/>

          <span className="text-xl font-bold text-slate-900">
            BrainBloom AI
          </span>

        </Link>



        {/* Center Navigation */}

        <div className="hidden md:flex items-center gap-7">


          {/* Features Dropdown */}

          <div className="relative">

            <button
              onClick={()=>setOpen(!open)}
              className="
              flex items-center gap-1
              text-sm
              font-medium
              text-slate-600
              hover:text-pink-500
              "
            >

              Features

              <ChevronDown size={16}/>

            </button>



            {open && (

              <div className="
              absolute
              top-8
              left-0
              w-56
              rounded-2xl
              border
              bg-white
              p-3
              shadow-xl
              ">


                <Link
                  to="/generate-quiz"
                  className="block rounded-lg p-2 hover:bg-pink-50"
                >
                  📝 Quiz Generator
                </Link>


                <Link
                  to="/flashcards"
                  className="block rounded-lg p-2 hover:bg-pink-50"
                >
                  🧠 Flashcards
                </Link>


                <Link
                  to="/summarizer"
                  className="block rounded-lg p-2 hover:bg-pink-50"
                >
                  📄 PDF Summarizer
                </Link>


                <Link
                  to="/pdf-chat"
                  className="block rounded-lg p-2 hover:bg-pink-50"
                >
                  💬 PDF Chat
                </Link>


                <Link
                  to="/chat"
                  className="block rounded-lg p-2 hover:bg-pink-50"
                >
                  🤖 AI Tutor
                </Link>


                <Link
                  to="/evaluate"
                  className="block rounded-lg p-2 hover:bg-pink-50"
                >
                  ⭐ AI Evaluation
                </Link>


              </div>

            )}

          </div>



          <Link
            to="/dashboard"
            className="
            text-sm
            font-medium
            text-slate-600
            hover:text-pink-500
            "
          >
            Dashboard
          </Link>


        </div>




        {/* Login */}

        <Link
          to="/login"
          className="
          rounded-full
          bg-gradient-to-r
          from-pink-500
          to-purple-600
          px-5 py-2
          text-sm
          font-semibold
          text-white
          shadow-md
          "
        >
          Login / Sign Up
        </Link>


      </div>

    </nav>
  );
}