import { Link } from "@tanstack/react-router";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="grid h-9 w-9 place-items-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold">BrainBloom AI</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Learn smarter with AI-powered lessons, quizzes, and tutoring.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/learn" className="hover:text-primary">Learn</Link></li>
            <li><Link to="/generate-quiz" className="hover:text-primary">Quiz Generator</Link></li>
            <li><Link to="/chat" className="hover:text-primary">AI Tutor</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Follow</h4>
          <div className="flex gap-3 text-muted-foreground">
            <Github className="h-5 w-5 hover:text-primary" />
            <Twitter className="h-5 w-5 hover:text-primary" />
            <Linkedin className="h-5 w-5 hover:text-primary" />
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} QuizGenius AI. All rights reserved.
      </div>
    </footer>
  );
}