import { Link } from "@tanstack/react-router";
import { Brain, User, LogIn, X } from "lucide-react";

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
  onGuest: () => void;
};

export default function LoginModal({
  open,
  onClose,
  onGuest,
}: LoginModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white">
          <Brain size={32} />
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold">
          Welcome to BrainBloom
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Save your learning journey or continue as a guest.
        </p>

        <div className="mt-8 space-y-4">

          <button
            onClick={onGuest}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-pink-500 py-3 font-semibold text-pink-600 transition hover:bg-pink-50"
          >
            <User size={20} />
            Continue as Guest
          </button>

          <Link
            to="/login"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-3 font-semibold text-white transition hover:opacity-90"
          >
            <LogIn size={20} />
            Login / Sign Up
          </Link>

        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Guest mode won't save your quizzes, flashcards or study history.
        </p>

      </div>
    </div>
  );
}