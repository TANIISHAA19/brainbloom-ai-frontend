import { createFileRoute } from "@tanstack/react-router";

import ExploreHero from "@/components/explore/ExploreHero";
import QuizSection from "@/components/explore/QuizSection";
import FlashcardSection from "@/components/explore/FlashcardSection";
import PDFSection from "@/components/explore/PDFSection";
import AITutorSection from "@/components/explore/AITutorSection";
import EvaluationSection from "@/components/explore/EvaluationSection";


export const Route = createFileRoute("/explore")({
  component: ExplorePage,
});


function ExplorePage() {

  return (

    <main className="bg-white">

      <ExploreHero />

      <QuizSection />

      <FlashcardSection />

      <PDFSection />

      <AITutorSection />

      <EvaluationSection />

      {/* Future sections */}

      {/* PDF Intelligence Showcase */}

      {/* AI Tutor Showcase */}

      {/* AI Evaluation Showcase */}


    </main>

  );

}