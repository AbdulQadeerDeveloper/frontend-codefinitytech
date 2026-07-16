import React from "react";

const features = [
  {
    title: "Global Software Solutions",
    description:
      "We provide top-notch software solutions for businesses worldwide, ensuring timely delivery and customer satisfaction.",
    image:
      "https://unsplash.com/photos/3d-illustration-computer-chip-a-processor-on-a-printed-circuit-board-the-concept-of-data-transfer-to-the-cloud-central-processor-in-the-form-of-artificial-intelligence-data-transfer-g6Nom1uBz6M",
  },
  {
    title: "Bespoke Business Software",
    description:
      "Customized software solutions tailored to your business needs for optimal performance and growth.",
    image: "https://www.exytex.com/web-development/",
  },
  {
    title: "Expert Development Team",
    description:
      "Our in-house team of skilled developers works passionately to deliver excellence in every project.",
    image: "/public/images/softhome.jpg",
  },
  {
    title: "Agile & Transparent Process",
    description:
      "We follow agile methodologies with complete transparency, keeping you informed throughout the development cycle.",
    image: "https://www.exytex.com/web-development/",
  },
  {
    title: "Reliable & Scalable Systems",
    description:
      "Our software is built for reliability and scalability, ensuring your business grows without technical limits.",
    image:
      "https://images.unsplash.com/photo-1591696205602-4f69e6f51bdb?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ChooseSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row items-center mb-20 gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-4xl font-extrabold text-gradient mb-6">
              A Software Company Serving Worldwide
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Whenever we consider a software house, the first thing that comes
              to mind is timely delivery and customer satisfaction. Many
              software houses provide{" "}
              <a
                href="https://www.exytex.com/services/"
                className="text-blue-600 underline hover:text-blue-500 transition-colors"
              >
                software development services
              </a>
              , but only a few sustain their reputation. Exytex Technologies has
              in-house development teams and also office-based teams. They
              execute projects with full enthusiasm and determination,
              delivering unmatched results.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Software Company"
              className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row items-center mb-20 gap-10">
          <div className="lg:w-1/2 lg:order-2">
            <h3 className="text-4xl font-extrabold text-gradient mb-6">
              Bespoke Software for Business
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Software companies differ from software houses. Many top-rated
              companies in the UK and Pakistan provide exceptional services with
              passion, zeal, and teamwork. Exytex stands out with a 5.0 rating,
              highlighting our commitment to quality, long-term results, and{" "}
              <a
                href="https://www.exytex.com/team/"
                className="text-blue-600 underline hover:text-blue-500 transition-colors"
              >
                enthusiastic teamwork
              </a>
              .
            </p>
          </div>
          <div className="lg:w-1/2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1581091215363-3e8cb9b0c5be?auto=format&fit=crop&w=800&q=80"
              alt="Bespoke Software"
              className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <h2 className="text-4xl font-extrabold text-center text-gradient mb-16">
          Why Choose MubiSoft
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
