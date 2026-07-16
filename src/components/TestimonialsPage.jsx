import React from "react";
import { motion } from "framer-motion";
import StatsBar from "./WhyChooseUs";
import ReviewsSection from "./ReviewsSection";

// React Icons
import {
  FaRocket,
  FaRobot,
  FaChartLine,
  FaBolt,
  FaPalette,
  FaTools,
} from "react-icons/fa";

export default function TestimonialsPage() {
  return (
    <div className="bg-[#080014] text-white overflow-hidden">
      {/* ===============================
          1️⃣ HERO SECTION
      =============================== */}
      <section className="w-full min-h-[90vh] bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63] flex items-center pt-28 px-6 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
          {/* Left Content */}
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Transforming Ideas Into Success Stories
            </h1>

            <p className="text-[16px] leading-relaxed text-gray-200 mb-6">
              Trusted by global brands & fast-growing startups. Explore how we
              deliver real results through design, development, and strategy.
            </p>

            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#b721ff] to-[#21d4fd] rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              Discover our Services
            </a>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/images/imgi_2_About-Hero-5.webp"
              alt="About Illustration"
              className="w-[450px] md:w-[520px] lg:w-[580px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===============================
          2️⃣ STATS SECTION
      =============================== */}
      <StatsBar />

      {/* ===============================
          3️⃣ TESTIMONIAL CARDS SECTION
      =============================== */}
      <section className="py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Clients Say About Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "John Carter",
              text: "Amazing service! They delivered premium results on time and beyond expectations.",
            },
            {
              name: "Maria Smith",
              text: "Highly professional, creative and extremely responsive team!",
            },
            {
              name: "Robert Wilson",
              text: "Transformed our entire brand identity. Exceptional work!",
            },
            {
              name: "Emily White",
              text: "Best experience ever. Super smooth process & excellent quality.",
            },
            {
              name: "David Lee",
              text: "Reliable, fast, and creative. Highly recommended to all!",
            },
            {
              name: "Sophia Jones",
              text: "They understood our vision perfectly and executed it beautifully.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10 hover:border-[#b721ff]/50 hover:shadow-[0_0_30px_rgba(183,33,255,0.4)] transition-all"
            >
              <p className="text-gray-200 leading-relaxed">{item.text}</p>
              <h3 className="text-[#b721ff] mt-4 font-semibold">
                — {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===============================
          4️⃣ CLIENT SUCCESS STORIES (React Icons)
      =============================== */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-[#0c001b]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Client Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Brand Growth Achieved",
              desc: "Helped a startup grow its online reach by 400% in just 3 months with powerful branding & redesign.",
              icon: <FaRocket className="text-5xl text-[#b721ff]" />,
            },
            {
              title: "AI Automation Success",
              desc: "Built AI chatbots that reduced customer support workload by 65% and increased customer satisfaction.",
              icon: <FaRobot className="text-5xl text-[#b721ff]" />,
            },
            {
              title: "Sales Boost Strategy",
              desc: "Designed conversion-optimized layouts boosting sales by 52% for ecommerce stores.",
              icon: <FaChartLine className="text-5xl text-[#b721ff]" />,
            },
            {
              title: "Website Speed Upgrade",
              desc: "Optimized websites achieving 98+ Google PageSpeed score and faster loading.",
              icon: <FaBolt className="text-5xl text-[#b721ff]" />,
            },
            {
              title: "Creative Brand Identity",
              desc: "Delivered a complete modern brand transformation including logo & typography.",
              icon: <FaPalette className="text-5xl text-[#b721ff]" />,
            },
            {
              title: "Automation Workflow",
              desc: "Created workflow tools saving 20+ hours per week in manual work.",
              icon: <FaTools className="text-5xl text-[#b721ff]" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 
              shadow-[0_0_20px_rgba(183,33,255,0.15)] hover:border-[#b721ff]/40 
              hover:shadow-[0_0_35px_rgba(183,33,255,0.5)] transition-all duration-500"
            >
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#b721ff] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===============================
          5️⃣ CALL TO ACTION (CTA)
      =============================== */}
      <section className="relative text-center py-24 px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Let’s Build Something Exceptional
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
          Ready to elevate your brand with premium design & smart development?
        </p>

        <button className="mt-8 px-10 py-4 bg-gradient-to-r from-[#b721ff] to-[#21d4fd] text-white rounded-full text-lg font-semibold shadow-[0_0_25px_rgba(183,33,255,0.6)] hover:shadow-[0_0_35px_rgba(183,33,255,0.8)] hover:scale-105 transition-all">
          Start Your Project
        </button>

        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[160px]" />
      </section>

      <ReviewsSection />
    </div>
  );
}
