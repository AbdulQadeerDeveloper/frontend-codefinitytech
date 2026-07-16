import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  Cpu,
  Wrench,
  CheckCircle2,
  LayoutGrid,
  MonitorSmartphone,
  Boxes,
} from "lucide-react";

const cardImages = [
  "/images/imgi_11_ServicesCardBg-1.png",
  "/images/imgi_12_ServicesCardBg-2.png",
  "/images/imgi_13_ServicesCardBg-3.png",
];

export default function ReactJsDevelopment() {
  const whyItems = [
    {
      icon: <Cpu size={40} />,
      title: "High Performance",
      desc: "Optimized rendering using Virtual DOM.",
      bg: "/images/imgi_11_ServicesCardBg-1.png",
    },

    {
      icon: <Boxes size={40} />,
      title: "Component Architecture",
      desc: "Reusable components for scalable UI.",
      bg: "/images/imgi_12_ServicesCardBg-2.png",
    },
    {
      icon: <Rocket size={40} />,
      title: "Super Scalable",
      desc: "Build apps for startups & enterprises.",
      bg: "/images/imgi_13_ServicesCardBg-3.png",
    },
  ];

  const capabilities = [
    "Custom React Web Applications",
    "Enterprise Dashboards & Portals",
    "Integration With REST & GraphQL APIs",
    "Next.js & SSR Apps",
    "UI/UX-Optimized Design",
    "Performance Optimization",
  ];

  const processSteps = [
    { step: "01", title: "Requirement Analysis", icon: <Wrench size={40} /> },
    { step: "02", title: "UI/UX Wireframes", icon: <LayoutGrid size={40} /> },
    { step: "03", title: "React Development", icon: <Code size={40} /> },
    {
      step: "04",
      title: "QA & Deployment",
      icon: <MonitorSmartphone size={40} />,
    },
  ];

  return (
    <div className="bg-[#070012] text-white overflow-hidden relative">
      {/* 1️⃣ HERO */}
      <section className="pt-32 pb-20 px-6 md:px-16 lg:px-28 bg-gradient-to-br from-[#0C0016] via-[#170038] to-[#320068] relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              ReactJS <span className="text-[#C724FF]">Development</span>{" "}
              Solutions
            </h1>
            <p className="text-gray-300 mt-6 text-lg leading-relaxed">
              We build blazing-fast, scalable, and pixel-perfect React
              applications designed to elevate your brand’s digital presence.
              From dashboards to enterprise apps — we deliver perfection.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#8A2BE2] to-[#D946EF] rounded-xl shadow-xl text-lg font-semibold hover:scale-105 transition"
            >
              Get Free Project Quote
            </a>
          </div>
          <motion.img
            src="/images/imgi_2_AI-Web-Development-Services.webp"
            className="w-full rounded-xl shadow-2xl drop-shadow-[0_0_40px_rgba(199,36,255,0.4)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        </div>

        {/* Bottom Curved Bars */}
        <div className="absolute bottom-[-35px] left-0 w-full flex flex-col items-center pointer-events-none">
          <div className="w-[90%] bg-[#A234FD] rounded-t-full h-10 opacity-25"></div>
          <div className="w-[80%] bg-[#5D00F7] rounded-t-full h-14 mt-[-20px] opacity-25"></div>
        </div>
      </section>
      {/* 2️⃣ WHY FRONTEND */}
      <section className="py-30 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Why Choose <span className="text-[#C724FF]">ReactJS?</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          React is trusted by global brands for lightning-fast, scalable and
          interactive digital experiences.
        </p>
        <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-7xl mx-auto relative z-10">
          {whyItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0B0713]/90 p-10 rounded-2xl shadow-2xl backdrop-blur-xl relative overflow-hidden hover:shadow-[#FF6FD8]/40 transition-shadow"
            >
              <img
                src={item.bg}
                alt={item.title}
                className="absolute bottom-2 right-2 w-24 h-24 opacity-25 pointer-events-none select-none"
              />
              <div className="text-[#FF6FD8] mx-auto">{item.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3️⃣ CAPABILITIES */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-tr from-[#0C0016] via-[#1A0033] to-[#320068]">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-white">
          ReactJS <span className="text-[#C724FF]">Capabilities</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="group relative p-6 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={cardImages[i % cardImages.length]}
                alt="Capability Background"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#C724FF]/30 to-[#21D4FD]/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
              <div className="relative flex items-center gap-4">
                <CheckCircle2
                  className="text-white group-hover:text-[#C724FF] transition-colors duration-500"
                  size={28}
                />
                <p className="text-lg text-white group-hover:text-[#21D4FD] font-semibold transition-colors duration-500">
                  {cap}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4️⃣ DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-br from-[#0C0016] to-[#20003E]">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white">
          Our Development <span className="text-[#C724FF]">Process</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-10 mt-16 max-w-6xl mx-auto">
          {processSteps.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-10 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xl text-center shadow-lg"
            >
              <div className="text-[#C724FF] flex justify-center mb-4">
                {item.icon}
              </div>
              <span className="text-4xl font-bold text-[#C724FF]">
                {item.step}
              </span>
              <h3 className="text-xl mt-4 font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5️⃣ CALL TO ACTION */}
      <section className="py-24 px-6 text-center relative">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Build Future-Ready React Apps with Us
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          Let's create lightning-fast, modern ReactJS applications that help
          your business grow faster.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {["Free Consultation"].map((btn, i) => (
            <a
              key={i}
              href="/contact"
              className="px-14 py-4 bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD] text-white rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              {btn}
            </a>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[150px]" />
      </section>
    </div>
  );
}
