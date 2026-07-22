import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50 px-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        <div className="flex justify-center mb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <Brain className="h-8 w-8"/>
          </div>
        </div>


        <h1 className="text-3xl font-bold text-center">
          Welcome to BrainBloom
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to continue your AI learning journey
        </p>


        <div className="mt-8 space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border px-4 py-3"
          />


          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border px-4 py-3"
          />


          <button
            className="
            w-full
            rounded-xl
            bg-gradient-to-r
            from-pink-500
            to-purple-600
            py-3
            text-white
            font-semibold
            "
          >
            Login
          </button>

        </div>


        <p className="mt-6 text-center text-sm text-gray-500">
          New user? Create an account
        </p>


      </div>

    </div>
  );
}