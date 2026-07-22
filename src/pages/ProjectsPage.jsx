// src/pages/ProjectsPage.jsx
import React, { useMemo, useState } from "react";
import { X, Globe, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Projects data with multi-vendor system
 */
const projects = [
  {
    id: "intelliwriter",
    title: "IntelliWriter AI",
    desc: "AI-powered content generation platform that creates SEO-optimized blogs, posts, and product descriptions instantly.",
    img: "/images/ai-tool.png",
    live: "https://intelliwriter.io/",
    tech: ["Next.js", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
    screenshots: ["/images/intelliwriter.png"],
    category: "Application",
  },
  {
    id: "gptprofessor",
    title: "GPT Professor AI",
    desc: "A powerful AI writing and automation tool with multilingual support.",
    img: "/images/gptprofessor.png",
    live: "https://gptprofessor.io/",
    tech: ["Next.js", "Node.js", "Tailwind CSS", "MongoDB"],
    screenshots: ["/images/gptpro.png.png"],
    category: "Application",
  },
  {
    id: "milgpt",
    title: "MilGPT",
    desc: "Multilingual AI chat platform integrating OpenAI APIs with real-time data & documents.",
    img: "/images/milgpt.png",
    live: "https://milgpt.com/",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    screenshots: ["/images/milgpt-screenshot.png"],
    category: "Application",
  },
  {
    id: "snapcheck",
    title: "SnapCheck",
    desc: "AI-driven check verification system that detects fraud instantly.",
    img: "/images/snapcheck.png",
    live: "https://snapcheck.io/",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    screenshots: ["/images/snapcheck-1.png"],
    category: "Factory",
  },
  {
    id: "wakeel",
    title: "Wakeel",
    desc: "Legal-tech platform connecting users with verified lawyers.",
    img: "/images/wakeel.png",
    live: "https://wakeel-app-net.netlify.app/",
    tech: ["React", "Firebase", "Node.js"],
    screenshots: ["/images/wakeel-1.png"],
    category: "Application",
  },
  {
    id: "infypos",
    title: "InfyPOS",
    desc: "Cloud-based POS and inventory dashboard.",
    img: "/images/pos.png",
    live: "https://infypos.infyom.com/",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    screenshots: ["/images/pos-1.png"],
    category: "Accounts Software",
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
    category: "Application",
  },
  {
    id: "chedmed",
    title: "ChedMed",
    desc: "Online platform for medical/health services in Morocco.",
    img: "/images/httpschedmed.png",
    live: "https://chedmed.ma/",
    tech: ["React", "Bootstrap", "Node.js", "MongoDB"],
    screenshots: ["/images/httpschedmed.ma.png"],
    category: "Other",
  },
  {
    id: "yourtourproviders",
    title: "YourTourProviders",
    desc: "A comprehensive multi-vendor tour and travel management platform connecting travelers with verified tour operators. Features real-time booking, vendor dashboards, admin panel, and secure payment integration.",
    img: "/personal/listing-home.png",
    live: "https://www.yourtourproviders.com",
    tech: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Cloudinary",
      "MERN Stack",
      "Multi-Vendor System"
    ],
    screenshots: [
      "/personal/listing-home.png",
      "/personal/admin.png",
      "/personal/vendor-dashboard.png"
    ],
    category: "Application",
    features: [
      "Multi-Vendor Marketplace",
      "Vendor Registration & Verification",
      "Tour Package Management",
      "Real-time Booking System",
      "Vendor Dashboard with Analytics",
      "Admin Panel for Platform Management",
      "Secure Payment Integration",
      "Cloudinary Media Management",
      "Responsive Design",
      "Vendor Rating & Reviews"
    ]
  },
];

const CATEGORIES = [
  "All",
  "Accounts Software",
  "Application",
  "Factory",
  "Other",
];

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  // Filtered projects memoized
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory =
        category === "All" ? true : p.category === category;
      const matchesQuery =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tech.join(" ").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#070013] via-[#0b0016] to-[#130021] text-white pb-24">
      {/* HERO */}
      <header className="relative pt-24 pb-12 px-6 md:px-16 lg:px-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Showcasing Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6FD8] to-[#7B2FF7]">
                Top Projects
              </span>
            </h1>

            <p className="text-gray-300 text-lg max-w-xl">
              Explore selected AI, SaaS, web & mobile projects —
              production-ready features, product thinking, and real-world
              impact.
            </p>

            <div className="flex gap-4 items-center">
              <Link
                to="/services"
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD] rounded-xl font-semibold shadow-lg hover:scale-[1.03] transition"
              >
                View Services
              </Link>

              <Link
                to="/contact"
                className="inline-block px-6 py-3 border border-white/10 rounded-xl text-sm hover:bg-white/5 transition"
              >
                Start a Project
              </Link>
            </div>

            {/* small stats */}
            <div className="flex gap-8 mt-6">
              <div>
                <p className="text-3xl font-bold text-[#FF6FD8]">200+</p>
                <p className="text-gray-400 text-sm">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#7B2FF7]">50+</p>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src="/images/imgi_23_WebAppHero.webp"
              alt="Hero"
              className="w-full max-w-lg rounded-2xl shadow-2xl drop-shadow-[0_30px_80px_rgba(128,0,255,0.18)]"
            />
          </motion.div>
        </div>

        {/* ambient glows */}
        <div className="pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-60 h-60 bg-purple-500/10 rounded-full blur-[150px]" />
        </div>
      </header>

      {/* FILTER BAR */}
      <div id="projects" className="mt-8">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-28">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            {/* search */}
            <div className="flex items-center gap-3 flex-1">
              <div className="p-2 rounded-lg bg-white/6">
                <Search size={16} className="text-white/70" />
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, tech, or description..."
                className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/60"
              />
            </div>

            {/* categories */}
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    category === c
                      ? "bg-gradient-to-r from-[#FF6FD8] to-[#7B2FF7] text-white shadow-md"
                      : "bg-white/5 text-white/90 hover:bg-white/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 lg:px-28 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((p, idx) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="group bg-gradient-to-br from-white/5 to-white/2 border border-white/8 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform-gpu hover:-translate-y-2 transition cursor-pointer"
                onClick={() => setSelected(p)}
                aria-labelledby={`title-${p.id}`}
              >
                <div className="rounded-xl overflow-hidden h-44 bg-gradient-to-br from-[#140023]/40 to-[#0b0016]/40">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="mt-4">
                  <h3 id={`title-${p.id}`} className="text-xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                    {p.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-white/6 px-2 py-1 rounded-full border border-white/6"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 text-sm text-[#D8B0FF] hover:text-white"
                  >
                    <Globe size={14} /> Live
                  </a>
                </div>
              </motion.article>
            ))}

            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-gray-400 py-12"
              >
                No projects found.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="w-full max-w-4xl bg-[#0b0016] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">{selected.title}</h2>
                    <p className="text-gray-300 mt-2">{selected.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selected.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-white/6 rounded-full border border-white/8"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Features - Multi-Vendor Highlight */}
                    {selected.features && (
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-2 text-[#21d4fd]">
                          Key Features:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selected.features.map((f, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-[#FF6FD8]/10 border border-[#FF6FD8]/20 rounded-full text-sm text-gray-200"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-start gap-2 flex-shrink-0">
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD] rounded-full font-semibold shadow text-sm"
                    >
                      <Globe size={16} /> Visit Project
                    </a>

                    <button
                      onClick={() => setSelected(null)}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/8 transition"
                      aria-label="Close"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* screenshots */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selected.screenshots.map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-white/6 bg-[#070013]"
                    >
                      <img
                        src={s}
                        alt={`${selected.title} screenshot ${i + 1}`}
                        className="w-full h-64 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}