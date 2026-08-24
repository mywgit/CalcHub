"use client";

import React from "react";
import Link from "next/link";
import { Calculator, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CALCULATORS, getLocalizedCalculator } from "@/lib/calculatorsData";

export function Footer() {
  const { t, lang } = useLanguage();

  const creatorCalcs = CALCULATORS.filter((c) => c.categorySlug === "creator").map((c) => getLocalizedCalculator(c, lang));
  const businessCalcs = CALCULATORS.filter((c) => c.categorySlug !== "creator").map((c) => getLocalizedCalculator(c, lang));

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950/80 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3 md:col-span-2">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Calculator className="w-5 h-5 text-blue-500" /> CalcHub
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            {t("footerDesc")}
          </p>
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium text-[11px]">
            <ShieldCheck className="w-4 h-4" /> {t("footerPrivacy")}
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
