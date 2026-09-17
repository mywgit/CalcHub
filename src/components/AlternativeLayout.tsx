"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, X, ShieldCheck, Zap, ChevronDown, ChevronUp, Sparkles, ArrowRight } from "lucide-react";
import { AlternativePageData } from "@/lib/alternativeData";
import { useLanguage } from "@/context/LanguageContext";
import { AlternativeDeepGuide } from "@/components/AlternativeDeepGuide";

interface AlternativeLayoutProps {
  data: AlternativePageData;
  children: React.ReactNode;
}

export function AlternativeLayout({ data, children }: AlternativeLayoutProps) {
  const { lang, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isZh = lang === "zh";
  const h1 = isZh ? data.h1Zh : data.h1;
  const badge = isZh ? data.badgeZh : data.badge;
  const subheading = isZh ? data.subheadingZh : data.subheading;
  const whyTitle = isZh ? data.whySwitchTitleZh : data.whySwitchTitle;
  const whyDesc = isZh ? data.whySwitchDescZh : data.whySwitchDesc;

  // Schema.org JSON-LD
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": isZh ? data.titleZh : data.title,
    "url": `https://calc.puretoolhub.com${data.path}`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "description": isZh ? data.metaDescZh : data.metaDesc,
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map((faq) => ({
      "@type": "Question",
      "name": isZh ? faq.questionZh : faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": isZh ? faq.answerZh : faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-12">
        {/* Hero Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {h1}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {subheading}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> {t("privacyGuarantee")}
            </span>
            <span className="flex items-center gap-1 text-blue-400">
              <Zap className="w-4 h-4" /> {t("instantLiveCalc")}
            </span>
          </div>
        </div>

        {/* Embedded Interactive Tool Section */}
        <section className="space-y-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
            {children}
          </div>
        </section>

        {/* Side-by-Side Comparison Matrix */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {isZh ? "深度对比：CalcHub vs 传统竞品" : `Feature Comparison: CalcHub vs ${data.competitorName}`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {isZh ? "清晰直观的技术与体验对比，帮您做出明智的选择" : "See why thousands of creators and businesses choose modern client-side calculation"}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl">
            <div className="grid grid-cols-12 bg-slate-950 p-4 border-b border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <div className="col-span-4 sm:col-span-4">{isZh ? "核心特性" : "Key Feature"}</div>
              <div className="col-span-4 sm:col-span-4 text-blue-400 font-bold flex items-center gap-1">
                <span>CalcHub (2026)</span>
                <span className="px-1.5 py-0.5 text-[9px] bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">PRO</span>
              </div>
              <div className="col-span-4 sm:col-span-4 text-slate-500">{data.competitorName}</div>
            </div>

            <div className="divide-y divide-slate-800/80">
              {data.comparisons.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 text-xs sm:text-sm items-center hover:bg-slate-800/30 transition-colors">
                  <div className="col-span-4 sm:col-span-4 font-semibold text-slate-200">
                    {isZh ? row.featureZh : row.feature}
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-emerald-400 font-medium flex items-start gap-1.5 pr-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isZh ? row.calchubZh : row.calchub}</span>
                  </div>
                  <div className="col-span-4 sm:col-span-4 text-slate-400 flex items-start gap-1.5">
                    <X className="w-4 h-4 text-rose-400/70 shrink-0 mt-0.5" />
                    <span className="text-slate-400 text-xs">{isZh ? row.competitorZh : row.competitor}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Switch Editorial Section */}
        <section className="bg-gradient-to-br from-slate-900 to-blue-950/20 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight">{whyTitle}</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{whyDesc}</p>
        </section>

        {/* Deep Editorial Guide & Directory Matrix */}
        <section className="bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-6">
          <AlternativeDeepGuide slug={data.slug} />
        </section>

        {/* FAQ Accordion */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight text-center">{t("faqs")}</h2>
          <div className="space-y-3">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    <span>{isZh ? faq.questionZh : faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {isZh ? faq.answerZh : faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center p-8 bg-slate-900/40 border border-slate-800 rounded-3xl space-y-4">
          <h3 className="text-lg font-bold text-white">
            {isZh ? "探索 CalcHub 全量商业与创作者计算器" : "Explore All CalcHub Financial & Creator Tools"}
          </h3>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            {isZh ? "涵盖 Stripe 手续费、TikTok 分成、YouTube 收益、SaaS MRR 及 Shopify 利润率" : "Designed for high-accuracy financial modeling with 100% in-browser privacy"}
          </p>
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/30"
            >
              <span>{isZh ? "进入 CalcHub 首页" : "Browse All Calculators"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
