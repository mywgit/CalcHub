"use client";

import React, { useState } from "react";
import { Sparkles, Sliders, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function YouTubeMoneyCalculator() {
  const { t } = useLanguage();
  const [contentType, setContentType] = useState<"longform" | "shorts">("longform");
  const [monthlyViews, setMonthlyViews] = useState<number>(200000);
  const [rpm, setRpm] = useState<number>(4.50);

  const monthlyEarnings = (monthlyViews / 1000) * rpm;
  const annualEarnings = monthlyEarnings * 12;

  const handleTypeChange = (type: "longform" | "shorts") => {
    setContentType(type);
    if (type === "shorts") {
      setMonthlyViews(2000000);
      setRpm(0.08);
    } else {
      setMonthlyViews(200000);
      setRpm(4.50);
    }
  };

  return (
    <div className="space-y-6">
      {/* Format Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleTypeChange("longform")}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${contentType === "longform" ? "bg-red-600 text-white shadow-lg shadow-red-600/30" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`}
          >
            {t("longFormVideos")}
          </button>
          <button
            onClick={() => handleTypeChange("shorts")}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${contentType === "shorts" ? "bg-red-600 text-white shadow-lg shadow-red-600/30" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`}
          >
            {t("youtubeShorts")}
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Globe className="w-3.5 h-3.5 text-blue-400" /> {t("tier1Audience")}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Sliders className="w-4 h-4 text-red-400" /> {t("channelMetrics")}
          </h2>

          {/* Views Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold">{t("monthlyViews")}</span>
              <span className="font-mono text-white font-bold text-sm">{monthlyViews.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={contentType === "shorts" ? 100000 : 10000}
              max={contentType === "shorts" ? 50000000 : 5000000}
              step={contentType === "shorts" ? 100000 : 10000}
              value={monthlyViews}
              onChange={(e) => setMonthlyViews(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
          </div>

          {/* RPM Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold">{t("channelRpm")}</span>
              <span className="font-mono text-red-400 font-bold text-base">${rpm.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={contentType === "shorts" ? 0.02 : 0.50}
              max={contentType === "shorts" ? 0.30 : 15.00}
              step={contentType === "shorts" ? 0.01 : 0.25}
              value={rpm}
              onChange={(e) => setRpm(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
          </div>
        </div>

        {/* Output */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-gradient-to-br from-slate-900 to-red-950/30 border border-red-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
            <span className="text-xs font-bold text-red-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-red-400" /> {t("estimatedAdsenseRevenue")}
            </span>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                ${monthlyEarnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                <span className="text-sm font-normal text-slate-400 ml-2">{t("perMonth")}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">{t("annualEstimatedPayout")}</span>
                <span className="text-xl font-bold text-emerald-400 font-mono">
                  ${annualEarnings.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} {t("perYear")}
                </span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>{t("dailyAverage")}</span>
                <span className="font-mono text-slate-300">${(monthlyEarnings / 30).toFixed(2)} {t("perDay")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
