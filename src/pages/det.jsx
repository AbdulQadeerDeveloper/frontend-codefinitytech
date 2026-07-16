import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { projectId } = useParams();

  const projectData = {
    "email-automation": {
      title: "Email Automation",
      content:
        "We built a custom email automation platform to send personalized campaigns, manage leads, and generate detailed performance analytics.",
    },
    "website-development": {
      title: "Website Development",
      content:
        "A fully responsive, SEO-optimized website built with React and Tailwind for maximum performance.",
    },
    "ecommerce-development": {
      title: "eCommerce Development",
      content:
        "A high-performance eCommerce store built with Shopify and Next.js, optimized for sales and scalability.",
    },
    "usa-car-auction": {
      title: "Car Dealer Auction Automation",
      content:
        "Automated auction data extraction, vehicle tracking, and real-time bidding dashboard for car dealers.",
    },
  };

  const project = projectData[projectId];

  if (!project)
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-600">
          Project not found ❌
        </h2>
      </div>
    );

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{project.title}</h1>
      <p className="text-gray-700 leading-relaxed text-lg">{project.content}</p>
    </section>
  );
}
