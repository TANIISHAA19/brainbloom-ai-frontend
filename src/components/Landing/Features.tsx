import {
  Brain,
  FileText,
  Sparkles,
  BookOpen,
  CalendarCheck,
  ClipboardCheck,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Tutor",
    description:
      "Ask questions and get personalized explanations from your AI learning companion.",
  },
  {
    icon: ClipboardCheck,
    title: "Smart Quiz Generator",
    description:
      "Generate quizzes from your subjects and test your understanding instantly.",
  },
  {
    icon: BookOpen,
    title: "AI Flashcards",
    description:
      "Convert your notes into smart revision flashcards for faster learning.",
  },
  {
    icon: FileText,
    title: "PDF Chat",
    description:
      "Upload your study material and interact with your documents using AI.",
  },
  {
    icon: CalendarCheck,
    title: "Study Planner",
    description:
      "Create personalized study plans and stay consistent with your goals.",
  },
  {
    icon: Sparkles,
    title: "Answer Evaluation",
    description:
      "Get AI-powered feedback to improve your answers and preparation.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need To{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Learn Smarter
            </span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            BrainBloom combines AI-powered tools to help you understand,
            practice, and master any subject.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                group
                rounded-3xl
                border
                border-white/40
                bg-white/70
                backdrop-blur-xl
                p-8
                shadow-lg
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >

                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-pink-400
                  to-purple-500
                  text-white
                  mb-6
                  group-hover:scale-110
                  transition
                  "
                >
                  <Icon size={28}/>
                </div>


                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}