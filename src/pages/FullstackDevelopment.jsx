import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Layers,
  Server,
  Laptop,
  Code2,
  Workflow,
  CheckCircle2,
} from "lucide-react";

const cardImages = [
  "/images/imgi_11_ServicesCardBg-1.png",
  "/images/imgi_12_ServicesCardBg-2.png",
  "/images/imgi_13_ServicesCardBg-3.png",
];

const SectionWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="w-full max-w-6xl mx-auto py-16 px-6"
  >
    {children}
  </motion.div>
);

const faqData = [
  {
    question: "What technologies do you use for full-stack development?",
    answer:
      "We use modern front-end frameworks like React and Next.js, back-end technologies such as Node.js, Express, and databases like MongoDB and MySqlDB.",
  },
  {
    question: "Do you provide scalable and secure solutions?",
    answer:
      "Absolutely. Our architecture is designed for scalability, high performance, and top-notch security practices.",
  },
  {
    question: "Can you integrate frontend with existing backend systems?",
    answer:
      "Yes. We specialize in connecting modern UI with legacy or new backend systems efficiently.",
  },
  {
    question: "Do you offer deployment and maintenance?",
    answer:
      "Yes, we handle deployment on cloud platforms like AWS or GCP and offer ongoing maintenance and support.",
  },
];

export default function FullStackDevelopmentPage() {
  return (
    <div className="bg-[#070012] text-white relative overflow-hidden">
      {/* ================================================= */}
      {/* 1️⃣ HERO SECTION */}
      {/* ================================================= */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#05000F] via-[#15003A] to-[#40007F]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: "url('/images/imgi_37_Tokenizationhero-Bg.webp')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Full-Stack <span className="text-purple-400">Development</span>{" "}
            Services
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6">
            End-to-end full-stack solutions combining high-performance backend
            systems with modern, responsive front-end interfaces. Optimized for
            speed, security, and scalability.
          </p>

          <button className="mt-10 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105">
            Get a Free Consultation
          </button>
        </div>
      </section>

      {/* ================================================= */}
      {/* 2️⃣ WHAT WE DO */}
      {/* ================================================= */}
      <SectionWrapper>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          What We Offer
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center">
          We build scalable, maintainable, and secure full-stack applications
          integrating frontend, backend, and databases seamlessly. Our apps are
          optimized for high performance, security, and excellent user
          experience.
        </p>
      </SectionWrapper>

      {/* ================================================= */}
      {/* 3️⃣ FULL-STACK EXPERTISE CARDS */}
      {/* ================================================= */}
      <SectionWrapper>
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          Our Full-Stack Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Frontend Development", icon: Laptop, bg: cardImages[0] },
            {
              title: "Backend APIs & Microservices",
              icon: Server,
              bg: cardImages[1],
            },
            { title: "Database Architecture", icon: Layers, bg: cardImages[2] },
            { title: "UI/UX Implementation", icon: Globe, bg: cardImages[0] },
            {
              title: "Clean Code & Dev Practices",
              icon: Code2,
              bg: cardImages[1],
            },
            { title: "Workflow Automation", icon: Workflow, bg: cardImages[2] },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0D021D] via-[#15003A] to-[#300070] border border-white/10 shadow-lg overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={item.bg}
                alt={item.title}
                className="absolute bottom-2 right-2 w-24 h-24 opacity-20 transition duration-300"
              />

              {/* Content */}
              <item.icon className="w-10 h-10 mb-4 text-purple-400 relative z-10" />
              <h3 className="text-xl font-semibold mb-2 relative z-10">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm relative z-10">
                High-quality, scalable, and maintainable development practice.
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ================================================= */}
      {/* 4️⃣ IMAGE ILLUSTRATION */}
      {/* ================================================= */}
      <SectionWrapper>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/images/imgi_17_dashboarddesign.webp"
            alt="Full Stack Illustration"
            className="w-full md:w-1/2 rounded-xl shadow-xl"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Bringing UI, Backend & Servers Together
            </h2>
            <p className="text-gray-300">
              We integrate UI components, backend logic, databases, and business
              processes into one seamless system. Smooth performance, modern
              architecture, and secure data handling guaranteed.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ================================================= */}
      {/* 5️⃣ FEATURES */}
      {/* ================================================= */}
      <SectionWrapper>
        <h2 className="text-3xl font-bold mb-10 text-center">
          Why Choose Our Full-Stack Solutions?
        </h2>

        <ul className="space-y-4 max-w-2xl mx-auto">
          {[
            "Optimized for speed & performance",
            "Scalable backend architecture (Node.js, Express.js, MongoDb, Mysql)",
            "Modern frontend (React, Next.js, Bootstrap, TailwindCSS)",
            "Secure databases and user authentication",
            "Responsive UI for all devices",
            "Maintainable & clean code practices",
          ].map((text, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 className="text-purple-500 w-5 h-5" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      {/* ================================================= */}
      {/* 6️⃣ FAQ SECTION */}
      {/* ================================================= */}
      <SectionWrapper>
        <h2 className="text-3xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#0D021D] via-[#15003A] to-[#300070] p-6 rounded-2xl border border-white/10 shadow-lg"
            >
              <h3 className="font-semibold text-lg mb-2 text-purple-400">
                {item.question}
              </h3>
              <p className="text-gray-300 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ================================================= */}
      {/* 7️⃣ CTA */}
      {/* ================================================= */}
      <section className="py-20 text-center bg-gradient-to-br from-[#05000F] via-[#15003A] to-[#40007F]">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Build Your Full-Stack App?
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Let’s create something powerful, scalable, and visually stunning for
          your business.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#8A2BE2] to-[#D946EF] rounded-xl shadow-xl text-lg font-semibold hover:scale-105 transition"
        >
          Get a Free Consultation
        </a>
      </section>
    </div>
  );
}
