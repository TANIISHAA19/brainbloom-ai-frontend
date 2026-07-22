import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Brain } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      console.log("SIGNUP RESPONSE:", data);
      alert(JSON.stringify(data));

      if (!response.ok) {
        throw new Error(
          data.message || "Signup failed"
        );
      }

      // Save token if backend returns it
      if (data.token) {
        localStorage.setItem(
          "token",
          data.token
        );
      }

      // Save user if backend returns it
      if (data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );
      }

      navigate({
        to: "/dashboard",
      });

    } catch (err: any) {

      setError(
        err.message || "Something went wrong"
      );

    } finally {

      setLoading(false);

    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50 px-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">


        <div className="flex justify-center mb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white">
            <Brain className="h-8 w-8" />
          </div>
        </div>


        <h1 className="text-3xl font-bold text-center">
          Join BrainBloom
        </h1>


        <p className="text-center text-gray-500 mt-2">
          Create your AI learning account
        </p>


        <form
          onSubmit={handleSignup}
          className="mt-8 space-y-4"
        >

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400"
            required
          />


          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400"
            required
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400"
            required
          />


          {error && (
            <p className="text-sm text-red-500 text-center">
              {error}
            </p>
          )}


          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              rounded-xl
              bg-gradient-to-r
              from-pink-500
              to-purple-600
              py-3
              text-white
              font-semibold
              disabled:opacity-60
            "
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

        </form>


        <p className="mt-6 text-center text-sm text-gray-500">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-purple-600 font-semibold"
          >
            Login
          </Link>

        </p>


      </div>

    </div>
  );
}