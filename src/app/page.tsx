"use client";

import React from "react";
import Link from "next/link";
import { CALCULATORS, CATEGORIES, getLocalizedCategory, getLocalizedCalculator } from "@/lib/calculatorsData";
import { useLanguage } from "@/context/LanguageContext";
import {
  CreditCard,
  Video,
  PlayCircle,
  TrendingUp,
  ShoppingBag,
  Briefcase,
  Percent,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  CreditCard: <CreditCard className="w-6 h-6 text-blue-400" />,
  Video: <Video className="w-6 h-6 text-rose-400" />,
  PlayCircle: <PlayCircle className="w-6 h-6 text-red-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-400" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-amber-400" />,
  Briefcase: <Briefcase className="w-6 h-6 text-purple-400" />,
  Percent: <Percent className="w-6 h-6 text-cyan-400" />,
};

export default function HomePage() {
  const { t, lang } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Hero Banner */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> {t("heroBadge")}
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          {t("heroTitle")}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {t("heroSubtitle")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4" /> {t("privacyGuarantee")}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-blue-400 font-medium">
            <Zap className="w-4 h-4" /> {t("instantCalc")}
          </span>
          <span>•</span>
          <span>{t("updatedRates")}</span>
        </div>
      </section>

      {/* Featured Grid by Category */}
      <section className="space-y-12">
        {CATEGORIES.map((rawCat) => {
          const cat = getLocalizedCategory(rawCat, lang);
          const rawCalcs = CALCULATORS.filter((c) => c.categorySlug === rawCat.id);
          return (
            <div key={cat.id} className="space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <h2 className="text-xl font-bold text-white tracking-tight">{cat.name}</h2>
                <p className="text-xs text-slate-400">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {rawCalcs.map((rawItem) => {
                  const item = getLocalizedCalculator(rawItem, lang);
                  return (
                    <Link
                      key={item.id}
                      href={item.path}
                      className="group bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 rounded-2xl p-6 space-y-4 shadow-xl transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 group-hover:scale-105 transition-transform">
                            {iconMap[item.iconName] || <Zap className="w-6 h-6 text-blue-400" />}
                          </div>
                          {item.badge && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                          {item.shortDesc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-blue-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                        <span>{t("openCalculator")}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
