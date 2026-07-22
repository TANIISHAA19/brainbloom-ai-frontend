import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageShell } from "@/components/site/Shared";
import { toast } from "sonner";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "AI Study Planner — BrainBloom AI" },
      { name: "description", content: "Generate personalized AI-powered study plans with BrainBloom AI.." },
    ],
  }),
  component: PlannerPage,
});


function PlannerPage() {
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("Beginner");

  const [plan, setPlan] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState(false);


  const generatePlan = async () => {
    if (!subject || !duration || !level) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/planner`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject,
            duration,
            level,
          }),
        }
      );


      const data = await response.json();


      if (!response.ok) {
        throw new Error(data.error || "Failed to generate plan");
      }


      setPlan(data.plan);

      toast.success("Study plan generated!");

    } catch (error) {
      console.error(error);
      toast.error("Planner failed");

    } finally {
      setLoading(false);
    }
  };


  return (
    <PageShell>

      <div className="mx-auto max-w-4xl">

        <h1 className="text-3xl font-bold">
          AI Study Planner
        </h1>

        <p className="mt-2 text-muted-foreground">
          Generate a personalized study roadmap with AI.
        </p>


        <div className="mt-8 rounded-2xl border p-6 space-y-4">

          <Input
            placeholder="Subject (e.g. DBMS)"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />


          <Input
            placeholder="Duration (e.g. 4 weeks)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />


          <Input
            placeholder="Level (Beginner/Intermediate/Advanced)"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />


          <Button
            onClick={generatePlan}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Study Plan"}
          </Button>

        </div>


        {Object.keys(plan).length > 0 && (
          <div className="mt-8 space-y-5">

            {Object.entries(plan).map(([week, topics]) => (

              <div
                key={week}
                className="rounded-2xl border p-5"
              >

                <h2 className="text-xl font-semibold">
                  {week}
                </h2>


                <ul className="mt-3 list-disc pl-5">
                  {topics.map((topic, index) => (
                    <li key={index}>
                      {topic}
                    </li>
                  ))}
                </ul>

              </div>

            ))}

          </div>
        )}

      </div>

    </PageShell>
  );
}