import React from "react";
import { Award, Globe2, CheckCircle } from "lucide-react";

export default function StatsBar() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-26 bg-[#0c001a] py-10 sm:py-12 md:py-16">
      <div className="bg-gradient-to-r from-[#3d0072] via-[#22003d] to-[#7a00b4] rounded-2xl py-8 px-4 sm:py-10 sm:px-6 md:px-10 lg:px-14 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-0">
        {/* Stat 1: Projects Completed */}
        <StatBox
          number="200+"
          label="Projects Completed"
          icon={<CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#d946ef]" />}
        />

        {/* Divider - Hidden on small screens, visible on medium and up */}
        <div className="hidden md:block h-12 sm:h-14 md:h-16 w-[1px] bg-white/20"></div>

        {/* Mobile Divider - Visible only on small screens */}
        <div className="block md:hidden w-16 sm:w-20 h-[1px] bg-white/20"></div>

        {/* Stat 2: Global Clients */}
        <StatBox
          number="50+"
          label="Global Clients"
          icon={<Globe2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#d946ef]" />}
        />

        {/* Divider - Hidden on small screens, visible on medium and up */}
        <div className="hidden md:block h-12 sm:h-14 md:h-16 w-[1px] bg-white/20"></div>

        {/* Mobile Divider - Visible only on small screens */}
        <div className="block md:hidden w-16 sm:w-20 h-[1px] bg-white/20"></div>

        {/* Stat 3: Awards */}
        <StatBox
          number="08"
          label="Awards Won"
          icon={<Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#d946ef]" />}
        />
      </div>
    </section>
  );
}

const StatBox = ({ number, label, icon }) => (
  <div className="flex items-center gap-3 sm:gap-4">
    <div className="p-1.5 sm:p-2 bg-[#d946ef]/30 rounded-md">{icon}</div>
    <div className="text-center sm:text-left">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{number}</h3>
      <p className="text-xs sm:text-sm text-gray-300">{label}</p>
    </div>
  </div>
);