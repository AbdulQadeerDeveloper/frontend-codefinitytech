import React from "react";
import { motion } from "framer-motion";

export default function ClientFeedback() {
  const feedbackImages = [
    "/images/feedback1.png",
    "/images/feedback2.png",
    "/images/feedback3.png",
    "/images/feedback4.png",
    "/images/feedback5.png",
    "/images/feedback6.png",
    "/images/feedback7.png",
    "/images/feedback8.png",
    "/images/feedback9.png",
  ];

  return (
    <section
      id="client-feedback"
      className="relative py-20 bg-gradient-to-br from-[#0a0014] via-[#1b0033] to-[#3a0057] overflow-hidden"
    >
      {/* === Section Heading === */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#b721ff] to-[#21d4fd] uppercase tracking-wide drop-shadow-[0_0_10px_rgba(183,33,255,0.4)]">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          Trusted by startups, agencies, and global brands — here’s what our
          clients say about our work.
        </p>
      </div>

      {/* === Feedback Carousel === */}
      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 45,
            ease: "linear",
          }}
        >
          {[...feedbackImages, ...feedbackImages].map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 bg-white/5 backdrop-blur-xl rounded-3xl p-3 shadow-[0_0_20px_rgba(183,33,255,0.15)] border border-white/10 hover:border-[#b721ff]/40 hover:shadow-[0_0_35px_rgba(183,33,255,0.5)] transition-all duration-500"
            >
              <img
                src={img}
                loading="lazy"
                alt={`Client feedback ${idx + 1}`}
                className="h-[320px] w-auto object-cover rounded-2xl brightness-110 hover:scale-[1.03] transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Fade Edges */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#0a0014] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#3a0057] to-transparent pointer-events-none" />
      </div>

      {/* === Bottom Glow + CTA === */}
      <div className="text-center mt-16 relative z-10">
        <p className="text-gray-300 text-xl">
          Over{" "}
          <span className="font-semibold text-[#c026d3]">
            400+ happy clients
          </span>{" "}
          trust our team worldwide for next-level digital experiences.
        </p>
        <a href="/testimonials">
          <button className="mt-6 px-7 py-3 bg-gradient-to-r from-[#b721ff] to-[#21d4fd] text-white font-semibold rounded-full shadow-[0_0_25px_rgba(183,33,255,0.5)] hover:scale-105 transition-all duration-300">
            View Testimonials
          </button>
        </a>
      </div>

      {/* Background Glow Orbs */}
      <div className="absolute -top-40 left-0 w-80 h-80 bg-[#b721ff]/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#21d4fd]/20 blur-[140px] rounded-full" />
    </section>
  );
}
