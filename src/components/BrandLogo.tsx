import React from "react";
import { Calculator, Sparkles } from "lucide-react";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  tagline?: string;
}

export function BrandLogo({ size = "md", showTagline = true, tagline }: BrandLogoProps) {
  const iconSize = size === "sm" ? "w-7 h-7" : size === "lg" ? "w-11 h-11" : "w-9 h-9";
  const iconInner = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5";
  const textClass = size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base";

  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      {/* Glow Icon Box */}
      <div
        className={`${iconSize} rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 border border-white/20 group-hover:scale-105 group-hover:shadow-blue-500/50 transition-all`}
      >
        <Calculator className={`${iconInner} drop-shadow`} />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-black text-white tracking-tight ${textClass}`}>
            Calc<span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Hub</span>
          </span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 border border-blue-500/40 flex items-center gap-0.5 shadow-sm">
            <Sparkles className="w-2.5 h-2.5 text-blue-400" /> PRO
          </span>
        </div>
        {showTagline && tagline && (
          <span className="text-[10px] text-slate-400 hidden sm:inline leading-tight">
            {tagline}
          </span>
        )}
      </div>
    </div>
  );
}
