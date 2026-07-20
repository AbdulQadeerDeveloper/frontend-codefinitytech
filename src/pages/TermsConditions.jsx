import React from "react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using the CodefinityTech website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of our website and services.`,
  },
  {
    title: "2. Services",
    body: `CodefinityTech provides web & mobile application development, AI-powered solutions, and custom software platforms. The specific scope, deliverables, timeline, and cost of any project will be agreed upon separately in a project proposal or contract.`,
  },
  {
    title: "3. Use of Website",
    body: `You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this site by, any third party. Unauthorized use of this website may give rise to a claim for damages.`,
  },
  {
    title: "4. Intellectual Property",
    body: `All content on this website, including text, graphics, logos, images, and code, is the property of CodefinityTech unless otherwise stated, and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written consent.`,
  },
  {
    title: "5. Project Deliverables & Ownership",
    body: `Unless otherwise agreed in writing, ownership of final project deliverables transfers to the client upon full payment. CodefinityTech retains the right to showcase completed work in its portfolio unless the client requests confidentiality in writing.`,
  },
  {
    title: "6. Payments",
    body: `Project fees, payment schedules, and milestones will be outlined in the project agreement. Late payments may result in a pause of ongoing work until outstanding invoices are settled.`,
  },
  {
    title: "7. Limitation of Liability",
    body: `CodefinityTech shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services, including but not limited to loss of data, revenue, or business opportunities.`,
  },
  {
    title: "8. Third-Party Tools & Links",
    body: `Our services may integrate or link to third-party tools, platforms, or websites. We are not responsible for the availability, content, or practices of these third parties.`,
  },
  {
    title: "9. Termination",
    body: `We reserve the right to suspend or terminate access to our website or services at our discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business.`,
  },
  {
    title: "10. Governing Law",
    body: `These Terms & Conditions shall be governed by and construed in accordance with the applicable laws of Pakistan, without regard to its conflict of law provisions.`,
  },
  {
    title: "11. Changes to Terms",
    body: `We may revise these Terms & Conditions at any time. Updated terms will be posted on this page with a revised "last updated" date. Continued use of our website after changes constitutes acceptance of the new terms.`,
  },
  {
    title: "12. Contact Us",
    body: `If you have any questions about these Terms & Conditions, please contact us at qadeerdeveloper312@gmail.com or +92 317 0704493.`,
  },
];

export default function TermsConditions() {
  return (
    <div className="bg-[#0d0615] text-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 px-6 md:px-16 bg-gradient-to-r from-[#0B0713] via-[#1A0F2F] to-[#2C0F63] text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Terms & <span className="text-[#dc00f9]">Conditions</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Please read these terms carefully before using CodefinityTech's
          website and services.
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
