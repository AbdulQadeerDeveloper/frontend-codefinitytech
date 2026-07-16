import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

// Simple keyword -> auto-reply rules. Edit / extend freely.
const AUTO_REPLIES = [
  {
    keywords: ["price", "pricing", "cost", "quote", "budget"],
    reply:
      "Our pricing depends on project scope. You can check plans on our Pricing page, or book a free consultation and we'll share a custom quote.",
  },
  {
    keywords: ["consult", "meeting", "book", "appointment", "schedule", "call", "meet"],
    reply:
      "You can book a free consultation instantly — visit the \"Book Consultation\" page, pick a date & time, and you'll get an instant Google Meet link.",
  },
  {
    keywords: ["service", "services", "offer", "development", "react", "next", "app", "website"],
    reply:
      "We offer ReactJS, Next.js, full-stack, and UI development services (MUI, Tailwind, Chakra & more). Check our Services page for full details.",
  },
  {
    keywords: ["contact", "email", "phone", "reach", "number"],
    reply:
      "You can reach us anytime at contact@codefinitytech.com, or use the Contact page form and our team will get back within a few hours.",
  },
  {
    keywords: ["time", "hours", "open", "working"],
    reply: "Our team typically responds Mon–Sat, 9 AM – 6 PM. Outside those hours you'll still get a reply here, just a little slower.",
  },
  {
    keywords: ["portfolio", "project", "work", "example"],
    reply: "You can see our past work on the Projects page — a mix of web apps, dashboards, and full-stack platforms.",
  },
  {
    keywords: ["hi", "hello", "hey", "salam", "assalam"],
    reply: "Hey there! 👋 How can I help you today?",
  },
  {
    keywords: ["thanks", "thank you", "shukriya"],
    reply: "You're welcome! Let us know if there's anything else you need.",
  },
];

// Quick-reply suggestion chips shown under the first bot message
const QUICK_REPLIES = ["Pricing", "Book a consultation", "Our services", "Contact info"];

const DEFAULT_REPLY =
  "Thanks for reaching out! One of our team members will reply shortly. Meanwhile, feel free to browse our Services or book a free consultation.";

function getAutoReply(message) {
  const lower = message.toLowerCase();
  for (const rule of AUTO_REPLIES) {
    if (rule.keywords.some((k) => lower.includes(k))) {
      return rule.reply;
    }
  }
  return DEFAULT_REPLY;
}

export default function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! 👋 Welcome to CodefinityTech. Ask me about our services, pricing, or book a free consultation.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const pushUserMessage = (text) => {
    if (!text) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setTyping(true);

    // Simulate instant automatic reply
    setTimeout(() => {
      const reply = getAutoReply(text);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      setTyping(false);
    }, 700);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    pushUserMessage(text);
    setInput("");
  };

  const sendQuickReply = (text) => pushUserMessage(text);

  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col items-end">
      {/* Chat Panel */}
      {open && (
        <div className="mb-4 w-[90vw] max-w-[340px] h-[440px] bg-[#1d0f2a] light:bg-white border border-[#dc00f9]/30 light:border-[#dc00f9]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#dc00f9] to-[#a234fd] px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm">CodefinityTech Support</p>
              <p className="text-white/80 text-[11px] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                Online — replies instantly
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-white"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-[#0d0615] light:bg-[#f7f2ff]"
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
                      : "bg-[#2b1a3b] light:bg-white text-gray-100 light:text-[#1a0f2a] rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Quick replies (only while conversation just started) */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendQuickReply(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#dc00f9]/40 hover:bg-[#dc00f9]/10 transition light:text-[#1a0f2a]"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-[#2b1a3b] light:bg-white light:text-[#1a0f2a] text-gray-300 px-3 py-2 rounded-xl rounded-bl-sm text-sm">
                  typing...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="flex items-center gap-2 border-t border-[#dc00f9]/20 p-2 bg-[#1d0f2a] light:bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-[#2b1a3b] light:bg-[#f3ebff] text-white light:text-[#1a0f2a] text-sm px-3 py-2 rounded-lg outline-none focus:border-[#dc00f9] border border-transparent"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#dc00f9] to-[#a234fd] p-2.5 rounded-lg hover:opacity-90 transition"
              aria-label="Send message"
            >
              <Send size={16} className="text-white" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Icon */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#dc00f9] to-[#a234fd] shadow-lg flex items-center justify-center hover:scale-105 transition"
        aria-label="Toggle live chat"
      >
        {open ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>
    </div>
  );
}
