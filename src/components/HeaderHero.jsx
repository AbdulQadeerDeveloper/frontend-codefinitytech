import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative w-full min-h-[700px]  md:px-8 xl:px-12 py-16 overflow-hidden bg-gradient-to-b from-[#0B0713] via-[#0B0713] to-[#120A1E] pt-40 lg:pt-32">
        {/* Background Image */}
        <img
          src="/images/imgi_37_HeroBg.webp"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />

        {/* Hero Top Layer */}
        <img
          src="/images/e19dd0fd.png"
          alt="Hero Layer"
          className="absolute top-0 left-0 w-full object-cover opacity-70 pointer-events-none"
        />

        {/* Main Content */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left text-white">
            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-[#A234FD] text-sm font-semibold">
              + MERN Stack Experts +
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
              Building Scalable{" "}
              <span className="text-[#A234FD]">Web Applications</span> With MERN
            </h1>

            <p className="text-gray-300 text-sm md:text-base mb-8 max-w-lg">
              At CodefinityTech, we deliver modern web solutions using MongoDB,
              Express, React, Node.js, and Next.js. Our apps are fast, secure,
              and scalable—empowering businesses worldwide to grow and succeed
              online.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE] hover:from-[#E200FF] hover:via-[#3C0D5A] hover:to-[#7C00FF] text-white font-bold px-6 py-3 rounded-full transition-all duration-300">
                Explore MERN Solutions
              </button>

              <p className="text-[#A234FD] font-semibold text-lg mt-2 sm:mt-0">
                200+{" "}
                <span className="text-white font-normal">
                  Projects Completed
                </span>
              </p>
            </div>
          </div>

          {/* Right Floating Stats Card */}
          <div className="flex-1 flex justify-center relative">
            <div className="hidden md:flex absolute -bottom-36 md:right-0 w-[400px] h-[280px] rounded-3xl p-6 bg-white shadow-lg items-center justify-center z-10">
              <img
                src="/images/imgi_3_WhiteCircle.svg"
                alt="Circle"
                className="absolute top-0 right-0"
                width={77}
                height={77}
              />

              <div className="w-[260px] space-y-3 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D700FA] via-[#6800EE] to-[#3C0D5A]">
                  200+
                </h2>
                <h4 className="text-base md:text-lg uppercase font-semibold text-[#A234FD]">
                  Projects Delivered
                </h4>
                <p className="text-black text-sm md:text-base">
                  Trusted by clients worldwide with full-stack MERN expertise.
                </p>

                {/* Avatars */}
                <div className="flex items-center mt-3">
                  <img
                    src="/images/imgi_4_Avatar1.svg"
                    alt="Avatar"
                    className="rounded-full border-4 border-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE] shadow-lg"
                    width={48}
                    height={48}
                  />
                  <img
                    src="/images/imgi_5_Avatar2.svg"
                    alt="Avatar"
                    className="rounded-full border-4 border-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE] shadow-lg -ml-3"
                    width={48}
                    height={48}
                  />
                  <img
                    src="/images/imgi_6_Avatar3.svg"
                    alt="Avatar"
                    className="rounded-full border-4 border-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE] shadow-lg -ml-3"
                    width={48}
                    height={48}
                  />
                  <span className="bg-gradient-to-r from-[#D700FA] via-[#28093B] to-[#6800EE] text-transparent bg-clip-text font-bold ml-3">
                    more+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Curved Bars */}
      <div className="absolute bottom-[-40px] left-0 w-full flex flex-col items-center">
        <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 rotate-180 opacity-25"></div>
        <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 rotate-180 opacity-25"></div>
      </div>
    </>
  );
};

export default Hero;
