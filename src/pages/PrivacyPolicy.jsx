import React from "react";

const sections = [
  {
    title: "1. Introduction",
    body: `CodefinityTech ("we", "us", "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`,
  },
  {
    title: "2. Information We Collect",
    body: `We may collect personal information such as your name, email address, phone number, and company details when you fill out a contact form, book a consultation, or subscribe to our updates. We may also automatically collect technical information such as your IP address, browser type, device information, and pages visited through cookies and analytics tools.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the information we collect to respond to your inquiries, provide and improve our services, send project updates or marketing communications (with your consent), process consultation bookings, and analyze website usage to enhance user experience.`,
  },
  {
    title: "4. Cookies & Tracking Technologies",
    body: `Our website may use cookies and similar tracking technologies to remember your preferences (such as light/dark theme) and understand how visitors interact with our site. You can control or disable cookies through your browser settings at any time.`,
  },
  {
    title: "5. Sharing of Information",
    body: `We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.`,
  },
  {
    title: "6. Data Security",
    body: `We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: "7. Third-Party Links",
    body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites and encourage you to review their privacy policies.`,
  },
  {
    title: "8. Children's Privacy",
    body: `Our services are not directed to individuals under the age of 13, and we do not knowingly collect personal information from children.`,
  },
  {
    title: "9. Your Rights",
    body: `Depending on your location, you may have the right to access, correct, update, or request deletion of your personal information. To exercise these rights, please contact us using the details below.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "last updated" date. We encourage you to review this policy periodically.`,
  },
  {
    title: "11. Contact Us",
    body: `If you have any questions about this Privacy Policy or how we handle your data, please contact us at qadeerdeveloper312@gmail.com or +92 317 0704493.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0d0615] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 px-6 md:px-16 bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63] text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Privacy <span className="text-[#dc00f9]">Policy</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Your trust matters to us. Here's how CodefinityTech collects, uses,
          and protects your information.
        </p>
        <p className="mt-2 text-sm text-gray-400">Last updated: July 13, 2026</p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        {sections.map((sec) => (
          <div
            key={sec.title}
            className="bg-[#1d0f2a] border border-[#dc00f9]/20 rounded-xl p-6 md:p-8"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#dc00f9] mb-3">
              {sec.title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {sec.body}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
