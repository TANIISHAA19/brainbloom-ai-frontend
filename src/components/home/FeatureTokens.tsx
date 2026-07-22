import { useNavigate } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { useState } from "react";
import LoginModal from "@/components/auth/LoginModal";
import {
  Brain,
  ClipboardCheck,
  FileText,
  MessageCircle,
  Sparkles,
} from "lucide-react";


const features = [
  {
    icon: ClipboardCheck,
    title: "AI Quiz Generator",
    description:
      "Generate smart quizzes from topics, notes, and study material.",
    route: "/generate-quiz",
  },
  {
    icon: Brain,
    title: "AI Flashcards",
    description:
      "Create revision flashcards from topics or uploaded material.",
    route: "/flashcards",
  },
  {
    icon: FileText,
    title: "PDF Intelligence",
    description:
      "Chat with PDFs, summarize notes, and understand faster.",
    route: "/pdf-chat",
  },
  {
    icon: MessageCircle,
    title: "AI Tutor",
    description:
      "Ask questions and get personalized explanations.",
    route: "/chat",
  },
  {
    icon: Sparkles,
    title: "AI Evaluation",
    description:
      "Submit answers and receive AI feedback and scores.",
    route: "/evaluate",
  },
                 
 {
  icon: CalendarDays,
  title: "AI Study Planner",
  description:
    "Create personalized AI-powered study plans for your exams and goals.",
  route: "/planner",
 },
];
 


export default function FeatureTokens() {

  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState("");
const [showLoginModal, setShowLoginModal] = useState(false);
  const handleFeatureClick = (route:string) => {

    // Login popup will be added here next

     setSelectedRoute(route);
     setShowLoginModal(true);

  };        
     const continueAsGuest = () => {
     setShowLoginModal(false);

       navigate({
      to: selectedRoute,
      });
    };


  return (

    <section
      id="ai-tools"
      className="
      bg-white
      px-6
      py-24
      "
    >

      <div className="
        mx-auto
        max-w-6xl
      ">


        <div className="text-center mb-14">

          <h2 className="
            text-4xl
            font-bold
            text-slate-900
          ">
            Everything You Need To{" "}
            <span className="
              bg-gradient-to-r
              from-pink-500
              to-purple-600
              bg-clip-text
              text-transparent
            ">
              Learn Better
            </span>
          </h2>


          <p className="
            mt-4
            text-slate-600
          ">
            Choose a learning tool and start your AI-powered study journey.
          </p>


        </div>



        <div className="
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        ">


          {features.map((feature,index)=>{

            const Icon = feature.icon;


            return (

              <button
                key={index}
                onClick={()=>handleFeatureClick(feature.route)}
                className="
                text-left
                rounded-3xl
                border
                bg-white
                p-8
                shadow-md
                transition
                hover:-translate-y-2
                hover:shadow-xl
                "
                
              >

                <div className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-pink-500
                  to-purple-600
                  text-white
                ">

                  <Icon size={28}/>

                </div>


                <h3 className="
                  mt-6
                  text-xl
                  font-bold
                  text-slate-900
                ">
                  {feature.title}
                </h3>


                <p className="
                  mt-3
                  text-sm
                  text-slate-600
                ">
                  {feature.description}
                </p>


                <p className="
                  mt-6
                  text-sm
                  font-semibold
                  text-pink-600
                ">
                  Start Learning →
                </p>


              </button>

            );

          })}


        </div>


      </div>


      <LoginModal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onGuest={continueAsGuest}
      />


    </section>

  );
}