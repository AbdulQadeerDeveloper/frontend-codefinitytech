import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import api from "../api/client";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });
    try {
      await api.post("/contact", form);
      setStatus({ loading: false, success: "Message sent! We'll get back to you soon.", error: "" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        loading: false,
        success: "",
        error: err?.response?.data?.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="bg-[#0d0615] text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-6 py-20 gap-10">
        {/* LEFT TEXT */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
            Stay <span className="text-[#dc00f9]">Connected</span> With
            CodefinityTech
          </h1>

          <p className="mt-5 mb-5 text-gray-300">
            Have questions or project ideas? Our team of full-stack developers,
            AI specialists, and designers is ready to help you transform your
            vision into reality.
          </p>

          <a
            href="/services"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#b721ff] to-[#21d4fd] rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition"
          >
            Explore Our Services
          </a>
        </div>

        {/* RIGHT IMAGE / SVG */}
        <div className="w-full max-w-md mx-auto">
          <img
            src="/images/imgi_2_ContactHero-2.webp"
            alt="Contact"
            className="w-full animate-fade-in"
          />
        </div>
        {/* Bottom Curved Bars */}
        <div className="absolute bottom-[40px] left-0 w-full flex flex-col items-center">
          <div className="w-[90%] self-center bg-[#A234FD] rounded-t-full h-10 absolute -bottom-10 rotate-180 opacity-25"></div>
          <div className="w-[80%] self-center bg-[#5D00F7] rounded-t-full h-14 absolute -bottom-14 rotate-180 opacity-25"></div>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-40">
        {/* Address */}
        <div className="bg-[#1d0f2a] border border-[#dc00f9]/30 rounded-xl p-8 text-center shadow-lg">
          <div className="flex justify-center mb-4">
            <FaMapMarkerAlt size={28} className="text-[#dc00f9]" />
          </div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="mt-2 text-sm text-gray-300">
            H-3 Block, Office No. 1, Near Jinnah Library, Trust Plaza, Gujranwala
          </p>
        </div>

        {/* Email */}
        <div className="bg-[#1d0f2a] border border-[#dc00f9]/30 rounded-xl p-8 text-center shadow-lg">
          <div className="flex justify-center mb-4">
            <FaEnvelope size={28} className="text-[#dc00f9]" />
          </div>
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="mt-2 text-sm text-gray-300">
            contact@codefinitytech.com
          </p>
        </div>

        {/* Phone & Socials */}
        <div className="bg-[#1d0f2a] border border-[#dc00f9]/30 rounded-xl p-8 text-center shadow-lg">
          <div className="flex justify-center mb-4">
            <FaPhoneAlt size={28} className="text-[#dc00f9]" />
          </div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center gap-2 mt-2">
            <a href="#" className="text-[#dc00f9] hover:text-white transition">
              linkedin/codefinitytech
            </a>
            <a href="#" className="text-[#dc00f9] hover:text-white transition">
              instagram/codefinitytech
            </a>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTACT FORM ================= */}
      <section className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 pb-24">
        {/* LEFT SIDE TEXT */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#dc00f9]">
            Contact CodefinityTech
          </h2>
          <p className="mt-5 text-gray-300 max-w-md">
            Our team is dedicated to delivering innovative solutions for your
            business. Let’s discuss your next project and build something
            extraordinary together.
          </p>

          <div className="flex gap-4 mt-6">
            <a className="border border-gray-600 p-2 rounded-full hover:text-[#dc00f9] hover:border-[#dc00f9] transition">
              <FaFacebookF size={15} />
            </a>
            <a className="border border-gray-600 p-2 rounded-full hover:text-[#dc00f9] hover:border-[#dc00f9] transition">
              <FaTwitter size={15} />
            </a>
            <a className="border border-gray-600 p-2 rounded-full hover:text-[#dc00f9] hover:border-[#dc00f9] transition">
              <FaInstagram size={15} />
            </a>
            <a className="border border-gray-600 p-2 rounded-full hover:text-[#dc00f9] hover:border-[#dc00f9] transition">
              <FaLinkedinIn size={15} />
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form onSubmit={handleSubmit} className="bg-transparent border border-gray-600 rounded-xl p-8 space-y-6">
          {status.success && (
            <div className="bg-green-500/20 text-green-300 text-sm rounded-lg px-4 py-2">{status.success}</div>
          )}
          {status.error && (
            <div className="bg-red-500/20 text-red-300 text-sm rounded-lg px-4 py-2">{status.error}</div>
          )}

          <div>
            <label className="text-sm text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="mt-2 w-full bg-[#2b1a3b] text-white px-4 py-3 rounded-lg outline-none focus:border-[#dc00f9] border border-transparent"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="mt-2 w-full bg-[#2b1a3b] text-white px-4 py-3 rounded-lg outline-none focus:border-[#dc00f9] border border-transparent"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your Message..."
              className="mt-2 w-full bg-[#2b1a3b] text-white px-4 py-3 rounded-lg outline-none focus:border-[#dc00f9] border border-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-gradient-to-r from-[#dc00f9] to-[#a234fd] py-3 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50"
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </div>
  );
}
