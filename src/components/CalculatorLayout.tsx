"use client";

import React from "react";
import Link from "next/link";
import { CalculatorItem, CALCULATORS, getLocalizedCalculator } from "@/lib/calculatorsData";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, ChevronRight, Sparkles, CheckCircle2, HelpCircle } from "lucide-react";
import { CalculatorDeepGuide } from "@/components/CalculatorDeepGuide";

interface CalculatorLayoutProps {
  calc: CalculatorItem;
  children: React.ReactNode;
}

export function CalculatorLayout({ calc: rawCalc, children }: CalculatorLayoutProps) {
  const { t, lang } = useLanguage();
  const calc = getLocalizedCalculator(rawCalc, lang);
  const relatedCalcs = CALCULATORS.filter((c) => c.id !== calc.id).slice(0, 3).map((c) => getLocalizedCalculator(c, lang));

  // Structured Data (WebApplication + FAQPage + BreadcrumbList)
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": calc.name,
    "url": `https://calc.puretoolhub.com${calc.path}`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "inLanguage": lang,
    "description": calc.shortDesc,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": calc.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://calc.puretoolhub.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": calc.category,
        "item": "https://calc.puretoolhub.com",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": calc.name,
        "item": `https://calc.puretoolhub.com${calc.path}`,
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-400">{calc.category}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">{calc.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            {calc.badge && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                {calc.badge}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> {t("privacyGuarantee")}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {calc.h1}
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
            {calc.shortDesc}
          </p>
        </div>

        {/* Interactive Calculator Component */}
        <section className="bg-slate-950/60 p-4 sm:p-6 rounded-3xl border border-slate-800 shadow-2xl">
          {children}
        </section>

        {/* Formula & Method Section */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
            {t("mathFormula")}
          </span>
          <code className="text-xs font-mono text-emerald-400 bg-slate-950 px-3 py-2 rounded-lg block overflow-x-auto">
            {rawCalc.formulaDesc}
          </code>
        </section>

        {/* How to Use & Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* How to Use */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" /> {t("howToUse")}
            </h2>
            <ol className="space-y-3 text-xs text-slate-300">
              {calc.howToSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Key Features */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {t("keyFeatures")}
            </h2>
            <ul className="space-y-3 text-xs text-slate-300">
              {calc.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deep Editorial Guide & Industry Benchmarks */}
        <section className="bg-slate-900/50 border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-6">
          <CalculatorDeepGuide calculatorId={rawCalc.id} />
        </section>

        {/* FAQ Section */}
        {calc.faqs.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-400" /> {t("faqTitle")}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {calc.faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                  <h3 className="text-sm font-bold text-white">{faq.question}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Calculators Section */}
        <section className="space-y-4 pt-4 border-t border-slate-800">
          <h2 className="text-lg font-bold text-white">{t("exploreMore")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedCalcs.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className="group p-5 bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl space-y-2 transition-all"
              >
                <span className="text-xs font-bold text-slate-400 block">{item.category}</span>
                <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">{item.shortDesc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
