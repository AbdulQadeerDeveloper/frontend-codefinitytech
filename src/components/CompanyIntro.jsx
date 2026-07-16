import React from "react";

export default function CompanyIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/public/images/softhome.jpg"
            alt="Top Software House"
            className="rounded-2xl shadow-lg max-w-full"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Top Software House in Pakistan
          </h1>
          <div className="w-20 h-1 bg-indigo-600 mt-3 mb-5 rounded"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are a software company currently working in Pakistan. We provide
            services for{" "}
            <a
              href="https://www.exytex.com/web-development/"
              className="text-indigo-600 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              professional web development
            </a>
            , Graphic Designing, Digital Marketing, and mobile applications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We create unique web designs and corporate identity, as well as
            promote websites and conduct comprehensive advertising campaigns.
            Our main advantage is that you can go through the entire process of
            web development with us.
          </p>
        </div>
      </div>
    </section>
  );
}
