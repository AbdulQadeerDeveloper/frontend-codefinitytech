// src/pages/services/ReactBootstrapService.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Box,
  Layers,
  Zap,
  Globe,
  Clock,
  ChevronDown,
} from "lucide-react";

const cardImages = [
  "/images/imgi_11_ServicesCardBg-1.png",
  "/images/imgi_12_ServicesCardBg-2.png",
  "/images/imgi_13_ServicesCardBg-3.png",
];

const serviceCards = [
  {
    id: "react-bootstrap-ui",
    title: "Custom UI Components",
    desc: "Pixel-perfect, responsive UI components using React Bootstrap.",
  },
  {
    id: "react-bootstrap-landing",
    title: "Landing Page Development",
    desc: "Modern, fast, SEO-optimized landing pages in React Bootstrap.",
  },
  {
    id: "react-bootstrap-dashboard",
    title: "Dashboard Development",
    desc: "Responsive dashboards with charts, tables & reusable UI blocks.",
  },
];

const featureList = [
  {
    icon: <LayoutDashboard size={24} />,
    title: "Responsive UI Design",
    desc: "Mobile-first layouts powered by Bootstrap grid & utilities.",
  },
  {
    icon: <Box size={24} />,
    title: "Reusable Components",
    desc: "Scalable React-Bootstrap components for long-term projects.",
  },
  {
    icon: <Layers size={24} />,
    title: "Dashboard Development",
    desc: "Admin dashboards, CRM panels & analytics interfaces.",
  },
  {
    icon: <Zap size={24} />,
    title: "Bootstrap 5 Customization",
    desc: "Full brand customization including themes & UI kits.",
  },
  {
    icon: <Globe size={24} />,
    title: "Cross-Browser Compatibility",
    desc: "Tested on Chrome, Firefox, Safari, Edge & mobile browsers.",
  },
  {
    icon: <Clock size={24} />,
    title: "Fast Delivery",
    desc: "Rapid development with expert React-Bootstrap structure.",
  },
];

const whyChooseUs = [
  "10+ Years of UI/UX Expertise",
  "High-Performance React Apps",
  "Clean & Maintainable Code",
  "SEO-Friendly Development",
  "Fast Delivery & Support",
  "100% Client Satisfaction",
];

const faqList = [
  {
    question: "What is React Bootstrap?",
    answer:
      "React-Bootstrap is a library that replaces Bootstrap JavaScript with React components, fully compatible with Bootstrap styles.",
  },
  {
    question: "Can you create custom themes?",
    answer:
      "Yes! We can customize Bootstrap themes fully according to your branding and project needs.",
  },
  {
    question: "Do you provide responsive dashboards?",
    answer:
      "Absolutely. All dashboards are fully responsive and mobile-friendly using Bootstrap grid and components.",
  },
  {
    question: "How fast can you deliver projects?",
    answer:
      "We deliver small projects in days and larger dashboards within weeks, depending on complexity.",
  },
];

export default function ReactBootstrapService() {
  return (
    <div className="w-full bg-gradient-to-b from-[#0B0713] via-[#120A1E] to-[#1A0F2A] text-white">
      {/* HERO */}
      <section className="relative w-full px-6 md:px-12 py-28 overflow-hidden">
        <img
          src="/images/imgi_37_HeroBg.webp"
          alt="React Bootstrap Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            React <span className="text-[#c026d3]">Bootstrap</span> Development
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-300 mt-4 text-base md:text-lg max-w-3xl mx-auto"
          >
            Build modern, fully responsive, and elegant UI experiences using
            React-Bootstrap.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6"
          >
            <Link to="/contact">
              <button
                className="py-2 px-6 lg:px-8 font-bold text-base lg:text-lg text-white 
                bg-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE] 
                rounded-lg border-2 border-transparent 
                hover:from-[#E200FF] hover:via-[#3C0D5A] hover:to-[#7C00FF] 
                transition-all duration-300"
              >
                Get a Free Consultation
              </button>
            </Link>
            <div className="absolute bottom-[-50px] left-0 w-full flex flex-col items-center">
              <div className="w-[100%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 rotate-180 opacity-25"></div>
              <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 rotate-180 opacity-25"></div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Bottom Curved Bars */}

      {/* SERVICES CARDS */}
      <section className="w-full py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our <span className="text-[#c026d3]">React-Bootstrap</span> Services
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {serviceCards.map((service, index) => (
            <Link key={service.id} to={`/services/${service.id}`}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  borderColor: "#c026d3",
                  boxShadow: "0 0 25px #c026d3",
                }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl border border-white/20 p-6 h-60 bg-[#0b0713] transition-all flex flex-col justify-end overflow-hidden"
              >
                <img
                  src={cardImages[index % 3]}
                  alt="Card Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          What <span className="text-[#c026d3]">We Offer</span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featureList.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-[#1b122a] p-6 rounded-xl border border-white/20 hover:border-[#c026d3] transition flex items-start gap-4"
            >
              <div className="text-[#c026d3]">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className="py-20 px-6 md:px-20 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/imgi_42_Why-us-Stats-Bg.png)" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Why <span className="text-[#c026d3]">Choose Us?</span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {whyChooseUs.map((reason, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              className="bg-[#0b0713]/80 p-6 rounded-xl border border-white/20 text-center hover:border-[#c026d3] transition backdrop-blur-sm"
            >
              <h3 className="font-bold text-lg text-white">{reason}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20 px-6 md:px-20 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/imgi_42_Why-us-Stats-Bg.png)" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked <span className="text-[#c026d3]">Questions</span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqList.map((faq, idx) => (
            <details
              key={idx}
              className="bg-[#1b122a]/80 p-6 rounded-xl border border-white/20 cursor-pointer transition hover:border-[#c026d3] backdrop-blur-sm"
            >
              <summary className="flex justify-between items-center text-lg font-semibold text-white">
                {faq.question}
                <ChevronDown size={20} className="text-[#c026d3]" />
              </summary>
              <p className="mt-2 text-gray-300 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
