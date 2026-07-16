import React from "react";
import HeaderHero from "../components/HeaderHero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import ClientFeedback from "../components/ClientFeedback";
import WhyChooseUs from "../components/WhyChooseUs";
import FaqSection from "../components/FaqSection";
import AboutSection from "../components/AboutSection";
import PricingSection from "../components/PricingSection";

export default function Home() {
  return (
    <div>
      <HeaderHero />
      <AboutSection />
      <WhyChooseUs />
      <Services />
      <Projects limit={6} />
      <ClientFeedback />
      <FaqSection />
    </div>
  );
}
