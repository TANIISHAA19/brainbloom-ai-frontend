export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Subject",
      description:
        "Select any topic you want to learn and let BrainBloom personalize your learning journey.",
    },
    {
      number: "02",
      title: "Learn With AI",
      description:
        "Get explanations, summaries, and answers from your AI study companion.",
    },
    {
      number: "03",
      title: "Practice & Improve",
      description:
        "Generate quizzes, revise with flashcards, and track your progress.",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            How BrainBloom{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A simple AI-powered learning journey designed to help you study
            smarter and achieve more.
          </p>
        </div>


        <div className="grid gap-8 md:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition hover:-translate-y-2"
            >

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 font-bold text-white">
                {step.number}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="leading-relaxed text-slate-600">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}