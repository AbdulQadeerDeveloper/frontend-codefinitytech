// src/components/LiveChatWidget.jsx
import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

// Enhanced keyword -> auto-reply rules with more specific responses
const AUTO_REPLIES = [
  // Pricing related
  {
    keywords: ["price", "pricing", "cost", "quote", "budget", "rate", "charges", "fee", "amount"],
    reply: "💰 Our pricing depends on project scope. We offer competitive rates in Pakistani Rupees (PKR). Basic projects start from PKR 100,000, while complex enterprise solutions can go up to PKR 2,500,000+. Check our Pricing page for details, or book a free consultation for a custom quote tailored to your needs."
  },
  {
    keywords: ["pkr", "rupee", "pakistani", "pakistan price", "local"],
    reply: "🇵🇰 Yes! We offer our services in Pakistani Rupees (PKR). We provide competitive local rates and accept payments via bank transfer, JazzCash, and EasyPaisa. Contact us for a detailed quote in PKR based on your specific requirements."
  },
  
  // Consultation related
  {
    keywords: ["consult", "meeting", "book", "appointment", "schedule", "call", "meet", "discuss"],
    reply: "📅 You can book a free consultation instantly by visiting our 'Book Consultation' page. Pick a date & time that works for you, and you'll receive a Google Meet link. Our experts are ready to discuss your project!"
  },
  
  // Services related
  {
    keywords: ["service", "services", "offer", "development", "react", "next", "app", "website", "web"],
    reply: "🚀 We offer a wide range of services including ReactJS, Next.js, Full-Stack Development, UI/UX Design, and Odoo ERP solutions. Visit our Services page for complete details and see how we can help your business grow."
  },
  {
    keywords: ["odoo", "erp", "module", "implementation"],
    reply: "⚡ We specialize in Odoo Development & Implementation. We build custom modules, handle migrations, and provide complete ERP solutions. Starting from PKR 500,000 for basic implementations. Book a consultation to discuss your specific needs!"
  },
  
  // Contact related
  {
    keywords: ["contact", "email", "phone", "reach", "number", "whatsapp"],
    reply: "📱 You can reach us anytime at contact@codefinitytech.com. Call us at +92-XXX-XXXXXXX, or use our Contact page form. We also have WhatsApp support for quick queries. Our team typically responds within a few hours."
  },
  
  // Working hours
  {
    keywords: ["time", "hours", "open", "working", "business"],
    reply: "🕐 Our team is available Mon–Sat, 9 AM – 6 PM (PKT). For urgent queries, you can still message us here and we'll get back to you as soon as possible. We're committed to providing timely support!"
  },
  
  // Portfolio/Projects
  {
    keywords: ["portfolio", "project", "work", "example", "sample", "past"],
    reply: "🎯 You can see our past work and success stories on the Projects page. We've built web apps, dashboards, e-commerce platforms, and ERP solutions for clients across various industries in Pakistan and globally."
  },
  
  // Greetings
  {
    keywords: ["hi", "hello", "hey", "salam", "assalam", "assalam-o-alaikum", "good morning", "good evening"],
    reply: "👋 Assalam-o-Alaikum! Welcome to CodefinityTech. How can we assist you today? We offer web development, Odoo solutions, and digital services."
  },
  
  // Thanks
  {
    keywords: ["thanks", "thank you", "shukriya", "jazakallah"],
    reply: "✨ You're welcome! We're always here to help. If you have any more questions, feel free to ask. May we assist you with anything else?"
  },
  
  // Technology specific
  {
    keywords: ["react", "next.js", "javascript", "node.js", "python", "tailwind"],
    reply: "💻 We're experts in modern technologies! We work with React.js, Next.js, Node.js, Python, Odoo, Tailwind CSS, and many more. Our team stays up-to-date with the latest tech trends to deliver cutting-edge solutions."
  },
  
  // Payment methods
  {
    keywords: ["payment", "pay", "jazzcash", "easypaisa", "bank transfer", "mode"],
    reply: "💳 We accept payments through multiple channels including Bank Transfer, JazzCash, EasyPaisa, and international payment gateways. We can provide flexible payment plans based on your project requirements."
  },
  
  // Location
  {
    keywords: ["location", "based", "office", "city", "lahore", "karachi", "islamabad"],
    reply: "🏢 We're based in Pakistan and serve clients globally. We have team members across major cities including Lahore, Karachi, and Islamabad. We primarily work remotely but can arrange in-person meetings when needed."
  },
  
  // Support
  {
    keywords: ["support", "help", "issue", "problem", "maintenance", "fix"],
    reply: "🛠️ We provide comprehensive support and maintenance services for all our projects. Our support includes bug fixes, security updates, performance optimization, and 24/7 emergency assistance. Contact us for details!"
  },
  
  // Timeline
  {
    keywords: ["timeline", "deadline", "delivery", "when", "duration", "complete"],
    reply: "⏰ Project timelines vary based on complexity. Simple websites take 2-4 weeks, web applications 4-8 weeks, and complex ERP systems 8-16 weeks. We provide detailed timelines during consultation and ensure on-time delivery."
  },
  
  // Industries
  {
    keywords: ["industry", "healthcare", "education", "ecommerce", "real estate", "manufacturing", "retail"],
    reply: "🏭 We serve diverse industries including Healthcare, Education, E-commerce, Real Estate, Manufacturing, Retail, and Logistics. Each solution is tailored to specific industry requirements and local market needs."
  },
];

