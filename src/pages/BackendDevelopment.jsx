import React from "react";
import { motion } from "framer-motion";
import {
  ServerCog,
  ShieldCheck,
  Database,
  CircuitBoard,
  Cloud,
  Workflow,
  Cpu,
  CheckCircle2,
} from "lucide-react";

const cardImages = [
  "/images/imgi_11_ServicesCardBg-1.png",
  "/images/imgi_12_ServicesCardBg-2.png",
  "/images/imgi_13_ServicesCardBg-3.png",
];

export default function BackendDevelopment() {
  return (
    <div className="bg-[#070012] text-white overflow-hidden">
      {/* ---------------------------------------------------------------- */}
      {/* 1️⃣ HERO SECTION */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="pt-32 pb-24 px-6 md:px-16 lg:px-28 
                         bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63] 
                         relative"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Backend <span className="text-[#C724FF]">Development</span>{" "}
              Services
            </h1>

            <p className="text-gray-300 mt-6 text-lg leading-relaxed">
              High-performance backend systems engineered for speed, security
              and scalability — from REST APIs to microservices, authentication,
              databases, DevOps & cloud architecture.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-block px-12 py-4 
                         bg-gradient-to-r from-[#8A2BE2] to-[#D946EF]
                         rounded-xl shadow-xl text-lg font-semibold 
                         hover:scale-105 transition"
            >
              Get Free Backend Audit
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <motion.img
            src="/images/imgi_8_dm1.webp"
            className="w-[400px] h-[400px] drop-shadow-[0_0_40px_rgba(199,36,255,0.4)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        </div>

        {/* Bottom Curves */}
        <div className="absolute bottom-[-35px] left-0 w-full flex flex-col items-center pointer-events-none">
          <div className="w-[90%] bg-[#A234FD] h-10 rounded-t-full opacity-25"></div>
          <div className="w-[80%] bg-[#5D00F7] h-14 rounded-t-full mt-[-20px] opacity-25"></div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 2️⃣ WHY BACKEND DEVELOPMENT (With Card Images) */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-24 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Why Choose{" "}
          <span className="text-[#C724FF]">High-Performance Backend?</span>
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          Scalable, secure, and optimized backend infrastructure ensures your
          apps run smoothly and efficiently.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto">
          {[
            {
              icon: <ServerCog size={40} />,
              title: "Scalable Architecture",
              desc: "Designed to support millions of users smoothly.",
              bg: cardImages[0],
            },
            {
              icon: <ShieldCheck size={40} />,
              title: "Enterprise Security",
              desc: "Top-tier encryption & secure authentication systems.",
              bg: cardImages[1],
            },
            {
              icon: <CircuitBoard size={40} />,
              title: "High Performance",
              desc: "Ultra-optimized backend operations & fast response times.",
              bg: cardImages[2],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative p-10 rounded-2xl border border-white/10 shadow-xl
                         overflow-hidden group backdrop-blur-xl
                         bg-gradient-to-br from-[#05000F] via-[#15003A] to-[#40007F]"
            >
              {/* BG IMAGE */}
              <img
                src={item.bg}
                className="absolute bottom-2 right-2 w-24 h-24 opacity-20 
                           group-hover:opacity-30 transition duration-300"
              />

              <div className="relative z-10">
                <div className="text-[#C724FF] mx-auto">{item.icon}</div>
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="text-gray-300 mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 3️⃣ CAPABILITIES */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="py-24 px-6 md:px-20 
                         bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63]"
      >
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-14">
          Backend <span className="text-[#C724FF]">Capabilities</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            "REST API Development",
            "GraphQL API Architecture",
            "Microservices & Distributed Systems",
            "Authentication & Security Systems",
            "Database Design & Optimization",
            "Cloud & DevOps Integrations",
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl border border-white/10 shadow-lg
                         bg-gradient-to-br from-[#05000F] via-[#15003A] to-[#40007F]
                         backdrop-blur-xl"
            >
              <CheckCircle2 className="text-[#C724FF]" size={30} />
              <p className="text-lg text-white font-semibold mt-4">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 4️⃣ TECH STACK */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-24 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Technologies <span className="text-[#C724FF]">We Use</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16 max-w-5xl mx-auto">
          {[
            { icon: <Database size={40} />, label: "PostgreSQL" },
            { icon: <Workflow size={40} />, label: "Node.js / Express" },
            { icon: <Cloud size={40} />, label: "AWS / GCP" },
            { icon: <Cpu size={40} />, label: "Microservices" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="p-8 rounded-2xl border border-white/10 shadow-lg
                         bg-gradient-to-br from-[#05000F] via-[#15003A] to-[#40007F]
                         backdrop-blur-xl"
            >
              <div className="text-[#C724FF] flex justify-center">
                {item.icon}
              </div>
              <p className="mt-4 text-lg font-semibold">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 5️⃣ PROCESS */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="py-24 px-6 md:px-20 
                         bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63]"
      >
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white">
          Our Backend <span className="text-[#C724FF]">Process</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-10 mt-16 max-w-6xl mx-auto">
          {[
            { step: "01", title: "Requirement Analysis" },
            { step: "02", title: "Architecture & DB Design" },
            { step: "03", title: "Backend Development" },
            { step: "04", title: "Testing & Deployment" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-10 rounded-2xl border border-white/10 shadow-lg
                         bg-gradient-to-br from-[#05000F] via-[#15003A] to-[#40007F]
                         backdrop-blur-xl text-center"
            >
              <span className="text-4xl font-bold text-[#C724FF]">
                {item.step}
              </span>
              <h3 className="text-xl mt-4 font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 6️⃣ FINAL CTA */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-24 px-6 text-center relative">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Ready to Build a Powerful Backend?
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          Let’s build a scalable, ultra-fast backend that grows with your
          business.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#8A2BE2] to-[#D946EF] rounded-xl shadow-xl text-lg font-semibold hover:scale-105 transition"
        >
          Get a Free Consultation
        </a>

        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[150px]" />
      </section>
    </div>
  );
}
