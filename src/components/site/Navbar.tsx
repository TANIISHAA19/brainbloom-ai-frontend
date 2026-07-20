import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";


const links = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/learn", label: "Learn" },
  { to: "/chat", label: "AI Chat" },
  { to: "/generate-quiz", label: "Quiz Generator" },
  { to: "/flashcards", label: "Flashcards" },
  { to: "/summarizer", label: "Summarizer" },
  { to: "/planner", label: "Planner" },
  { to: "/evaluate", label: "Evaluation" },
  { to: "/pdf-chat", label: "PDF Chat" },
];


export function Navbar() {

  const [open, setOpen] = useState(false);


  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">


        {/* Logo */}

        <Link to="/" className="flex items-center gap-2">

          <span
            className="grid h-9 w-9 place-items-center rounded-xl text-primary-foreground"
            style={{ background: "var(--gradient-hero)" }}
          >
            <Sparkles className="h-5 w-5" />
          </span>


          <span className="text-lg font-bold tracking-tight">
            QuizGenius <span className="text-primary">AI</span>
          </span>

        </Link>




        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-1 lg:flex">

          {links.map((link) => (

            <Link
              key={link.to}
              to={link.to}
              activeOptions={{
                exact: link.to === "/",
              }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{
                className: "text-primary bg-accent",
              }}
            >
              {link.label}
            </Link>

          ))}



          <Link to="/generate-quiz" className="ml-2">

            <Button
              size="sm"
              className="rounded-full"
            >
              Get Started
            </Button>

          </Link>


        </nav>





        {/* Mobile Menu Button */}

        <button
          className="rounded-lg p-2 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >

          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}

        </button>


      </div>





      {/* Mobile Navigation */}

      {open && (

        <div className="border-t border-border/60 bg-background lg:hidden">

          <nav className="mx-auto flex max-w-7xl flex-col p-3">


            {links.map((link) => (

              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                activeProps={{
                  className: "text-primary bg-accent",
                }}
              >

                {link.label}

              </Link>

            ))}


          </nav>

        </div>

      )}


    </header>
  );
}