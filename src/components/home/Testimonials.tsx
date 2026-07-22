export default function Testimonials() {
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "CSE Student",
      review:
        "BrainBloom helped me understand difficult concepts faster and made my exam preparation more organized.",
    },
    {
      name: "Rahul Verma",
      role: "Engineering Student",
      review:
        "The AI quiz generator and flashcards made revision much easier. It feels like having a personal tutor.",
    },
    {
      name: "Priya Singh",
      role: "University Student",
      review:
        "I love how I can chat with my PDFs and turn my notes into useful learning material.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            What Students Say About{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              BrainBloom
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Join students who are learning smarter with AI-powered tools.
          </p>
        </div>


        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((student) => (
            <div
              key={student.name}
              className="rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition hover:-translate-y-2"
            >

              <div className="mb-5 flex gap-1 text-yellow-400">
                ★ ★ ★ ★ ★
              </div>


              <p className="leading-relaxed text-slate-600">
                "{student.review}"
              </p>


              <div className="mt-6 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 font-bold text-white">
                  {student.name.charAt(0)}
                </div>


                <div>
                  <h3 className="font-semibold text-slate-900">
                    {student.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {student.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}