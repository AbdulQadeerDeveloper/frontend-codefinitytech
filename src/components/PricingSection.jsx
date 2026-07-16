import React, { useState } from "react";
import HomeProjects from "./Projects";
import { CheckCircle, Globe2, Award } from "lucide-react";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";
const PricingPage = () => {
  const [bookingSite, setBookingSite] = useState(null);
  const benefits = [
    "Expert Full-Stack Developers",
    "Custom MERN Solutions",
    "SEO & Performance Optimized",
    "Scalable & Secure Architecture",
  ];

  const features = [
    "Fast & Responsive Websites",
    "Secure Payment Integrations",
    "Custom Dashboards & Analytics",
    "AI-Powered Tools Integration",
  ];
  const cardImages = [
    "/images/imgi_11_ServicesCardBg-1.png",
    "/images/imgi_12_ServicesCardBg-2.png",
    "/images/imgi_13_ServicesCardBg-3.png",
  ];

  const websiteTypes = [
    {
      type: "Business Website",
      pages: "3–10",
      features: ["Info Pages", "Contact Form", "SEO Optimized"],
      tech: "React + Node + MongoDB",
      price: "25,000 PKR",
      recommended: true,
    },
    {
      type: "E-commerce Website",
      pages: "5–50",
      features: ["Cart & Checkout", "Payments Integration", "Admin Panel"],
      tech: "React + Node + MongoDB + Stripe",
      price: "100,000 PKR",
    },
    {
      type: "Portfolio Website",
      pages: "1–5",
      features: ["Project Showcase", "Contact Form"],
      tech: "React + Next + Firebase",
      price: "20,000 PKR",
    },
    {
      type: "SaaS Web App",
      pages: "Dynamic",
      features: ["Dashboards", "Authentication", "APIs"],
      tech: "React + Node + PostgreSQL",
      price: "250,000 PKR",
    },
    {
      type: "Blog / News Site",
      pages: "Dynamic",
      features: ["Articles", "CMS Integration"],
      tech: "Next + Strapi + MongoDB",
      price: "50,000 PKR",
    },
    {
      type: "LMS Website",
      pages: "Dynamic",
      features: ["Courses", "Quizzes", "Progress Tracking"],
      tech: "React + Node + PostgreSQL",
      price: "150,000 PKR",
    },
    {
      type: "Social Networking App",
      pages: "Dynamic",
      features: ["Profiles", "Messaging", "Real-Time Updates"],
      tech: "React + Node + WebSockets + MongoDB",
      price: "300,000 PKR",
    },
  ];

  return (
    <div className="w-full text-white bg-[#0B0713]">
      {/* 1. HERO SECTION */}
      <div className="bg-[#0B0713] text-white">
        {/* ================= HERO SECTION ================= */}
        <section className="w-full min-h-[90vh] bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63] flex items-center pt-28 px-6 md:px-16 lg:px-28">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
            {/* Left Content */}
            <div className="text-white max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold">
                Choose Your{" "}
                <span className="text-[#D700FA]">Pricing Package</span>
              </h2>
              <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
                Select the perfect full-stack website package for your business
                needs. Each package is designed for scalability, modern UI/UX,
                and performance.
              </p>

              <a
                href="/services"
                className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#8A2BE2] to-[#D946EF] rounded-xl shadow-xl text-lg font-semibold hover:scale-105 transition"
              >
                Explore Our Services
              </a>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="/images/imgi_2_AI-Chatbot-Development-Services.webp"
                alt="About Illustration"
                className="w-[350px] md:w-[320px] lg:w-[380px] drop-shadow-2xl"
              />
            </div>
          </div>
          {/* Bottom Curved Bars */}
          <div className="absolute bottom-[70px] left-0 w-full flex flex-col items-center">
            <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 rotate-180 opacity-25"></div>
            <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 rotate-180 opacity-25"></div>
          </div>
        </section>

        {/* ================= OUR EXPERTISE ================= */}
        <section className="py-20 px-6 md:px-16 lg:px-28 bg-[#0D0615]">
          <div className="max-w-[1280px] mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Expertise
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We craft scalable and efficient web applications, AI solutions,
              and automation systems. Our team excels in delivering full-stack
              solutions tailored to business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
            <div className="bg-[#1A0F2F] rounded-2xl p-8 text-center shadow-lg border border-[#C724FF]/20">
              <h3 className="text-2xl font-bold text-[#C724FF] mb-2">
                MERN Stack
              </h3>
              <p className="text-gray-300">
                Modern, responsive, and scalable web applications using MongoDB,
                Express, React, and Node.js.
              </p>
            </div>

            <div className="bg-[#1A0F2F] rounded-2xl p-8 text-center shadow-lg border border-[#C724FF]/20">
              <h3 className="text-2xl font-bold text-[#C724FF] mb-2">
                AI Solutions
              </h3>
              <p className="text-gray-300">
                Smart AI tools to enhance business processes, decision-making,
                and customer experiences.
              </p>
            </div>

            <div className="bg-[#1A0F2F] rounded-2xl p-8 text-center shadow-lg border border-[#C724FF]/20">
              <h3 className="text-2xl font-bold text-[#C724FF] mb-2">
                Automation
              </h3>
              <p className="text-gray-300">
                Automate workflows and repetitive tasks for efficiency and
                productivity gains.
              </p>
            </div>
          </div>
        </section>

        {/* ================= OUR ACHIEVEMENTS ================= */}
        <section className="py-20 px-6 md:px-16 lg:px-28 bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63]">
          <div className="max-w-[1280px] mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Over the years, we've successfully delivered projects and built
              trust with clients worldwide.
            </p>
          </div>

          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#1A0F2F] p-8 rounded-2xl shadow-lg border border-[#C724FF]/20">
              <CheckCircle className="mx-auto mb-4 w-10 h-10 text-[#C724FF]" />
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>

            <div className="bg-[#1A0F2F] p-8 rounded-2xl shadow-lg border border-[#C724FF]/20">
              <Globe2 className="mx-auto mb-4 w-10 h-10 text-[#C724FF]" />
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-gray-300">Global Clients</p>
            </div>

            <div className="bg-[#1A0F2F] p-8 rounded-2xl shadow-lg border border-[#C724FF]/20">
              <Award className="mx-auto mb-4 w-10 h-10 text-[#C724FF]" />
              <h3 className="text-3xl font-bold text-white">10</h3>
              <p className="text-gray-300">Awards Won</p>
            </div>
          </div>
        </section>
      </div>
      {/* 2. PRICING PACKAGES */}
      <section className="w-full bg-[#0B0713] text-white py-20 px-6 md:px-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Choose Your <span className="text-[#D700FA]">Pricing Package</span>
          </h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Select the perfect full-stack website package for your business
            needs. Each package is designed for scalability, modern UI/UX, and
            performance.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {websiteTypes.map((site, idx) => (
            <div
              key={idx}
              className={`relative bg-[#1A0F2F] rounded-3xl p-8 flex flex-col justify-between shadow-xl transform transition-transform duration-300 hover:scale-105 ${
                site.recommended ? "border-2 border-[#D700FA]" : ""
              }`}
            >
              {site.recommended && (
                <div className="absolute -top-4 right-4 bg-gradient-to-r from-[#D700FA] via-[#6800EE] to-[#3C0D5A] text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  Recommended
                </div>
              )}

              <h3 className="text-2xl font-bold text-[#D700FA] mb-2">
                {site.type}
              </h3>
              <p className="text-gray-400 mb-2">{site.pages} Pages</p>

              <ul className="mb-4 space-y-1 text-gray-300">
                {site.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2">
                    <span className="text-[#D700FA] font-bold">•</span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-400 mb-4">Tech: {site.tech}</p>

              <div className="mt-auto">
                <p className="text-2xl font-bold mb-4">{site.price}</p>

                <button
                  type="button"
                  onClick={() => setBookingSite(site)}
                  className="mt-10 inline-block px-14 py-4 
                     bg-gradient-to-r from-[#FF6FD8] to-[#21D4FD]
                     text-white rounded-full text-lg font-semibold 
                     hover:scale-105 transition-transform"
                >
                  Book Services
                </button>
              </div>
            </div>
          ))}
        </div>
        {bookingSite && <BookingModal site={bookingSite} onClose={() => setBookingSite(null)} />}
      </section>
      {/* 3. WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-16 bg-[#120A1E] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Why Choose <span className="text-[#D700FA]">CodefinityTech</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-[#1A0F2F] rounded-2xl p-6 shadow-lg hover:scale-105 transition transform"
            >
              <p className="text-lg font-semibold text-[#D700FA] mb-2">{b}</p>
              <p className="text-gray-300 text-sm">
                Expertly crafted to maximize ROI, usability, and online impact.
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* 4. FEATURES */}
      <section className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Key <span className="text-[#D700FA]">Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#1A0F2F] rounded-2xl p-6 shadow-lg hover:scale-105 transition transform"
            >
              <p className="text-lg font-semibold text-[#D700FA] mb-2">{f}</p>
              <p className="text-gray-300 text-sm">
                Modern design & technology included.
              </p>
            </div>
          ))}
        </div>
      </section>
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
              className="relative rounded-2xl shadow-xl border border-white/10 overflow-hidden transition-all"
              style={{
                backgroundImage: `linear-gradient(to bottom right, rgba(5,0,15,0.7), rgba(64,0,127,0.7)), url(${
                  cardImages[i % cardImages.length]
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-6 backdrop-blur-xl">
                <p className="text-gray-200 leading-relaxed">{item.text}</p>
                <h3 className="text-[#b721ff] mt-4 font-semibold">
                  — {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <HomeProjects />

      {/* 6. FAQ */}
      <section className="py-20 px-6 md:px-16 bg-[#120A1E] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Frequently Asked <span className="text-[#D700FA]">Questions</span>
        </h2>

        <div className="max-w-3xl mx-auto text-left space-y-4">
          {[
            {
              question: "How long does it take to complete a website?",
              answer:
                "Business websites usually take 5–7 days, E-commerce websites 10–15 days, SaaS applications 20–40 days. Timelines vary depending on complexity and features.",
            },
            {
              question: "How is the payment structured?",
              answer:
                "We work with milestone payments for transparency: 30–50% upfront, 30–40% during development, and the remaining on final delivery.",
            },
            {
              question: "Can I upgrade my website later?",
              answer:
                "Absolutely! You can start with a smaller package and upgrade your website or add features anytime as your business grows.",
            },
            {
              question: "Do you provide support after delivery?",
              answer:
                "Yes. We offer ongoing maintenance and support packages to ensure your website stays updated, secure, and running smoothly.",
            },
            {
              question: "What technologies do you use?",
              answer:
                "We use modern stacks such as React, Next.js, Node.js, MongoDB, PostgreSQL, and integrations like Stripe for payments and AI tools for automation.",
            },
            {
              question: "Can I request a custom solution?",
              answer:
                "Yes. For unique requirements or custom features, we provide tailored quotes and development plans to fit your business needs.",
            },
          ].map((faq, i) => (
            <div key={i} className="bg-[#1A0F2F] rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-[#D700FA] mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-300 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
