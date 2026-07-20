import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// WhatsApp number (with country code, no + or spaces) and default greeting
const WHATSAPP_NUMBER = "923170704493";
const WHATSAPP_MESSAGE =
  "Hi CodefinityTech! 👋 I visited your website and I'm interested in your services. Could you please share more details?";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function Footer() {
  return (
    <footer className="w-full py-20 bg-gradient-to-b from-[#0B0713] via-[#0B0713] to-[#120A1E] light:from-white light:via-white light:to-[#f3ebff] text-white light:text-[#1a0f2a] relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute -top-12 left-0 w-full h-20 bg-gradient-to-b from-[#5D00F7]/20 to-transparent rounded-b-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 px-4 py-8 md:px-8 md:py-16">
        {/* Logo + Description */}
        <div className="flex-1">
          <a href="/">
            <div className="flex items-center gap-2 logo-small">
              <img
                src="/images/imgi_1_robx-logo.png"
                alt="ROBX.AI Logo"
                className="w-28 md:w-36"
              />
            </div>
          </a>
          <p className="text-gray-300 text-base md:text-lg mt-4 md:mt-6">
            CodefinityTech is a full-stack technology company delivering
            AI-powered solutions, web & mobile applications, and custom software
            platforms to empower businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-purple-500 font-semibold mb-3 md:mb-4 text-sm md:text-base">
            Quick Links
          </h3>
          <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
            <li>
              <Link to="/" className="hover:text-purple-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-purple-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="hover:text-purple-400 transition"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/book-consultation"
                className="hover:text-purple-400 transition"
              >
                Book Free Consultation
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1">
          <h3 className="text-purple-500 font-semibold mb-3 md:mb-4 text-sm md:text-base">
            Services
          </h3>
          <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
            <li>
              <Link
                to="/services/reactjs-development"
                className="hover:text-purple-400 transition"
              >
                ReactJS Development
              </Link>
            </li>
            <li>
              <Link
                to="/services/nextjs-development"
                className="hover:text-purple-400 transition"
              >
                Next.js Development
              </Link>
            </li>
            <li>
              <Link
                to="/services/frontend-development"
                className="hover:text-purple-400 transition"
              >
                Frontend Development
              </Link>
            </li>
            <li>
              <Link
                to="/services/backend-development"
                className="hover:text-purple-400 transition"
              >
                Backend Development
              </Link>
            </li>
            <li>
              <Link
                to="/services/odoo-development"
                className="hover:text-purple-400 transition"
              >
                Odoo Development ERP System
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div className="flex-1">
          <h3 className="text-purple-500 font-semibold mb-4">Contact</h3>

          <p className="text-gray-300 text-sm mb-2">
            H-3 Block, Office No. 1, Near Jinnah Library, Trust Plaza, Gujranwala
          </p>

          <p className="text-gray-300 text-sm mb-2">
            Email:{" "}
            <a href="mailto:qadeerdeveloper312@gmail.com" className="hover:text-purple-400">
              qadeerdeveloper312@gmail.com
            </a>
          </p>

          <p className="text-gray-300 text-sm mb-4">
            Phone:{" "}
            <a href="tel:+923170704493" className="hover:text-purple-400">
              +92 317 0704493
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg">

            <a
              href="https://www.facebook.com/share/19HTAjwpuC/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#1877F2] hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/mehar_abdulqadeer_11"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#E4405F] hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-qadeer-62518a214"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#0A66C2] hover:scale-110"
            >
              <FaLinkedinIn />
            </a>

           

          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-white/20 mt-8 md:mt-10 py-4 px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-3 text-gray-400 text-xs md:text-sm">
        {/* WhatsApp icon - left side */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex items-center gap-2 text-white light:text-[#1a0f2a] hover:opacity-90 transition"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#dc00f9] to-[#a234fd] flex items-center justify-center shadow-md">
            <FaWhatsapp className="text-white text-base" />
          </span>
          <span className="hidden sm:inline">+92 317 0704493</span>
        </a>

        <p className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
          <span>&copy; {new Date().getFullYear()} CodefinityTech. All rights reserved.</span>
          <span className="flex items-center gap-3">
            <Link to="/privacy-policy" className="hover:text-purple-400 transition">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms-and-conditions" className="hover:text-purple-400 transition">
              Terms & Conditions
            </Link>
          </span>
        </p>
      </div>

      {/* Floating WhatsApp button - visible on every page, bottom-left */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 left-5 z-[999] w-14 h-14 rounded-full bg-gradient-to-r from-[#dc00f9] to-[#a234fd] shadow-lg flex items-center justify-center hover:scale-105 transition"
      >
        <FaWhatsapp size={26} className="text-white" />
      </a>
    </footer>
  );
}
