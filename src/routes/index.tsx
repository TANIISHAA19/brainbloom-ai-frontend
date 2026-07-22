import { createFileRoute } from "@tanstack/react-router";

import Hero from "@/components/Landing/Hero";
import FeatureTokens from "@/components/home/FeatureTokens";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { Footer } from "@/components/home/Footer";


export const Route = createFileRoute("/")({
  component: Index,
});


function Index() {
  return (
    <main className="min-h-screen">

      <Hero />

      <FeatureTokens />

      <HowItWorks />

      <Testimonials />

      <CTA />

      <Footer />

    </main>
  );
}