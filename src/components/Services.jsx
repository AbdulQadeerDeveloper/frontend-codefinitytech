import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const servicesData = [
  {
    id: "reactjs-development",
    title: "ReactJS Development",
    desc: "We build fast, scalable, and interactive ReactJS applications with modern UI design and seamless performance across all devices.",
  },
  {
    id: "nextjs-development",
    title: "Next.js Development",
    desc: "Leverage the power of server-side rendering and static site generation with Next.js to create lightning-fast and SEO-optimized web apps.",
  },
  {
    id: "web-application",
    title: "Web Application Development",
    desc: "Custom-built, secure, and high-performance web applications that empower your business with innovation and reliability.",
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    desc: "We craft pixel-perfect, responsive, and engaging user interfaces using React, Tailwind CSS, and modern JavaScript frameworks.",
  },
  {
    id: "backend-development",
    title: "Backend Development",
    desc: "Build secure, scalable, and efficient backend systems with Node.js, Express, MongoDB, MySQL, and Sequelize for data-driven applications.",
  },
  {
    id: "fullstack-development",
    title: "Full Stack Development",
    desc: "End-to-end full-stack solutions integrating frontend and backend with React, Next.js, Node.js, MongoDB, and SQL for complete digital systems.",
  },
];

const cardImages = [
  "/images/imgi_11_ServicesCardBg-1.png",
  "/images/imgi_12_ServicesCardBg-2.png",
  "/images/imgi_13_ServicesCardBg-3.png",
];

// Motion-enabled Link so we can animate it on hover / tap
const MotionLink = motion(Link);

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-[#0b0713] text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#3a0057_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Services <span className="text-[#c026d3]">We Offer</span> —
        </h2>
      </div>

      {/* Service Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6">
        {servicesData.map((service, index) => (
          <MotionLink
            key={service.id}
            to={`/services/${service.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.97 }}
            className="group md:w-[31%] relative rounded-xl border-2 border-white/40 
              p-4 lg:p-6 xl:!p-7 2xl:!p-8 space-y-3 overflow-hidden z-10 
              flex flex-col items-start justify-start h-64 md:h-56 lg:h-72 xl:h-64 
              bg-[#0b0713] hover:border-[#c026d3] hover:shadow-[#c026d3]/40 
              hover:shadow-xl transition-colors transition-shadow duration-300 cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={cardImages[index % cardImages.length]}
              alt={`${service.title} background`}
              className="absolute md:-right-10 -bottom-16 h-60 w-60 -z-10 opacity-20 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30"
            />

            <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-[#c026d3]">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.desc}
            </p>
          </MotionLink>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="text-center mt-12 relative z-10">
        <button
          onClick={() => navigate("/services")}
          className="py-2 px-6 lg:px-8 font-bold text-base lg:text-lg text-white 
                bg-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE] 
                rounded-lg border-2 border-transparent 
                hover:from-[#E200FF] hover:via-[#3C0D5A] hover:to-[#7C00FF] 
                transition-all duration-300"
        >
          More Services
        </button>
      </div>
    </section>
  );
}
