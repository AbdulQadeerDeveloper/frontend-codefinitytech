// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const servicesData = [
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    desc: "Engage customers 24/7 with intelligent, human-like chatbots...",
    details:
      "Our AI chatbot development integrates NLP, GPT models, and custom workflows for support, sales, and engagement automation.",
  },
  {
    id: "generative-ai",
    title: "Generative AI Development",
    desc: "Transform your operations with AI-powered tools...",
    details:
      "We build text, image, and data-generation tools using OpenAI, Gemini, and custom LLM fine-tuning — tailored to your business needs.",
  },
  {
    id: "web-application",
    title: "Web Application",
    desc: "We design and develop scalable web applications...",
    details:
      "From dashboards to SaaS platforms, we build responsive and secure apps using React, Next.js, Node.js, and MongoDB.",
  },
  {
    id: "machine-learning",
    title: "Machine & Deep Learning",
    desc: "Build intelligent systems that learn from data...",
    details:
      "We develop ML and DL pipelines using TensorFlow, PyTorch, and Scikit-learn to deliver predictive insights and automation.",
  },
  {
    id: "tokenization",
    title: "Tokenization",
    desc: "Convert physical or digital assets into blockchain-based tokens...",
    details:
      "We implement blockchain-based token systems enabling liquidity and fractional ownership across DeFi and Web3 platforms.",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    desc: "Grow your business online with SEO, SEM, social media...",
    details:
      "We create data-driven campaigns to increase your reach, engagement, and ROI through Google, Meta, and LinkedIn marketing.",
  },
];

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <div className="text-center py-20 text-white">
        <h2 className="text-3xl font-bold">Service Not Found</h2>
        <button
          onClick={() => navigate("/services")}
          className="mt-6 px-6 py-3 bg-[#c026d3] rounded-full text-white hover:opacity-90"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0c001a] text-white py-20 px-6 md:px-20">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#c026d3] mb-8 hover:underline"
      >
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-300 mb-8 max-w-2xl">{service.desc}</p>
      <p className="text-gray-400 leading-relaxed max-w-3xl">
        {service.details}
      </p>
    </section>
  );
}