// Quick-reply suggestion chips
const QUICK_REPLIES = [
  "Pricing in PKR",
  "Book consultation",
  "Our services",
  "Odoo Development",
  "Contact info",
  "Support"
];

const DEFAULT_REPLY = "🤔 Thanks for reaching out! We're here to help. Our team will review your question and get back to you shortly. Meanwhile, feel free to browse our services or book a free consultation. Is there anything specific you'd like to know more about?";

// Enhanced function to get auto-reply with better matching
function getAutoReply(message) {
  const lower = message.toLowerCase().trim();
  
  // Check for exact matches first
  for (const rule of AUTO_REPLIES) {
    // Check if any keyword matches
    if (rule.keywords.some(k => lower.includes(k.toLowerCase()))) {
      return rule.reply;
    }
  }
  
  // If message contains multiple words, check for partial matches
  const words = lower.split(' ');
  for (const rule of AUTO_REPLIES) {
    for (const word of words) {
      if (word.length > 3 && rule.keywords.some(k => word.includes(k) || k.includes(word))) {
        return rule.reply;
      }
    }
  }
  
  return DEFAULT_REPLY;
}

export default function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Assalam-o-Alaikum! Welcome to CodefinityTech. I'm here to help you with our services, pricing in PKR, or anything else you'd like to know. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const pushUserMessage = (text) => {
    if (!text) return;
    const newMessage = { from: "user", text };
    setMessages((prev) => [...prev, newMessage]);
    setConversationHistory((prev) => [...prev, { role: "user", content: text }]);
    setTyping(true);

    // Get auto-reply based on message
    setTimeout(() => {
      const reply = getAutoReply(text);
      const botMessage = { from: "bot", text: reply };
      setMessages((prev) => [...prev, botMessage]);
      setConversationHistory((prev) => [...prev, { role: "bot", content: reply }]);
      setTyping(false);
    }, 600 + Math.random() * 400); // Random delay between 600-1000ms to feel natural
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    pushUserMessage(text);
    setInput("");
  };

  const sendQuickReply = (text) => {
    pushUserMessage(text);
  };

  // Check if quick replies should be shown (only at start of conversation)
  const shouldShowQuickReplies = messages.length === 1;

  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col items-end">
      {/* Chat Panel */}
      {open && (
        <div className="mb-4 w-[90vw] max-w-[400px] h-[500px] bg-[#1d0f2a] dark:bg-[#1d0f2a] light:bg-white border border-[#dc00f9]/30 dark:border-[#dc00f9]/30 light:border-[#dc00f9]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#dc00f9] to-[#a234fd] px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm">CodefinityTech Support</p>
              <p className="text-white/80 text-[11px] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse"></span>
                Online — replies instantly
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-[#0d0615] dark:bg-[#0d0615] light:bg-[#f7f2ff]"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-snug ${
                    m.from === "user"
                      ? "bg-gradient-to-r from-[#dc00f9] to-[#a234fd] text-white rounded-br-sm"
                      : "bg-[#2b1a3b] dark:bg-[#2b1a3b] light:bg-white text-gray-100 dark:text-gray-100 light:text-[#1a0f2a] rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Quick replies */}
            {shouldShowQuickReplies && (
              <div className="flex flex-wrap gap-2 pt-2">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendQuickReply(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#dc00f9]/40 hover:bg-[#dc00f9]/10 transition-colors text-gray-200 dark:text-gray-200 light:text-[#1a0f2a] hover:text-white"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-[#2b1a3b] dark:bg-[#2b1a3b] light:bg-gray-200 text-gray-300 dark:text-gray-300 light:text-[#1a0f2a] px-3 py-2 rounded-xl rounded-bl-sm text-sm">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="flex items-center gap-2 border-t border-[#dc00f9]/20 p-3 bg-[#1d0f2a] dark:bg-[#1d0f2a] light:bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-[#2b1a3b] dark:bg-[#2b1a3b] light:bg-[#f3ebff] text-white dark:text-white light:text-[#1a0f2a] text-sm px-3 py-2 rounded-lg outline-none focus:border-[#dc00f9] border border-transparent focus:border focus:border-[#dc00f9] transition-colors"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#dc00f9] to-[#a234fd] p-2.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              aria-label="Send message"
              disabled={!input.trim()}
            >
              <Send size={16} className="text-white" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Icon */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#dc00f9] to-[#a234fd] shadow-2xl flex items-center justify-center hover:scale-105 transition-transform relative"
        aria-label="Toggle live chat"
      >
        {open ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#1d0f2a] animate-pulse"></span>
        )}
      </button>
    </div>
  );
}