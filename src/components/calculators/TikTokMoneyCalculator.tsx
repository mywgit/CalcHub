"use client";

import React, { useState } from "react";
import { Video, Sparkles, Sliders } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function TikTokMoneyCalculator() {
  const { t } = useLanguage();
  const [totalViews, setTotalViews] = useState<number>(500000);
  const [qualifiedRate, setQualifiedRate] = useState<number>(60);
  const [rpm, setRpm] = useState<number>(0.85);

  const qualifiedViews = Math.round(totalViews * (qualifiedRate / 100));
  const estimatedPayout = (qualifiedViews / 1000) * rpm;

  return (
    <div className="space-y-6">
      {/* Top Presets */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-semibold">{t("nicheRpmPresets")}</span>
          <button
            onClick={() => setRpm(0.45)}
            className={`px-3 py-1 rounded-lg border font-semibold transition-all ${rpm === 0.45 ? "bg-rose-600 border-rose-500 text-white" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"}`}
          >
            {t("vlogsEntertainment")}
          </button>
          <button
            onClick={() => setRpm(0.85)}
            className={`px-3 py-1 rounded-lg border font-semibold transition-all ${rpm === 0.85 ? "bg-rose-600 border-rose-500 text-white" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"}`}
          >
            {t("gamingTech")}
          </button>
          <button
            onClick={() => setRpm(1.35)}
            className={`px-3 py-1 rounded-lg border font-semibold transition-all ${rpm === 1.35 ? "bg-rose-600 border-rose-500 text-white" : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"}`}
          >
            {t("financeBusiness")}
          </button>
        </div>

        <span className="text-xs text-rose-400 font-semibold flex items-center gap-1">
          <Video className="w-3.5 h-3.5" /> {t("eligibleVideos")}
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sliders Input */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Sliders className="w-4 h-4 text-rose-400" /> {t("interactiveParams")}
          </h2>

          {/* Slider 1: Views */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold">{t("totalVideoViews")}</span>
              <span className="font-mono text-white font-bold text-sm">{totalViews.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={10000}
              max={10000000}
              step={10000}
              value={totalViews}
              onChange={(e) => setTotalViews(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />
          </div>

          {/* Slider 2: Qualified Views Rate */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold">{t("qualifiedViewsRate")}</span>
              <span className="font-mono text-white font-bold text-sm">{qualifiedRate}% ({qualifiedViews.toLocaleString()})</span>
            </div>
            <input
              type="range"
              min={20}
              max={95}
              step={5}
              value={qualifiedRate}
              onChange={(e) => setQualifiedRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />
            <span className="text-[11px] text-slate-400 block">
              {t("qualifiedViewsDesc")}
            </span>
          </div>

          {/* Slider 3: RPM */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold">{t("estimatedRpm")}</span>
              <span className="font-mono text-rose-400 font-bold text-base">${rpm.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.10}
              max={2.50}
              step={0.05}
              value={rpm}
              onChange={(e) => setRpm(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />
          </div>
        </div>

        {/* Payout Output */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-gradient-to-br from-slate-900 to-rose-950/30 border border-rose-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
            <span className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" /> {t("estimatedVideoPayout")}
            </span>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                ${estimatedPayout.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {t("fromQualifiedViews")} ({qualifiedViews.toLocaleString()} views @ ${rpm.toFixed(2)})
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block">{t("monthlyIf4Videos")}</span>
                <span className="text-xl font-bold text-emerald-400 font-mono">
                  ${(estimatedPayout * 4).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block">{t("annualPotential")}</span>
                <span className="text-xl font-bold text-blue-400 font-mono">
                  ${(estimatedPayout * 4 * 12).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
