import React from "react";
import { CheckCircle, Globe2, Award } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-[#0B0713] text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full min-h-[90vh] bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63] flex items-center pt-28 px-6 md:px-16 lg:px-28">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
          {/* Left Content */}
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-[#C724FF]">CodefinityTech</span>
            </h1>

            <p className="text-[16px] leading-relaxed text-gray-200 mb-6">
              At CodefinityTech, we specialize in building high-performance web
              applications and AI-powered solutions. From MERN stack development
              to automation tools, we help businesses streamline processes,
              engage customers, and scale efficiently. Our team delivers
              solutions that are reliable, secure, and tailored to your needs.
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
              src="/images/imgi_2_About-Hero-5.webp"
              alt="About Illustration"
              className="w-[450px] md:w-[520px] lg:w-[580px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= OUR EXPERTISE ================= */}
      <section className="py-20 px-6 md:px-16 lg:px-28 bg-[#0D0615]">
        <div className="max-w-[1280px] mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We craft scalable and efficient web applications, AI solutions, and
            automation systems. Our team excels in delivering full-stack
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
              Smart AI tools to enhance business processes, decision-making, and
              customer experiences.
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
            <h3 className="text-3xl font-bold text-white">200+</h3>
            <p className="text-gray-300">Projects Completed</p>
          </div>

          <div className="bg-[#1A0F2F] p-8 rounded-2xl shadow-lg border border-[#C724FF]/20">
            <Globe2 className="mx-auto mb-4 w-10 h-10 text-[#C724FF]" />
            <h3 className="text-3xl font-bold text-white">30+</h3>
            <p className="text-gray-300">Global Clients</p>
          </div>

          <div className="bg-[#1A0F2F] p-8 rounded-2xl shadow-lg border border-[#C724FF]/20">
            <Award className="mx-auto mb-4 w-10 h-10 text-[#C724FF]" />
            <h3 className="text-3xl font-bold text-white">10</h3>
            <p className="text-gray-300">Awards Won</p>
          </div>
        </div>
      </section>
      {/* Bottom Curved Bars */}
      <div className="absolute bottom-[62px] left-0 w-full flex flex-col items-center">
        <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 rotate-180 opacity-25"></div>
        <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 rotate-180 opacity-25"></div>
      </div>
    </div>
  );
};

export default AboutPage;
