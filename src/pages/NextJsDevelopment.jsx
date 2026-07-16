import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Cpu,
  Code,
  LayoutGrid,
  MonitorSmartphone,
  CheckCircle2,
} from "lucide-react";

const nextJsFeatures = [
  "Server-Side Rendering (SSR)",
  "Static Site Generation (SSG)",
  "API Routes & Backend Integration",
  "SEO Optimized Pages",
  "Fast Loading & Performance",
  "Scalable Enterprise Solutions",
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", icon: <LayoutGrid size={40} /> },
  { step: "02", title: "Wireframing & UI/UX", icon: <Cpu size={40} /> },
  { step: "03", title: "Next.js Development", icon: <Code size={40} /> },
  {
    step: "04",
    title: "Testing & Deployment",
    icon: <MonitorSmartphone size={40} />,
  },
];

const cardImages = [
  "/images/imgi_11_ServicesCardBg-1.png",
  "/images/imgi_12_ServicesCardBg-2.png",
  "/images/imgi_13_ServicesCardBg-3.png",
];

export default function NextJsDevelopment() {
  return (
    <div className="bg-[#0A0014] text-white overflow-hidden">
      {/* =============================================================== */}
      {/* 1️⃣ HERO SECTION */}
      {/* =============================================================== */}
      <section className="pt-32 pb-20 px-6 md:px-16 lg:px-28 bg-gradient-to-br from-[#05000F] via-[#15003A] to-[#40007F]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Next.js <span className="text-[#FF6FD8]">Development</span>{" "}
              Solutions
            </h1>
            <p className="text-gray-300 mt-6 text-lg leading-relaxed">
              Build blazing-fast, SEO-friendly, and scalable web applications
              using Next.js. Server-side rendering, static generation, and
              full-stack capabilities all in one framework.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#8A2BE2] to-[#D946EF] rounded-xl shadow-xl text-lg font-semibold hover:scale-105 transition"
            >
              Get Your Next.js Project
            </a>
          </div>
          <motion.img
            src="/images/next.hero.jpg"
            className="w-full drop-shadow-[0_0_50px_rgba(255,111,216,0.5)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        </div>
      </section>
      {/* Bottom Curved Bars */}
      <div className="absolute bottom-[-65px] left-0 w-full flex flex-col items-center pointer-events-none">
        {/* Top Curve */}
        <div className="w-[90%] bg-[#A234FD] rounded-t-full h-10 opacity-25"></div>
        {/* Bottom Curve */}
        <div className="w-[80%] bg-[#5D00F7] rounded-t-full h-14 mt-[-20px] opacity-25"></div>
      </div>

      {/* =============================================================== */}
      {/* 2️⃣ WHY NEXT.JS SECTION */}
      {/* =============================================================== */}
      <section className="py-24 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Why Choose <span className="text-[#FF6FD8]">Next.js?</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          Next.js powers modern websites with performance, SEO, and flexibility.
          Perfect for businesses that want scalable and optimized web
          applications.
        </p>
        <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-7xl mx-auto">
          {[
            {
              icon: <Cpu size={40} />,
              title: "High Performance",
              desc: "Optimized SSR & SSG pages.",
            },
            {
              icon: <Rocket size={40} />,
              title: "SEO Optimized",
              desc: "Google-friendly websites.",
            },
            {
              icon: <Code size={40} />,
              title: "Full Stack Ready",
              desc: "API Routes & backend integration.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 p-10 rounded-2xl border border-white/10 shadow-xl backdrop-blur-xl"
            >
              <div className="text-[#FF6FD8] mx-auto">{item.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =============================================================== */}
      {/* 3️⃣ NEXT.JS CAPABILITIES SECTION */}
      {/* =============================================================== */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-tr from-[#05000F] via-[#15003A] to-[#40007F]">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-white">
          Next.js <span className="text-[#FF6FD8]">Capabilities</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {nextJsFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group relative p-6 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={cardImages[index % cardImages.length]}
                alt="Capability Background"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6FD8]/30 to-[#21D4FD]/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
              <div className="relative flex items-center gap-4">
                <CheckCircle2
                  className="text-white group-hover:text-[#FF6FD8] transition-colors duration-500"
                  size={28}
                />
                <p className="text-lg text-white group-hover:text-[#21D4FD] font-semibold transition-colors duration-500">
                  {feature}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =============================================================== */}
      {/* 4️⃣ DEVELOPMENT PROCESS */}
      {/* =============================================================== */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#05000F] to-[#250050]">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white">
          Our Next.js{" "}
          <span className="text-[#FF6FD8]">Development Process</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-10 mt-16 max-w-6xl mx-auto">
          {processSteps.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-10 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xl text-center shadow-lg"
            >
              <div className="text-[#FF6FD8] flex justify-center mb-4">
                {item.icon}
              </div>
              <span className="text-4xl font-bold text-[#FF6FD8]">
                {item.step}
              </span>
              <h3 className="text-xl mt-4 font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =============================================================== */}
      {/* 5️⃣ CALL TO ACTION */}
      {/* =============================================================== */}
      <section className="py-24 px-6 text-center relative">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Build Your Next.js Application with Us
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          Let’s create SEO-friendly, high-performance Next.js web applications
          tailored for your business growth.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#8A2BE2] to-[#D946EF] rounded-xl shadow-xl text-lg font-semibold hover:scale-105 transition"
          >
            Get Started
          </a>
        </div>

        {/* Decorative Blurs */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[150px]" />
      </section>
    </div>
  );
}
