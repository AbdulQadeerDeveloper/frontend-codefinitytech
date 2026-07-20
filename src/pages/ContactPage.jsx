import React, { useState, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const formRef = useRef(null);

  // Location data from Footer
  const contactInfo = {
    address: "H-3 Block, Office No. 1, Near Jinnah Library, Trust Plaza, Gujranwala",
    email: "qadeerdeveloper312@gmail.com",
    phone: "+92 317 0704493",
    whatsapp: "923170704493",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
  };

  // Google Maps Embed URL (Free - No API Key Required)
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27184.113599999998!2d74.1839!3d32.1628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f0e8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sGujranwala%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890";

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/share/19HTAjwpuC/",
      color: "hover:text-[#1877F2]",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/mehar_abdulqadeer_11",
      color: "hover:text-[#E4405F]",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/muhammad-qadeer-62518a214",
      color: "hover:text-[#0A66C2]",
      label: "LinkedIn",
    },
    {
      icon: <FaWhatsapp />,
      url: `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
        "Hi CodefinityTech! 👋 I visited your website and I'm interested in your services. Could you please share more details?"
      )}`,
      color: "hover:text-[#25D366]",
      label: "WhatsApp",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));

    if (status.error || status.success) {
      setStatus({ loading: false, success: "", error: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("📝 Sending data:", form);

    setStatus({ loading: true, success: "", error: "" });

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);

      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      console.log("✅ Sent");

      setStatus({
        loading: false,
        success: "✅ Message sent successfully!",
        error: "",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Error:", error);

      setStatus({
        loading: false,
        success: "",
        error: "❌ Failed to send message",
      });
    }
  };

  return (
    <div className="bg-[#0d0615] text-white min-h-screen pt-15">
      {/* HERO SECTION */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-6 py-16 md:py-20 gap-8 md:gap-10">
        <div className="max-w-lg text-center md:text-left">
          <div className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full border border-purple-500/30">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Stay <span className="text-[#dc00f9]">Connected</span> With{" "}
            <span className="bg-gradient-to-r from-[#dc00f9] to-[#a234fd] bg-clip-text text-transparent">
              CodefinityTech
            </span>
          </h1>
          <p className="mt-5 text-gray-300 text-lg">
            Have questions or project ideas? Let's build something amazing
            together.
          </p>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-[#1a0f2a] p-4 rounded-xl border border-purple-500/20">
              <div className="text-[#dc00f9] text-2xl mb-1">⭐</div>
              <div className="text-sm font-semibold">200+ Projects</div>
              <div className="text-xs text-gray-400">Delivered</div>
            </div>
            <div className="bg-[#1a0f2a] p-4 rounded-xl border border-purple-500/20">
              <div className="text-[#dc00f9] text-2xl mb-1">😊</div>
              <div className="text-sm font-semibold">100%</div>
              <div className="text-xs text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto animate-float">
          <img
            src="/images/imgi_2_ContactHero-2.webp"
            alt="Contact CodefinityTech"
            className="w-full"
          />
        </div>
      </section>

      {/* MAIN CONTENT - FORM + INFO */}
      <section className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 px-6 pb-12 pt-10">
        {/* LEFT - Contact Info Cards */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-br from-[#1a0f2a] to-[#0d0615] p-6 rounded-2xl border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-6 text-[#dc00f9]">
              Get in Touch
            </h2>
            <p className="text-gray-300 mb-6">
              We'd love to hear from you! Reach out to us through any of the
              following channels.
            </p>

            {/* Address */}
            <div className="flex items-start gap-4 mb-4 p-3 rounded-xl bg-[#0d0615] border border-purple-500/10">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-[#dc00f9] flex-shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-400">Address</h4>
                <p className="text-sm">{contactInfo.address}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-4 p-3 rounded-xl bg-[#0d0615] border border-purple-500/10">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-[#dc00f9] flex-shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-400">Email</h4>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm hover:text-[#dc00f9] transition"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-4 p-3 rounded-xl bg-[#0d0615] border border-purple-500/10">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-[#dc00f9] flex-shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-400">Phone</h4>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm hover:text-[#dc00f9] transition"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4 p-3 rounded-xl bg-[#0d0615] border border-purple-500/10">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-[#dc00f9] flex-shrink-0">
                <FaClock />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-400">
                  Working Hours
                </h4>
                <p className="text-sm">{contactInfo.hours}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gradient-to-br from-[#1a0f2a] to-[#0d0615] p-6 rounded-2xl border border-purple-500/20">
            <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-12 h-12 rounded-full bg-[#0d0615] border border-purple-500/20 flex items-center justify-center text-xl transition-all duration-300 ${social.color} hover:scale-110 hover:border-purple-500/50`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT - Form */}
        <div className="lg:col-span-3">
          <div className="bg-gradient-to-br from-[#1a0f2a] to-[#0d0615] rounded-2xl border border-purple-500/20 p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#dc00f9]">
                Send Us a Message
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Fill in the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {status.success && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-sm">
                  {status.success}
                </div>
              )}

              {status.error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                  {status.error}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#0d0615] px-4 py-3 rounded-xl border border-purple-500/20 focus:border-[#dc00f9] focus:outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#0d0615] px-4 py-3 rounded-xl border border-purple-500/20 focus:border-[#dc00f9] focus:outline-none transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                  className="w-full bg-[#0d0615] px-4 py-3 rounded-xl border border-purple-500/20 focus:border-[#dc00f9] focus:outline-none transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#0d0615] px-4 py-3 rounded-xl border border-purple-500/20 focus:border-[#dc00f9] focus:outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-gradient-to-r from-[#dc00f9] to-[#a234fd] py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                We respect your privacy. Your information will not be shared.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* MAP SECTION - Free Google Maps Embed with 40px spacing */}
      <div className="max-w-[1200px] mx-auto px-6">
        {/* 40px top spacing from the section above */}
        <div className="pt-10">
          <div className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27184.113599999998!2d74.1839!3d32.1628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f0e8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sGujranwala%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CodefinityTech Location Map"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Extra bottom padding */}
      <div className="pb-16"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}