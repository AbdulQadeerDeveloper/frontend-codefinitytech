// src/pages/OdooServiceDetail.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "../data/servicesData";
import { 
  FaArrowLeft, FaCheck, FaRobot, FaTimes, FaPaperPlane,
  FaStar, FaClock, FaDollarSign, FaCode, FaDatabase,
  FaServer, FaCloud, FaMobile, FaCogs, FaRocket,
  FaSearch, FaFilter, FaDownload, FaShare,
  FaChevronDown, FaChevronUp, FaWhatsapp, FaPhone, FaEnvelope,
  FaRupeeSign
} from "react-icons/fa";

// AI Chat Component
const AIChatBot = ({ serviceTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: `👋 Hi! I'm your AI assistant for ${serviceTitle}. How can I help you with your Odoo project today?`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getAIResponse = (userMessage) => {
    const lowerMsg = userMessage.toLowerCase();
    
    if (lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("pricing") || lowerMsg.includes("rate")) {
      return "💰 Our Odoo development pricing starts from PKR 500,000 for basic modules and goes up to PKR 2,50,000+ for complete ERP implementations. We offer flexible payment plans in Pakistani Rupees. Would you like to schedule a consultation?";
    }
    if (lowerMsg.includes("time") || lowerMsg.includes("duration") || lowerMsg.includes("how long")) {
      return "⏰ Timeline depends on project complexity. Simple modules take 2-4 weeks, medium projects 4-8 weeks, and full ERP implementations 8-16 weeks. We'll provide a detailed timeline after analyzing your requirements.";
    }
    if (lowerMsg.includes("module") || lowerMsg.includes("custom") || lowerMsg.includes("development")) {
      return "⚡ We develop custom Odoo modules for any business need - e-commerce, CRM, manufacturing, healthcare, education, and more. Each module is built with best practices and seamlessly integrates with your existing Odoo system.";
    }
    if (lowerMsg.includes("integration") || lowerMsg.includes("api") || lowerMsg.includes("connect")) {
      return "🔌 Yes! We integrate Odoo with third-party services including payment gateways (Stripe, PayPal, JazzCash, EasyPaisa), shipping carriers, accounting software, ERP systems, and custom APIs.";
    }
    if (lowerMsg.includes("migration") || lowerMsg.includes("upgrade") || lowerMsg.includes("version")) {
      return "🔄 We handle Odoo migrations between versions (e.g., Odoo 14 to 16) and data migrations from other systems. Our team ensures zero downtime and complete data integrity during migration.";
    }
    if (lowerMsg.includes("training") || lowerMsg.includes("support") || lowerMsg.includes("maintenance")) {
      return "🎓 We provide comprehensive training for your team and ongoing support & maintenance. Our support includes 24/7 technical assistance, bug fixes, security updates, and performance optimization.";
    }
    if (lowerMsg.includes("demo") || lowerMsg.includes("see it") || lowerMsg.includes("show me")) {
      return "🎥 We'd love to show you a demo! Our team can showcase similar projects we've built and demonstrate how Odoo can transform your business. Just share your contact details and we'll schedule a personalized demo.";
    }
    if (lowerMsg.includes("hosting") || lowerMsg.includes("deploy") || lowerMsg.includes("server")) {
      return "☁️ We offer cloud hosting on AWS, Google Cloud, or Azure. We also support on-premise deployment. Our hosting includes automatic backups, SSL certificates, load balancing, and performance monitoring.";
    }
    if (lowerMsg.includes("mobile") || lowerMsg.includes("app")) {
      return "📱 We develop mobile apps for Odoo using React Native and Flutter. These apps sync with your Odoo backend in real-time and provide offline capabilities for field workers and remote teams.";
    }
    if (lowerMsg.includes("industry") || lowerMsg.includes("specific")) {
      return "🏭 We have industry-specific Odoo solutions for Manufacturing, Healthcare, Education, Real Estate, Retail, Logistics, and many more. Each solution comes with pre-configured modules tailored to industry needs.";
    }
    if (lowerMsg.includes("pakistan") || lowerMsg.includes("local") || lowerMsg.includes("pkr")) {
      return "🇵🇰 We're based in Pakistan and offer competitive rates in PKR. All our solutions are tailored for the local market with support for local payment gateways (JazzCash, EasyPaisa), local tax compliance, and Urdu language support if needed.";
    }
    
    return "🤖 That's an excellent question! Let me connect you with our Odoo expert who can provide detailed, personalized advice. Would you like to schedule a free consultation call?";
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      type: "user",
      text: input,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        type: "bot",
        text: getAIResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-full shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:scale-110 group"
      >
        <FaRobot className="text-2xl" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-[#1a1025] rounded-2xl shadow-2xl shadow-purple-500/20 border border-purple-500/30 flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaRobot className="text-white text-xl" />
                <div>
                  <h3 className="text-white font-semibold text-sm">Odoo AI Assistant</h3>
                  <p className="text-white/70 text-xs">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded-lg transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-[#120b1a]">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.type === "user"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "bg-[#2a1a3a] text-gray-200 border border-purple-500/20"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                    <span className="text-[10px] opacity-50 mt-1 block">
                      {msg.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start mb-3">
                  <div className="bg-[#2a1a3a] p-3 rounded-2xl border border-purple-500/20">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                      <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="p-4 bg-[#1a1025] border-t border-purple-500/20">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Odoo development..."
                  className="flex-1 bg-[#2a1a3a] text-white rounded-xl px-4 py-2 border border-purple-500/30 focus:border-purple-500 focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!input.trim()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  // Convert USD to PKR (approximate conversion)
  const convertToPKR = (usdPrice) => {
    const rate = 280; // 1 USD = 280 PKR
    const amount = parseInt(usdPrice.replace(/[^0-9]/g, ''));
    if (isNaN(amount)) return "PKR 500,000+";
    return `PKR ${(amount * rate).toLocaleString()}+`;
  };

  const getPKRPrice = (priceStr) => {
    if (priceStr.includes('PKR')) return priceStr;
    const match = priceStr.match(/\$([0-9,]+)/);
    if (match) {
      const usd = parseInt(match[1].replace(/,/g, ''));
      return `PKR ${(usd * 280).toLocaleString()}+`;
    }
    return "PKR 500,000+";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-[#120b1a] border border-purple-500/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          <div className="text-4xl">{project.icon}</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.desc}</p>
            
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="flex items-center gap-1 text-sm text-purple-400">
                <FaRupeeSign className="text-xs" />
                {getPKRPrice(project.price)}
              </div>
              <div className="flex items-center gap-1 text-sm text-blue-400">
                <FaClock className="text-xs" />
                {project.timeline}
              </div>
            </div>
          </div>
          <button className="text-purple-400 hover:text-purple-300 transition-colors">
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-purple-500/10"
          >
            <div className="p-6 space-y-4">
              <h4 className="text-sm font-semibold text-purple-400">Key Features</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <FaCheck className="text-purple-500 mt-1 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <button 
                  onClick={() => navigate('/book-consultation')}
                  className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get This Solution
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="flex-1 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main Component
export default function OdooServiceDetail() {
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const foundService = servicesData.find(s => s.id === "odoo-development");
    setService(foundService);
    if (foundService?.projectIdeas) {
      setFilteredProjects(foundService.projectIdeas);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (service?.projectIdeas) {
      let filtered = service.projectIdeas;
      if (searchTerm) {
        filtered = filtered.filter(project =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.desc.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      setFilteredProjects(filtered);
    }
  }, [searchTerm, service]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0713]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-white mt-4">Loading Odoo services...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0713]">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#0b0713] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#3a0057_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </button>

          {/* Service Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-8 border border-purple-500/20 mb-8"
          >
            <div className="flex items-start gap-6 flex-wrap">
              <div className="text-6xl">{service.icon || "⚡"}</div>
              <div className="flex-1">
                <div className="flex items-center gap-4 flex-wrap">
                  <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mt-2 text-lg">{service.shortDesc || service.desc}</p>
                <div className="flex items-center gap-4 mt-4 flex-wrap">
                  <span className="text-sm text-gray-400">Category: {service.category || "ERP"}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-purple-400 flex items-center gap-1">
                    <FaRupeeSign className="text-xs" /> Starting from PKR 500,000
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="bg-[#120b1a] rounded-2xl p-6 text-center border border-purple-500/10">
              <div className="text-3xl font-bold text-purple-400">20+</div>
              <div className="text-gray-400 text-sm">Project Ideas</div>
            </div>
            <div className="bg-[#120b1a] rounded-2xl p-6 text-center border border-purple-500/10">
              <div className="text-3xl font-bold text-blue-400">12</div>
              <div className="text-gray-400 text-sm">Industries</div>
            </div>
            <div className="bg-[#120b1a] rounded-2xl p-6 text-center border border-purple-500/10">
              <div className="text-3xl font-bold text-green-400">50+</div>
              <div className="text-gray-400 text-sm">Modules</div>
            </div>
            <div className="bg-[#120b1a] rounded-2xl p-6 text-center border border-purple-500/10">
              <div className="text-3xl font-bold text-pink-400">100%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </motion.div>

          {/* Features Section */}
          {service.features && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#120b1a] rounded-2xl p-6 border border-purple-500/10 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 text-gray-300">
                    <FaCheck className="text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tech Stack */}
          {service.technologies && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-[#120b1a] rounded-2xl p-6 border border-purple-500/10 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span key={index} className="bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Project Ideas Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-2xl font-bold">Project Ideas & Solutions</h2>
              <div className="flex gap-3 mt-4 md:mt-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-[#120b1a] text-white border border-purple-500/20 rounded-lg px-4 py-2 pl-10 focus:border-purple-500 focus:outline-none w-full md:w-64"
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">No projects found matching your search.</p>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-8 text-center border border-purple-500/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Your Odoo Solution?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom Odoo solution that drives your business growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/book-consultation')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold"
              >
                Start Your Project
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-semibold"
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* AI Chat */}
      <AIChatBot serviceTitle={service.title} />
    </>
  );
}