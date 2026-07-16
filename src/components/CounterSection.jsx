// src/components/CounterSection.jsx
import React from "react";

export default function CounterSection() {
  const counters = [
    { icon: "✔️", count: "500+", label: "Completed Projects" },
    { icon: "😊", count: "120+", label: "Happy Clients" },
    { icon: "🛠️", count: "80+", label: "Multi Services" },
    { icon: "🏆", count: "25+", label: "Winning Awards" },
  ];

  const backgroundTexts = [
    "Trusted by clients worldwide",
    "Delivering quality every day",
    "Innovation drives our projects",
    "Your success is our mission",
    "Reliable solutions for your business",
    "Helping businesses grow",
  ];

  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-r from-indigo-100 to-indigo-200 overflow-hidden">
      {/* Running background text */}
      <div className="absolute top-1/2 left-0 w-full whitespace-nowrap pointer-events-none">
        {backgroundTexts.map((text, index) => (
          <span
            key={index}
            className="inline-block mr-16 opacity-40 text-5xl text-indigo-300 font-bold animate-marquee"
          >
            {text}
          </span>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            We have Completed <span className="text-indigo-600">500+</span> Projects{" "}
            <span className="text-indigo-600">Successfully</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {counters.map((c, index) => (
            <div
              key={index}
              className="single-counter p-6 bg-white rounded-lg shadow-md flex flex-col items-center
                         transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:backdrop-blur-sm
                         hover:bg-indigo-50 hover:text-indigo-700"
            >
              <div className="text-indigo-600 text-5xl mb-2">{c.icon}</div>
              <h3 className="text-3xl font-bold text-gray-800">{c.count}</h3>
              <p className="mt-2 text-gray-700">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
