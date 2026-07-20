import React from "react";
import { Award, Globe2, CheckCircle } from "lucide-react";

export default function StatsBar() {
  return (
    <section className="w-full px-26 bg-[#0c001a] py-16">
      <div className="bg-gradient-to-r from-[#3d0072] via-[#22003d] to-[#7a00b4] rounded-2xl py-10 px-6 md:px-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
        {/* Stat 1: Projects Completed */}
        <StatBox
          number="200+"
          label="Projects Completed"
          icon={<CheckCircle className="w-8 h-8 text-[#d946ef]" />}
        />

        {/* Divider */}
        <div className="hidden md:block h-16 w-[1px] bg-white/20"></div>

        {/* Stat 2: Global Clients */}
        <StatBox
          number="50+"
          label="Global Clients"
          icon={<Globe2 className="w-8 h-8 text-[#d946ef]" />}
        />

        {/* Divider */}
        <div className="hidden md:block h-16 w-[1px] bg-white/20"></div>

        {/* Stat 3: Awards */}
        <StatBox
          number="08"
          label="Awards Won"
          icon={<Award className="w-8 h-8 text-[#d946ef]" />}
        />
      </div>
    </section>
  );
}

const StatBox = ({ number, label, icon }) => (
  <div className="flex items-center gap-4">
    <div className="p-2 bg-[#d946ef]/30 rounded-md">{icon}</div>
    <div>
      <h3 className="text-4xl font-bold text-white">{number}</h3>
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  </div>
);
