import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import ClientFeedback from "../components/ClientFeedback";

const servicesData = [
  {
    id: "reactjs-development",
    title: "ReactJS Development",
    desc: "Fast, scalable, and interactive ReactJS applications with modern UI design.",
  },
  {
    id: "nextjs-development",
    title: "Next.js Development",
    desc: "Server-side rendering and SEO-optimized web apps.",
  },
  {
    id: "web-application",
    title: "Web Application Development",
    desc: "Secure, high-performance custom web applications.",
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive, and engaging UI using React and Tailwind CSS.",
  },
  {
    id: "backend-development",
    title: "Backend Development",
    desc: "Efficient backend systems using Node.js, Express, MongoDB, and SQL.",
  },
  {
    id: "fullstack-development",
    title: "Full Stack Development",
    desc: "End-to-end full-stack solutions integrating frontend & backend seamlessly.",
  },
  {
    id: "chakra-ui",
    title: "Chakra UI",
    desc: "Design responsive, accessible, and reusable components quickly with Chakra UI for React projects.",
  },
  {
    id: "mui",
    title: "Material-UI (MUI)",
    desc: "Create beautiful, fully responsive, and customizable React components with Material-UI (MUI).",
  },
  {
    id: "tailwind-ui",
    title: "Tailwind UI",
    desc: "Rapidly build modern, fully responsive UIs with Tailwind UI components and Tailwind CSS.",
  },
  {
    id: "react-bootstrap",
    title: "React Bootstrap",
    desc: "Build responsive, mobile-first projects on React using React Bootstrap components.",
  },
];

const cardImages = [
  "/images/imgi_11_ServicesCardBg-1.png",
  "/images/imgi_12_ServicesCardBg-2.png",
  "/images/imgi_13_ServicesCardBg-3.png",
];

const faqData = [
  {
    question: "What is ReactJS?",
    answer:
      "ReactJS is a JavaScript library for building user interfaces, maintained by Facebook.",
  },
  {
    question: "Do you provide custom solutions?",
    answer:
      "Yes! We create tailored web applications, AI solutions, and full-stack platforms.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Our stack includes React, Next.js, Node.js, Tailwind CSS, Chakra UI, MUI, and more.",
  },
  {
    question: "Can you integrate APIs?",
    answer:
      "Absolutely! We handle RESTful and GraphQL API integrations seamlessly.",
  },
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#0b0713] via-[#120a1e] to-[#0b0713] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center px-6 md:px-20 lg:px-28 pt-[100px] bg-[#070012] overflow-hidden">
        {/* Background Images */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-110"
          style={{ backgroundImage: "url('/images/imgi_33_MLDL-Bg.webp')" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-110"
          style={{
            backgroundImage: "url('/images/imgi_34_CustomSolutionsBg.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0713]/80 via-[#120A1E]/60 to-[#0B0713]/40"></div>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Transform Your Business with{" "}
              <span className="text-purple-500">Custom Solutions</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              We deliver full-stack web applications, AI-powered solutions, and
              scalable platforms tailored to your business needs. Enhance
              performance, usability, and growth with cutting-edge technology.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#b721ff] to-[#21d4fd] rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              Get a Free Consultation
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <img
              src="/images/imgi_2_MLDL-Hero.webp"
              alt="Custom Solutions"
              className="w-full max-w-lg rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center">
        <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 rotate-180 opacity-25"></div>
        <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 rotate-180 opacity-25"></div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Services <span className="text-[#c026d3]">We Offer</span>
        </h2>
        {/* Service Cards */}
        <div className="relative z-10 flex flex-wrap justify-center gap-6">
          {servicesData.map((service, index) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="md:w-[31%] relative rounded-xl border-2 border-white/40 
                    p-4 lg:p-6 xl:!p-7 2xl:!p-8 space-y-3 overflow-hidden z-10 
                    flex flex-col items-start justify-start h-64 md:h-56 lg:h-72 xl:h-64 
                    bg-[#0b0713] hover:border-[#c026d3] hover:shadow-[#c026d3]/40 
                    hover:shadow-md transition-all duration-300"
            >
              {/* Background Image */}
              <img
                src={cardImages[index % cardImages.length]}
                alt={`${service.title} background`}
                className="absolute md:-right-10 -bottom-16 h-60 w-60 -z-10 opacity-20 select-none pointer-events-none"
              />

              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-6 md:px-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/imgi_9_WhyChooseUsBg.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0713]/80 via-[#120A1E]/60 to-[#0B0713]/80"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Frequently Asked <span className="text-[#c026d3]">Questions</span>
          </h2>

          <div className="flex flex-col gap-4 text-left">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-[#1b122a]/90 rounded-xl border border-white/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold hover:bg-[#2a1b45]/50 transition"
                >
                  {item.question}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 text-gray-300 border-t border-white/20">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <ClientFeedback />
    </div>
  );
}
