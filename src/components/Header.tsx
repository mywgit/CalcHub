"use client";

import React from "react";
import Link from "next/link";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import { BrandLogo } from "@/components/BrandLogo";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="inline-block">
          <BrandLogo size="md" tagline={t("siteTagline")} />
        </Link>

        <nav className="flex items-center gap-3 text-xs font-semibold">
          <Link href="/stripe-fee-calculator" className="text-slate-300 hover:text-white transition-colors hidden md:block">
            {t("stripeNav")}
          </Link>
          <Link href="/tiktok-money-calculator" className="text-slate-300 hover:text-white transition-colors hidden md:block">
            {t("tiktokNav")}
          </Link>
          <Link href="/youtube-money-calculator" className="text-slate-300 hover:text-white transition-colors hidden md:block">
            {t("youtubeNav")}
          </Link>
          <Link href="/saas-mrr-calculator" className="text-slate-300 hover:text-white transition-colors hidden md:block">
            {t("saasNav")}
          </Link>
          <a
            href="https://tool.lehuoliaoyu.com"
            target="_blank"
            rel="noopener"
            className="text-slate-400 hover:text-blue-400 transition-colors hidden lg:block text-xs"
          >
            {t("devToolsNav")}
          </a>
          <Link
            href="/percentage-calculator"
            className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all hidden sm:block"
          >
            {t("allCalculators")}
          </Link>
          <LanguageSelector />
        </nav>
      </div>
    </header>
  );
}
