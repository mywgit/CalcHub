"use client";

import React from "react";
import Link from "next/link";
import { Calculator, ShieldCheck, Coffee } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CALCULATORS, getLocalizedCalculator } from "@/lib/calculatorsData";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  const { t, lang } = useLanguage();
  const isZh = lang === "zh";
  const coffeeUrl = process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_URL || "https://buy.stripe.com/28EaEYg7f6T83sIcRQ0Ny00";

  const creatorCalcs = CALCULATORS.filter((c) => c.categorySlug === "creator").map((c) => getLocalizedCalculator(c, lang));
  const businessCalcs = CALCULATORS.filter((c) => c.categorySlug !== "creator").map((c) => getLocalizedCalculator(c, lang));

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950/80 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="inline-block">
            <BrandLogo size="sm" showTagline={false} />
          </Link>
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

        {/* Competitor Alternatives & Reverse Invoicing */}
        <div className="space-y-2">
          <span className="font-bold text-white uppercase tracking-wider block">
            {isZh ? "竞品对比与高阶工具" : "Comparisons & Specialized"}
          </span>
          <ul className="space-y-1.5">
            <li>
              <Link href="/calculator-net-alternative" className="hover:text-blue-400 transition-colors">
                {isZh ? "Calculator.net 最佳替代" : "Calculator.net Alternative"}
              </Link>
            </li>
            <li>
              <Link href="/omni-calculator-alternative" className="hover:text-blue-400 transition-colors">
                {isZh ? "Omni Calculator 极速替代" : "Omni Calculator Alternative"}
              </Link>
            </li>
            <li>
              <Link href="/stripe-fee-calculator-reverse-invoice" className="hover:text-blue-400 transition-colors">
                {isZh ? "Stripe 反向开票倒推计算器" : "Stripe Reverse Fee Calculator"}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 text-center text-slate-500">
        © {new Date().getFullYear()} CalcHub. 100% In-Browser Financial & Creator Calculators.
      </div>
    </footer>
  );
}
