import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Cpu,
  Code,
  MonitorSmartphone,
  CheckCircle2,
  LayoutGrid,
} from "lucide-react";

const webAppFeatures = [
  "Custom Web Applications",
  "Secure & Scalable Backend",
  "Responsive UI/UX Design",
  "API Integration & Microservices",
  "Performance Optimization",
  "Cross-Browser Compatibility",
];

const processSteps = [
  { step: "01", title: "Discovery & Planning", icon: <LayoutGrid size={40} /> },
  { step: "02", title: "UI/UX Design", icon: <Cpu size={40} /> },
  { step: "03", title: "Web Development", icon: <Code size={40} /> },
  {
    step: "04",
    title: "QA & Deployment",
    icon: <MonitorSmartphone size={40} />,
  },
];

const cardImages = [
  "/images/imgi_11_ServicesCardBg-1.png",
  "/images/imgi_12_ServicesCardBg-2.png",
  "/images/imgi_13_ServicesCardBg-3.png",
];

export default function WebApplicationDevelopment() {
  return (
    <div className="bg-[#0B0713] text-white overflow-hidden">
      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-30 pb-20 px-6 md:px-16 lg:px-28 bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Web <span className="text-[#FF6FD8]">Application</span>{" "}
              Development
            </h1>
            <p className="text-gray-300 mt-6 text-lg leading-relaxed">
              Build robust, secure, and scalable web applications tailored to
              your business needs. Modern UI, powerful backend, and smooth
              performance across all devices.
            </p>
            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD] rounded-xl shadow-xl text-lg font-semibold hover:scale-105 transition">
              Get Started
            </button>
          </div>
          <motion.img
            src="/images/imgi_23_WebAppHero.webp"
            className="w-full drop-shadow-[0_0_50px_rgba(255,111,216,0.5)] rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-[120px]"></div>
      </section>
      {/* Bottom Curved Bars */}
      <div className="absolute bottom-8 left-0 w-full flex flex-col items-center pointer-events-none">
        {/* Top Curve */}
        <div className="w-[90%] bg-[#A234FD] rounded-t-full h-10 opacity-25"></div>
        {/* Bottom Curve */}
        <div className="w-[80%] bg-[#5D00F7] rounded-t-full h-14 mt-[-20px] opacity-25"></div>
      </div>

      {/* 2️⃣ WHY WEB APPLICATIONS */}
      <section className="py-24 px-6 md:px-20 text-center relative">
        <h2 className="text-3xl md:text-5xl font-bold">
          Why Choose <span className="text-[#FF6FD8]">Web Applications?</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          Modern web applications give your business agility, scalability, and a
          professional online presence.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-7xl mx-auto relative z-10">
          {[
            {
              icon: <Cpu size={40} />,
              title: "Performance",
              desc: "Fast, smooth, and responsive.",
              bgImage: "/images/imgi_11_ServicesCardBg-1.png",
            },
            {
              icon: <Server size={40} />,
              title: "Secure Backend",
              desc: "Reliable and scalable systems.",
              bgImage: "/images/imgi_12_ServicesCardBg-2.png",
            },
            {
              icon: <Code size={40} />,
              title: "Custom Features",
              desc: "Tailored solutions for your needs.",
              bgImage: "/images/imgi_13_ServicesCardBg-3.png",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0b0712]/120 text-white p-10 rounded-2xl shadow-2xl backdrop-blur-xl relative overflow-hidden hover:shadow-[#FF6FD8]/60 transition-shadow duration-300"
            >
              {/* Background Image */}
              <img
                src={item.bgImage}
                alt={`${item.title} background`}
                className="absolute bottom-2 right-2 w-24 h-24 opacity-25 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110"
              />

              {/* Card Content */}
              <div className="text-[#FF6FD8] mx-auto">{item.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3️⃣ WEB APP CAPABILITIES */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63]">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-white">
          Web Application <span className="text-[#FF6FD8]">Capabilities</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {webAppFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group relative p-6 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={cardImages[index % cardImages.length]}
                alt="Capability Background"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              />
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

      {/* 4️⃣ DEVELOPMENT PROCESS */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63]">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white">
          Our Web App{" "}
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

      {/* 5️⃣ CALL TO ACTION */}
      <section className="py-24 px-6 text-center relative">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Launch Your Web Application Today
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          Let’s build a powerful, secure, and modern web application that drives
          your business forward.
        </p>

        {/* Five Separate CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="px-14 py-4 bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD] text-white rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            Free Consultation
          </a>
        </div>

        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[150px]" />
      </section>
    </div>
  );
}
