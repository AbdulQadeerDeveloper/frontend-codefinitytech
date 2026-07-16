import React from "react";
import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import FounderSection from "../components/FounderSection";
import FaqSection from "../components/FaqSection";

export default function About() {
  return (
    <div>
      <AboutHero />
      <AboutSection />
      <FounderSection />
      <FaqSection />
    </div>
  );
}
