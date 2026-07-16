import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

// Roles that appear one after another with a typewriter effect
const ROLES = [
  "Software Engineer",
  "Full Stack Engineer",
  "MERN Stack Expert",
  "ReactJS and NextJS Specialist",
];

const TYPING_SPEED = 70; // ms per character while typing
const DELETING_SPEED = 35; // ms per character while deleting
const PAUSE_AFTER_TYPE = 1400; // pause once a full role is typed
const PAUSE_AFTER_DELETE = 300; // pause once a role is fully deleted

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && text.length < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, TYPING_SPEED);
    } else if (!isDeleting && text.length === currentWord.length) {
      // Full word typed, pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && text.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, DELETING_SPEED);
    } else if (isDeleting && text.length === 0) {
      // Fully deleted, move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, PAUSE_AFTER_DELETE);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return text;
}

export default function FounderSection() {
  const typedRole = useTypewriter(ROLES);

  return (
    <section className="relative w-full bg-[#0b0713] text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#dc00f9]/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#5D00F7]/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">
          Meet Our <span className="text-[#c026d3]">Founder & CEO</span>
        </h2>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto"
        >
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-r from-[#dc00f9] to-[#a234fd] shadow-[0_0_40px_rgba(220,0,249,0.35)]">
            <img
              src="/images/ceo-muhammad-qadeer.jpeg"
              alt="Muhammad Qadeer - Founder & CEO of CodefinityTech"
              className="w-full h-full object-cover rounded-full border-4 border-[#0b0713]"
            />
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center md:text-left"
        >
          <h3 className="text-2xl md:text-3xl font-bold">Muhammad Qadeer</h3>

          {/* Animated typewriter role */}
          <p className="mt-2 text-lg md:text-xl font-semibold text-[#dc00f9] h-8">
            {typedRole}
            <span className="inline-block w-[2px] h-5 md:h-6 bg-[#dc00f9] ml-1 align-middle animate-pulse" />
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed max-w-xl">
            Crafting scalable web applications with modern technologies and
            innovative solutions. As the driving force behind CodefinityTech,
            Muhammad leads a team dedicated to building high-performance,
            AI-powered, and full-stack digital products for businesses
            worldwide.
          </p>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-3 mt-6">
            <a
              href="https://github.com/AbdulQadeerDeveloper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#dc00f9]/20 hover:border-[#dc00f9] transition"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#dc00f9]/20 hover:border-[#dc00f9] transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#dc00f9]/20 hover:border-[#dc00f9] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:qadeerdeveloper312@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#dc00f9]/20 hover:border-[#dc00f9] transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
