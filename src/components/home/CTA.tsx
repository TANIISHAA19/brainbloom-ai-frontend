export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600" />

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />


      <div className="relative mx-auto max-w-4xl rounded-3xl bg-white/10 px-8 py-16 text-center backdrop-blur-xl">

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Ready to Bloom Your Knowledge?
        </h2>


        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
          Start learning smarter with your AI-powered study companion.
          Explore concepts, practice with quizzes, and achieve your goals.
        </p>


        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <button
            className="
            rounded-full
            bg-white
            px-8
            py-3
            font-semibold
            text-purple-600
            shadow-lg
            transition
            hover:scale-105
            "
          >
            Start Learning
          </button>


          <button
            className="
            rounded-full
            border
            border-white/50
            px-8
            py-3
            font-semibold
            text-white
            transition
            hover:bg-white/10
            "
          >
            Explore Features
          </button>

        </div>

      </div>

    </section>
  );
}