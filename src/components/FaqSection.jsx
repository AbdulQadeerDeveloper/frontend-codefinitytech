import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is CodefinityTech and what do you offer?",
    answer:
      "CodefinityTech is a full-stack web development and AI solutions company. We specialize in building scalable MERN stack applications, AI-driven automation, and advanced digital tools to help businesses grow efficiently.",
  },
  {
    question: "Do I need technical knowledge to work with CodefinityTech?",
    answer:
      "Not at all! Our team manages the technical aspects while keeping you informed. We ensure the process is simple, transparent, and tailored to your business needs.",
  },
  {
    question: "Can you create custom web or AI solutions?",
    answer:
      "Yes! We provide fully customized solutions, from responsive web apps to AI chatbots, predictive analytics, and workflow automation, all designed specifically for your business goals.",
  },
  {
    question: "Which technologies does CodefinityTech use?",
    answer:
      "We use modern technologies including MongoDB, Express, React, Next.js, Node.js. Our solutions are cloud-ready, scalable, and secure.",
  },
  {
    question: "Do you provide support after project completion?",
    answer:
      "Absolutely. We offer ongoing support, updates, and maintenance to ensure your applications and AI systems remain secure, functional, and up-to-date.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative w-full bg-[#0c001a] text-white py-20 px-6 md:px-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/imgi_9_WhyChooseUsBg.png')" }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-[#0c001a]/90"></div>

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,#b721ff_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Title Section */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently Asked <span className="text-[#c026d3]">Questions</span> —
        </h2>
        <p className="text-gray-300 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Learn more about CodefinityTech’s development process, technologies,
          and support.
        </p>
      </div>

      {/* FAQ List */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-[#13002a]/60 border border-white/20 rounded-xl overflow-hidden backdrop-blur-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left hover:bg-[#1f003a]/70 transition"
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-[#c026d3]" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-5 pb-5 text-gray-300 text-sm md:text-base leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16 relative z-10">
        <a
          href="/contact"
          className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#8A2BE2] to-[#D946EF] rounded-xl shadow-xl text-lg font-semibold hover:scale-105 transition"
        >
          Still have questions? Contact CodefinityTech
        </a>
      </div>
    </section>
  );
}
