import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  MonitorSmartphone,
  LayoutGrid,
  Code,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: <Cpu size={40} />,
    title: "Performance Optimization",
    desc: "Ensure fast, smooth, and responsive frontend performance.",
    bg: "/images/imgi_11_ServicesCardBg-1.png",
  },
  {
    icon: <MonitorSmartphone size={40} />,
    title: "Responsive Design",
    desc: "Mobile-first layouts compatible with all devices.",
    bg: "/images/imgi_12_ServicesCardBg-2.png",
  },
  {
    icon: <Code size={40} />,
    title: "Custom Components",
    desc: "Reusable React components for scalable projects.",
    bg: "/images/imgi_13_ServicesCardBg-3.png",
  },
];

const process = [
  { step: "01", title: "Requirement Analysis", icon: <LayoutGrid size={40} /> },
  { step: "02", title: "UI/UX Design", icon: <Cpu size={40} /> },
  { step: "03", title: "Frontend Development", icon: <Code size={40} /> },
  {
    step: "04",
    title: "Testing & Deployment",
    icon: <MonitorSmartphone size={40} />,
  },
];

export default function FrontendDevelopment() {
  return (
    <div className="bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63] text-white">
      {/* 1️⃣ HERO */}
      <section className="pt-32 pb-20 px-6 md:px-16 lg:px-28 grid lg:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Frontend <span className="text-[#FF6FD8]">Development</span>
          </h1>
          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Build modern, high-performance, and responsive frontend solutions
            with React and Tailwind CSS.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block px-14 py-4 bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD] rounded-full font-semibold text-lg hover:scale-105 transition-transform"
          >
            Get Started
          </a>
        </div>
        <motion.img
          src="/images/imgi_52_elexoft-apps-min.png"
          className="w-full rounded-xl shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        />
      </section>
      {/* Bottom Curved Bars */}
      <div className="absolute bottom-10 left-0 w-full flex flex-col items-center pointer-events-none">
        {/* Top Curve */}
        <div className="w-[90%] bg-[#A234FD] rounded-t-full h-10 opacity-25"></div>
        {/* Bottom Curve */}
        <div className="w-[80%] bg-[#5D00F7] rounded-t-full h-14 mt-[-20px] opacity-25"></div>
      </div>

      {/* 2️⃣ WHY FRONTEND */}
      <section className="py-30 px-6 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Why Choose <span className="text-[#FF6FD8]">Frontend?</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          Enhance user experience, engagement, and conversions with top-notch
          frontend solutions.
        </p>
        <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-7xl mx-auto relative z-10">
          {services.map((item, i) => (
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
      <section className="py-24 px-6 md:px-20 bg-white/5 rounded-t-3xl">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
          Frontend <span className="text-[#FF6FD8]">Capabilities</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            "Responsive UI/UX",
            "Reusable React Components",
            "Performance Optimization",
            "Cross-Browser Compatibility",
            "SEO Friendly",
            "API Integration",
          ].map((cap, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="group relative p-6 rounded-2xl shadow-lg bg-white/10 border border-white/10 overflow-hidden cursor-pointer"
            >
              <div className="relative flex items-center gap-4">
                <CheckCircle2
                  className="text-white group-hover:text-[#FF6FD8] transition-colors duration-500"
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
      <section className="py-24 px-6 md:px-20">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-[#FF6FD8]">Process</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-10 mt-16 max-w-6xl mx-auto">
          {process.map((item, i) => (
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

      {/* 5️⃣ CALL TO ACTION */}
      <section className="py-24 px-6 text-center relative">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Boost Your Frontend Today
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          Let’s create responsive, modern, and high-performing frontend
          solutions for your brand.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {["Get Started"].map((btn, i) => (
            <a
              key={i}
              href="/contact"
              className="px-14 py-4 bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD] text-white rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              {btn}
            </a>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[150px]" />
      </section>
    </div>
  );
}
