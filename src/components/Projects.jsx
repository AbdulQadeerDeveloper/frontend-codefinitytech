// src/components/HomeProjects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "intelliwriter",
      title: "IntelliWriter AI",
      desc: "AI-powered content generation platform that creates SEO-optimized blogs, posts, and product descriptions instantly.",
      img: "/images/ai-tool.png",
      live: "https://intelliwriter.io/",
      tech: ["Next.js", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
      screenshots: ["/images/intelliwriter.png"],
    },
    {
      id: "gptprofessor",
      title: "GPT Professor AI",
      desc: "A powerful AI writing and automation tool with multilingual support.",
      img: "/images/gptprofessor.png",
      live: "https://gptprofessor.io/",
      tech: ["Next.js", "Node.js", "Tailwind CSS", "MongoDB"],
      screenshots: ["/images/gptpro.png.png"],
    },
    {
      id: "milgpt",
      title: "MilGPT",
      desc: "Multilingual AI chat platform integrating OpenAI APIs with real-time data & documents.",
      img: "/images/milgpt.png",
      live: "https://milgpt.com/",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      screenshots: ["/images/milgpt-screenshot.png"],
    },
    {
      id: "snapcheck",
      title: "SnapCheck",
      desc: "AI-driven check verification system that detects fraud instantly.",
      img: "/images/snapcheck.png",
      live: "https://snapcheck.io/",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      screenshots: ["/images/snapcheck-1.png"],
    },
    {
      id: "wakeel",
      title: "Wakeel",
      desc: "Legal-tech platform connecting users with verified lawyers.",
      img: "/images/wakeel.png",
      live: "https://wakeel-app-net.netlify.app/",
      tech: ["React", "Firebase", "Node.js"],
      screenshots: ["/images/wakeel-1.png"],
    },
    {
      id: "infypos",
      title: "InfyPOS",
      desc: "Cloud-based POS and inventory dashboard.",
      img: "/images/pos.png",
      live: "https://infypos.infyom.com/",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      screenshots: ["/images/pos-1.png"],
    },
    {
      id: "findmykids",
      title: "FindMyKids",
      desc: "A parental control and child safety platform with location tracking, alerts, analytics, and advanced monitoring.",
      img: "/images/findmykids.png", 
      live: "https://findmykids.org/",
      tech: [
        "Next.js 13.1.0",
        "WordPress",
        "Google Analytics / GA4",
        "Redux",
        "React",
        "MySQL",
        "Webpack",
        "eSputnik",
        "Swiper",
        "Google Tag Manager",
        "Cookiebot",
        "Cookie Control",
        "HSTS",
        "Open Graph",
        "Ubuntu",
      ],
      screenshots: ["/images/findmykids-full.png"],
    },
    {
      id: "chedmed",
      title: "ChedMed",
      desc: "Online platform for medical/health services in Morocco.",
      img: "/images/httpschedmed.png",
      live: "https://chedmed.ma/",
      tech: ["React", "Bootstrap", "Node.js", "MongoDB"],
      screenshots: ["/images/httpschedmed.ma.png"],
    },
  ];

  return (
    <section className="relative w-full bg-[#0c001a] text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#3a0057_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Featured <span className="text-[#c026d3]">Projects</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore real-world applications built using cutting-edge AI and web
          technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            onClick={() => setSelectedProject(p)}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer group border border-white/20 bg-[#13002a]/50 rounded-2xl overflow-hidden hover:border-[#c026d3] hover:shadow-lg hover:shadow-[#c026d3]/30 transition-all duration-300 relative"
          >
            {/* Gradient Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#c026d3]/30 to-transparent rounded-full blur-3xl" />

            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold mb-3 group-hover:text-[#c026d3] transition">
                {p.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-14 relative z-10">
        <Link
          to="/ProjectsPage"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE] border-2 border-transparent 
                hover:from-[#E200FF] hover:via-[#3C0D5A] hover:to-[#7C00FF]  text-white font-semibold px-8 py-3 rounded-full shadow-md hover:opacity-90 transition"
          py-2
          px-6
          lg:px-8
          font-bold
          text-base
          lg:text-lg
          text-white
        >
          View All Projects <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-[#1a002d] border border-[#b721ff]/30 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto text-white p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Close */}
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-white transition"
                onClick={() => setSelectedProject(null)}
              >
                <X size={28} />
              </button>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-4 text-[#b721ff]">
                {selectedProject.title}
              </h3>

              {/* Screenshot */}
              {selectedProject.screenshots && (
                <img
                  src={selectedProject.screenshots}
                  alt={`${selectedProject.title} Screenshot`}
                  className="rounded-2xl w-full h-auto max-h-[700px] object-contain bg-black/40 mb-6"
                />
              )}

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.desc}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-[#21d4fd]">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#b721ff]/20 border border-[#b721ff]/30 rounded-full text-sm text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Link */}
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#b721ff] to-[#21d4fd] px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition"
                >
                  <Globe className="w-5 h-5" /> Visit Live Project
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
