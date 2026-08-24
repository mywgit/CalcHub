"use client";

import React, { useState } from "react";
import { Percent, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function PercentageCalculator() {
  const { t } = useLanguage();

  // Mode 1: What is X% of Y?
  const [val1, setVal1] = useState<number>(20);
  const [val2, setVal2] = useState<number>(150);
  const res1 = (val1 / 100) * val2;

  // Mode 2: Percentage Increase / Decrease from A to B
  const [fromVal, setFromVal] = useState<number>(80);
  const [toVal, setToVal] = useState<number>(120);
  const diff = toVal - fromVal;
  const pctChange = fromVal !== 0 ? (diff / fromVal) * 100 : 0;

  // Mode 3: Discount Calculator ($100 with 25% off)
  const [origPrice, setOrigPrice] = useState<number>(100);
  const [discountPct, setDiscountPct] = useState<number>(25);
  const discountSavings = (origPrice * (discountPct / 100));
  const finalPrice = Math.max(0, origPrice - discountSavings);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1 */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Percent className="w-3.5 h-3.5" /> {t("whatIsXofY")}
          </span>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs">
              <span>{t("whatIs")}</span>
              <input
                type="number"
                value={val1}
                onChange={(e) => setVal1(Number(e.target.value))}
                className="w-20 px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-center"
              />
              <span>{t("percentOf")}</span>
              <input
                type="number"
                value={val2}
                onChange={(e) => setVal2(Number(e.target.value))}
                className="w-24 px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-center"
              />
              <span>?</span>
            </div>
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block">{t("result")}</span>
              <span className="text-2xl font-black text-emerald-400 font-mono">{res1.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> {t("percentChange")}
          </span>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs">
              <span>{t("from")}</span>
              <input
                type="number"
                value={fromVal}
                onChange={(e) => setFromVal(Number(e.target.value))}
                className="w-20 px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-center"
              />
              <span>{t("to")}</span>
              <input
                type="number"
                value={toVal}
                onChange={(e) => setToVal(Number(e.target.value))}
                className="w-20 px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-center"
              />
            </div>
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block">{t("difference")}</span>
              <span className={`text-2xl font-black font-mono ${pctChange >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                {pctChange >= 0 ? `+${pctChange.toFixed(2)}%` : `${pctChange.toFixed(2)}%`}
              </span>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Percent className="w-3.5 h-3.5" /> {t("saleDiscount")}
          </span>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs">
              <span>{t("originalPrice")}</span>
              <input
                type="number"
                value={origPrice}
                onChange={(e) => setOrigPrice(Number(e.target.value))}
                className="w-20 px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-center"
              />
              <span>-</span>
              <input
                type="number"
                value={discountPct}
                onChange={(e) => setDiscountPct(Number(e.target.value))}
                className="w-16 px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-center"
              />
              <span>{t("withPercentOff")}</span>
            </div>
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block">{t("finalPrice")} ({t("save")} ${discountSavings.toFixed(2)}):</span>
              <span className="text-2xl font-black text-amber-400 font-mono">${finalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
