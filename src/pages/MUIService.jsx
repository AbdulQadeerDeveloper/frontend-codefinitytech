import React from "react";
import { motion } from "framer-motion";

// React Icons (Instead of images)
import { FaReact, FaLayerGroup, FaLaptopCode } from "react-icons/fa";

export default function MUIService() {
  const whyItems = [
    {
      icon: <FaReact className="w-12 h-12 text-[#C724FF] mb-4" />,
      title: "Customizable Components",
      desc: "Theme and style any component beautifully with Material Design.",
    },
    {
      icon: <FaLayerGroup className="w-12 h-12 text-[#C724FF] mb-4" />,
      title: "Responsive Layouts",
      desc: "Build adaptive interfaces that look perfect on all devices.",
    },
    {
      icon: <FaLaptopCode className="w-12 h-12 text-[#C724FF] mb-4" />,
      title: "Pre-Built UI Kit",
      desc: "Boost development with ready-to-use Material components.",
    },
  ];

  const capabilities = [
    "Material Design Integration",
    "Theming & Dark Mode Support",
    "Advanced Form Components",
    "Grid Layouts & Breakpoints",
    "UI Animations & Transitions",
    "Performance Optimized UI",
  ];

  const processSteps = [
    { step: "01", title: "Requirement Analysis" },
    { step: "02", title: "Wireframing & UI Planning" },
    { step: "03", title: "MUI Component Development" },
    { step: "04", title: "Testing & Launch" },
  ];

  const faqs = [
    {
      q: "How long does it take to build an MUI-based application?",
      a: "Small apps take 1–2 weeks, while full business apps may take 4–6 weeks.",
    },
    {
      q: "Do you provide custom themes for MUI?",
      a: "Yes, we design fully branded themes with custom colors and typography.",
    },
    {
      q: "Is MUI good for enterprise-level projects?",
      a: "Absolutely! Its component library and accessibility make it ideal for scalable apps.",
    },
    {
      q: "Can you integrate MUI with backend APIs?",
      a: "Yes, we provide full-stack development with Node.js, Express, and MongoDB or Firebase.",
    },
  ];

  return (
    <div className="w-full bg-[#070012] text-white">
      {/* HERO SECTION */}{" "}
      <section className="relative w-full min-h-screen flex items-center px-6 md:px-20 lg:px-28 pt-[120px] bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63] overflow-hidden">
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
        ```
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Material-UI <span className="text-[#C724FF]">Development</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              Build modern, fast, and responsive applications using Material-UI
              with customized design and performance-optimized components.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#8A2BE2] to-[#D946EF] rounded-xl shadow-xl text-lg font-semibold hover:scale-105 transition"
            >
              Get Free Project Quote
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <img
              src="/images/imgi_22_template-5dark.jpg"
              alt="MUI Development"
              className="w-full max-w-lg rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
      {/* WHY SECTION */}
      <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-6">
            Why Choose <span className="text-[#C724FF]">Material-UI?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {whyItems.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all border border-white/10"
              >
                {item.icon}
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CAPABILITIES */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#0B0713] via-[#1A0F2F] to-[#2C0F63]">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
          MUI <span className="text-[#C724FF]">Capabilities</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              className="p-6 bg-[#1b122a] rounded-2xl shadow-lg"
            >
              <p className="text-lg font-semibold">{cap}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* PROCESS */}
      <section className="py-20 px-6 md:px-20 bg-[#0C0016]">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
          Our <span className="text-[#C724FF]">Process</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {processSteps.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-10 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-xl text-center shadow-xl"
            >
              <span className="text-5xl font-bold text-[#C724FF]">
                {item.step}
              </span>
              <h3 className="text-xl mt-4 font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
      {/* FAQ */}
      <section className="py-20 px-6 md:px-28 relative bg-[#120A1E]">
        <h2 className="relative z-10 text-center text-4xl md:text-5xl font-bold mb-10">
          Frequently Asked <span className="text-[#C724FF]">Questions</span>
        </h2>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {faqs.map((item, i) => (
            <motion.details
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0B0713]/70 p-6 rounded-2xl backdrop-blur-xl shadow-lg cursor-pointer"
            >
              <summary className="text-xl font-semibold text-white">
                {item.q}
              </summary>
              <p className="mt-3 text-gray-300">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 text-center px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Build with{" "}
          <span className="text-[#C724FF]">Material-UI?</span>
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Let’s build beautiful UI with responsive, modern and scalable MUI
          components.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#8A2BE2] to-[#D946EF] rounded-xl shadow-xl text-lg font-semibold hover:scale-105 transition"
        >
          Start Your Project
        </a>
      </section>
    </div>
  );
}
