import React from "react";
import { motion } from "framer-motion";

export default function ChakraUIService() {
  const whyItems = [
    {
      title: "Accessible Components",
      desc: "Design accessible and inclusive UI components for all users.",
    },
    {
      title: "Responsive Design",
      desc: "Easily create layouts that adapt to any screen size.",
    },
    {
      title: "Reusable Components",
      desc: "Build consistent UI with reusable Chakra UI components.",
    },
  ];

  const capabilities = [
    "Custom React Component Library",
    "Theming and Dark Mode",
    "Responsive UI Design",
    "Form and Validation Components",
    "Performance Optimized Layouts",
    "Integration with React Apps",
  ];

  const processSteps = [
    { step: "01", title: "Requirement Gathering" },
    { step: "02", title: "UI/UX Wireframing" },
    { step: "03", title: "Chakra UI Development" },
    { step: "04", title: "Testing & Deployment" },
  ];

  return (
    <div className="w-full bg-[#070012] text-white">
      {/* 1️⃣ HERO */}
      <section className="relative w-full min-h-screen flex items-center px-6 md:px-20 lg:px-28 pt-[100px] overflow-hidden bg-[#070012]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/imgi_33_MLDL-Bg.webp')" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/imgi_34_CustomSolutionsBg.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0713]/80 via-[#120A1E]/60 to-[#0B0713]/80"></div>

        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Chakra UI <span className="text-purple-500">Development</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              Build accessible, responsive, and reusable UI components for React
              projects with Chakra UI. Accelerate development and maintain
              design consistency across your apps.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#b721ff] to-[#21d4fd] rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              Get a Free Consultation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <img
              src="/images/imgi_34_vision-ui-dashboard-free-chakra.png"
              alt="Chakra UI"
              className="w-full max-w-lg rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-20 text-center bg-[#120A1E] relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/imgi_9_WhyChooseUsBg.webp')",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-purple-500">Chakra UI?</span>
          </h2>
          <p className="text-gray-300 mb-12">
            Chakra UI allows you to build modern, responsive, and accessible
            React applications with ease.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {whyItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#0B0713]/80 p-8 rounded-2xl shadow-lg backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ CAPABILITIES */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-tr from-[#0C0016] via-[#1A0033] to-[#320068]">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          Chakra UI <span className="text-purple-500">Capabilities</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="group relative p-6 rounded-2xl shadow-lg overflow-hidden cursor-pointer bg-[#1b122a]"
            >
              <p className="text-lg text-white font-semibold">{cap}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4️⃣ DEVELOPMENT PROCESS */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#0C0016] to-[#20003E]">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-12">
          Our <span className="text-purple-500">Process</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {processSteps.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-10 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xl text-center shadow-lg"
            >
              <span className="text-4xl font-bold text-purple-500">
                {item.step}
              </span>
              <h3 className="text-xl mt-4 font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5️⃣ CALL TO ACTION */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Ready to <span className="text-purple-500">Start Your Project?</span>
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your requirements and let us help you
          build the perfect Chakra UI solution.
        </p>
        <a
          href="/contact"
          className="mt-10 inline-block px-14 py-4 bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD] text-white rounded-full text-lg font-semibold hover:scale-105 transition-transform"
        >
          Get a Free Consultation
        </a>
      </section>
    </div>
  );
}
