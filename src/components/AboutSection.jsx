import React from "react";

const AboutSection = () => {
  return (
    <>
      <section className="bg-[#0E001A] text-white py-30 px-6 md:px-16 lg:px-24 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-[#C300FF]">CodefinityTech</span>
          </h2>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Delivering{" "}
              <span className="text-[#C300FF] font-bold">
                AI & MERN Solutions
              </span>
            </h3>
            <p className="text-sm text-gray-400 mb-2">Since 2023</p>
            <p className="text-gray-300 leading-relaxed mb-6">
              At CodefinityTech, we specialize in building intelligent,
              scalable, and high-performance web applications using AI
              technologies and MERN stack. Our client-first approach ensures
              tailored solutions that maximize efficiency, enhance
              decision-making, and drive business growth.
            </p>

            {/* Progress Bars */}
            <div className="space-y-4">
              {/* AI Expertise */}
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>AI Expertise</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#C300FF] via-[#8B00FF] to-[#5D00F7] h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              {/* Customer Satisfaction */}
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Customer Satisfaction</span>
                  <span>99%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#C300FF] via-[#8B00FF] to-[#5D00F7] h-2 rounded-full"
                    style={{ width: "99%" }}
                  ></div>
                </div>
              </div>

              {/* Project Quality */}
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Project Quality</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#C300FF] via-[#8B00FF] to-[#5D00F7] h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            {/* Top Image Box */}
            <div className="rounded-2xl overflow-hidden border border-[#3F00FF]/40 shadow-lg">
              <img
                src="/images/imgi_40_About-Bg.svg"
                alt="AI & MERN Development"
                className="w-full h-[250px] object-cover"
              />
            </div>

            {/* Stats Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* AI Solutions */}
              <div className="bg-[#8B00FF] bg-opacity-40 p-6 rounded-2xl border border-[#3F00FF]/50 shadow-lg">
                <h4 className="text-white text-lg font-semibold mb-2">
                  AI Solutions
                </h4>
                <div className="bg-black rounded-xl p-4 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-white">99%</span>
                  <span className="text-gray-400 text-sm mt-1">
                    Full Solutions
                  </span>
                </div>
              </div>

              {/* MERN Stack */}
              <div className="bg-[#8B00FF] bg-opacity-40 p-6 rounded-2xl border border-[#3F00FF]/50 shadow-lg">
                <h4 className="text-white text-lg font-semibold mb-2">
                  MERN Expertise
                </h4>
                <div className="bg-black rounded-xl p-4 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-white">98%</span>
                  <span className="text-gray-400 text-sm mt-1">
                    Full-Stack Services
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
