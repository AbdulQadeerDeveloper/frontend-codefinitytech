import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const whyItems = [
  {
    title: "Responsive Design",
    desc: "Tailwind UI ensures your apps look great on all devices.",
  },
  {
    title: "Reusable Components",
    desc: "Build scalable UIs with consistent pre-built components.",
  },
  {
    title: "Rapid Development",
    desc: "Save time by using ready-to-use Tailwind UI elements.",
  },
];

const capabilities = [
  "Custom Tailwind UI Pages",
  "Responsive Navigation & Layouts",
  "Reusable UI Components",
  "Integration With APIs",
  "Optimized Performance",
  "Pixel-Perfect UI",
];

const processSteps = [
  { step: "01", title: "Requirement Analysis" },
  { step: "02", title: "UI/UX Design" },
  { step: "03", title: "Tailwind Implementation" },
  { step: "04", title: "QA & Deployment" },
];

// ⭐ NEW — CARD BACKGROUND IMAGES
const cardImages = [
  "/images/imgi_11_ServicesCardBg-1.png",
  "/images/imgi_12_ServicesCardBg-2.png",
  "/images/imgi_13_ServicesCardBg-3.png",
];

export default function TailwindUIService() {
  return (
    <div className="w-full bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63] text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative  w-full min-h-screen flex items-center px-6 md:px-20 lg:px-28 pt-[100px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/imgi_33_MLDL-Bg.webp')" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/imgi_34_CustomSolutionsBg.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0713]/80 via-[#1A0F2F]/60 to-[#2C0F63]/80"></div>

        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Build Modern Interfaces with{" "}
              <span className="text-[#C724FF]">Tailwind UI</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              Rapidly develop fully responsive, modern web apps using Tailwind
              UI components and Tailwind CSS. Ensure pixel-perfect design and
              consistent user experience across all devices.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#8A2BE2] to-[#D946EF] rounded-xl shadow-xl text-lg font-semibold hover:scale-105 transition"
            >
              Get Free Project Quote
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <img
              src="/images/imgi_25_opt_notus_react_thumbnail.jpg"
              alt="Tailwind UI"
              className="w-full max-w-lg rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Spacing Waves */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center">
        <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 rotate-180 opacity-25"></div>
        <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 rotate-180 opacity-25"></div>
      </div>

      {/* 2️⃣ WHY TAILWIND UI (WITH CARD IMAGES) */}
      <section className="py-24 px-6 md:px-20 relative text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/imgi_9_WhyChooseUsBg.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0713]/70 via-[#1A0F2F]/50 to-[#2C0F63]/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-[#C724FF]">Tailwind UI?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {whyItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-3xl shadow-xl bg-[#0B0713]/70 backdrop-blur-xl overflow-hidden relative group"
              >
                {/* CARD BACKGROUND IMAGE */}
                <div
                  className="absolute inset-0 opacity-25 group-hover:opacity-40 transition bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${
                      cardImages[i % cardImages.length]
                    })`,
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ CAPABILITIES WITH CARD IMAGES */}
      <section className="py-24 px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Tailwind UI <span className="text-[#C724FF]">Capabilities</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl overflow-hidden relative group bg-[#0B0713]/60 shadow-xl"
            >
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition bg-cover bg-center"
                style={{
                  backgroundImage: `url(${cardImages[i % cardImages.length]})`,
                }}
              />
              <div className="relative z-10">
                <CheckCircle2 className="text-[#C724FF] mb-3 w-6 h-6" />
                <p className="text-white font-semibold text-lg">{cap}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4️⃣ PROCESS (WITH CARD IMAGES) */}
      <section className="py-24 px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Our Development <span className="text-[#C724FF]">Process</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {processSteps.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-10 rounded-3xl overflow-hidden relative group bg-[#1A0F2F]/60 text-center shadow-xl"
            >
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition bg-cover bg-center"
                style={{
                  backgroundImage: `url(${cardImages[i % cardImages.length]})`,
                }}
              />

              <div className="relative z-10">
                <span className="text-4xl font-bold text-[#C724FF]">
                  {item.step}
                </span>
                <h3 className="text-xl mt-4 font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-20 text-center relative">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Ready to{" "}
          <span className="text-[#C724FF]">Start Your Tailwind Project?</span>
        </h2>

        <a
          href="/contact"
          className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#8A2BE2] to-[#D946EF] rounded-xl shadow-xl text-lg font-semibold hover:scale-105 transition"
        >
          Get Free Project Quote
        </a>
      </section>
    </div>
  );
}
