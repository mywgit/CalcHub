"use client";

import React from "react";
import Link from "next/link";
import { Calculator, ShieldCheck, Coffee } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CALCULATORS, getLocalizedCalculator } from "@/lib/calculatorsData";

export function Footer() {
  const { t, lang } = useLanguage();
  const coffeeUrl = process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_URL || "https://buy.stripe.com/28EaEYg7f6T83sIcRQ0Ny00";

  const creatorCalcs = CALCULATORS.filter((c) => c.categorySlug === "creator").map((c) => getLocalizedCalculator(c, lang));
  const businessCalcs = CALCULATORS.filter((c) => c.categorySlug !== "creator").map((c) => getLocalizedCalculator(c, lang));

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950/80 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Calculator className="w-5 h-5 text-blue-500" /> CalcHub
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            {t("footerDesc")}
          </p>
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium text-[11px]">
            <ShieldCheck className="w-4 h-4" /> {t("footerPrivacy")}
          </div>

          {/* Buy Me a Coffee Button */}
          <div className="pt-1">
            <a
              href={coffeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all shadow-lg shadow-amber-500/10 group"
            >
              <Coffee className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>{t("buyCoffee")}</span>
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider block">{t("catCreator")}</span>
          <ul className="space-y-1.5">
            {creatorCalcs.map((c) => (
              <li key={c.id}>
                <Link href={c.path} className="hover:text-white transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider block">{t("catBusiness")} & {t("catFreelance")}</span>
          <ul className="space-y-1.5">
            {businessCalcs.map((c) => (
              <li key={c.id}>
                <Link href={c.path} className="hover:text-white transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 text-center text-slate-500">
        © {new Date().getFullYear()} CalcHub. 100% In-Browser Financial & Creator Calculators.
      </div>
    </footer>
  );
}
