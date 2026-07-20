import React, { useState } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const servicesData = [
  {
    id: "reactjs-development",
    title: "ReactJS Development",
    desc: "Fast, scalable, and interactive ReactJS applications with modern UI design.",
  },
  {
    id: "nextjs-development",
    title: "Next.js Development",
    desc: "Server-side rendering and SEO-optimized web apps.",
  },
  {
    id: "web-application",
    title: "Web Application Development",
    desc: "Secure, high-performance custom web applications.",
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive, and engaging UI using React and Tailwind CSS.",
  },
  {
    id: "backend-development",
    title: "Backend Development",
    desc: "Efficient backend systems using Node.js, Express, MongoDB, and SQL.",
  },
  {
    id: "fullstack-development",
    title: "Full Stack Development",
    desc: "End-to-end full-stack solutions integrating frontend & backend seamlessly.",
  },
  {
    id: "chakra-ui",
    title: "Chakra UI",
    desc: "Design responsive, accessible, and reusable components quickly with Chakra UI for React projects.",
  },
  {
    id: "mui",
    title: "Material-UI (MUI)",
    desc: "Create beautiful, fully responsive, and customizable React components with Material-UI (MUI).",
  },
  {
    id: "tailwind-ui",
    title: "Tailwind UI",
    desc: "Rapidly build modern, fully responsive UIs with Tailwind UI components and Tailwind CSS.",
  },
  {
    id: "react-bootstrap",
    title: "React Bootstrap",
    desc: "Build responsive, mobile-first projects on React using React Bootstrap components.",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0B0713]/90 dark:bg-[#0B0713]/90 light:bg-white/90 backdrop-blur-lg border-b border-[#A234FD]/20 light:border-[#A234FD]/20 light:text-[#1a0f2a]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <a href="/">
          <div className="flex items-center gap-2 logo-small">
            <img src="/images/imgi_1_robx-logo.png" alt="CodefinityTech Logo" />
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white light:text-[#1a0f2a] font-medium relative">
          <a href="/" className="hover:text-[#A234FD] transition">
            Home
          </a>
          <a href="/about" className="hover:text-[#A234FD] transition">
            About Us
          </a>

          {/* Mega Menu */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#A234FD] transition text-sm font-medium">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute left-0 top-full mt-2 w-[600px] bg-[#120A1E] text-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4 grid grid-cols-2 gap-4 z-50">
              {servicesData.map((service) => (
                <a
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="block text-sm py-1 px-2 hover:bg-[#A234FD]/20 rounded transition"
                >
                  <span className="font-semibold">{service.title}</span>
                  <p className="text-xs text-gray-300 mt-1">{service.desc}</p>
                </a>
              ))}
            </div>
          </div>

          <a href="/pricing" className="hover:text-[#A234FD] transition">
            Pricing
          </a>
          <a href="/contact" className="hover:text-[#A234FD] transition">
            Contact
          </a>
          <a href="/book-consultation">
            <button className="bg-[#A234FD] hover:bg-[#8E22E4] text-white font-semibold px-5 py-2 rounded-full transition">
              Get Free Consultation
            </button>
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark / light mode"
            className="p-2 rounded-full border border-[#A234FD]/40 hover:bg-[#A234FD]/20 transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile: theme toggle + menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark / light mode"
            className="p-2 rounded-full border border-[#A234FD]/40"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#120A1E] text-white border-t border-[#A234FD]/20 px-6 py-4">
          <a href="/" className="block py-2 hover:text-[#A234FD] transition">
            Home
          </a>
          <a
            href="/about"
            className="block py-2 hover:text-[#A234FD] transition"
          >
            About Us
          </a>

          <details className="py-2">
            <summary className="cursor-pointer hover:text-[#A234FD] flex items-center justify-between">
              Services <ChevronDown className="w-4 h-4" />
            </summary>
            <div className="pl-4 mt-2 space-y-1 text-sm">
              {servicesData.map((service) => (
                <a
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="block py-1 hover:text-[#A234FD]"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </details>

          <a
            href="/pricing"
            className="block py-2 hover:text-[#A234FD] transition"
          >
            Pricing
          </a>
          <a
            href="/contact"
            className="block py-2 hover:text-[#A234FD] transition"
          >
            Contact
          </a>

          <a href="/book-consultation">
            <button className="w-full mt-4 bg-[#A234FD] hover:bg-[#8E22E4] text-white font-semibold px-5 py-2 rounded-full transition">
              Get Free Consultation
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
