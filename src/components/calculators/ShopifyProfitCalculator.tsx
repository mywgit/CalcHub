"use client";

import React, { useState } from "react";
import { ShoppingBag, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ShopifyProfitCalculator() {
  const { t } = useLanguage();
  const [sellingPrice, setSellingPrice] = useState<number>(49.99);
  const [cogs, setCogs] = useState<number>(12.50);
  const [adSpendCpa, setAdSpendCpa] = useState<number>(15.00);
  const [shippingCost, setShippingCost] = useState<number>(4.50);
  const [monthlyOrders, setMonthlyOrders] = useState<number>(500);

  // Stripe/Shopify Pay fee (2.9% + $0.30)
  const paymentFee = (sellingPrice * 0.029) + 0.30;
  const totalCostPerUnit = cogs + adSpendCpa + shippingCost + paymentFee;
  const netProfitPerUnit = sellingPrice - totalCostPerUnit;
  const netMarginPct = (netProfitPerUnit / sellingPrice) * 100;

  // Break-even ROAS = Selling Price / (Selling Price - COGS - Shipping - Payment Fee)
  const marginBeforeAds = sellingPrice - cogs - shippingCost - paymentFee;
  const breakEvenRoas = marginBeforeAds > 0 ? (sellingPrice / marginBeforeAds) : 0;

  // Monthly totals
  const monthlyProfit = netProfitPerUnit * monthlyOrders;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Cost Inputs */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-amber-400" /> {t("unitEconomics")}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">{t("retailSellingPrice")}</label>
              <input
                type="number"
                step={0.5}
                value={sellingPrice}
                onChange={(e) => setSellingPrice(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">{t("productCostCogs")}</label>
              <input
                type="number"
                step={0.5}
                value={cogs}
                onChange={(e) => setCogs(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 font-mono text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">{t("adSpendCpa")}</label>
              <input
                type="number"
                step={0.5}
                value={adSpendCpa}
                onChange={(e) => setAdSpendCpa(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-rose-400 font-mono text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">{t("shippingCost")}</label>
              <input
                type="number"
                step={0.5}
                value={shippingCost}
                onChange={(e) => setShippingCost(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 font-mono text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">{t("monthlyOrders")}</span>
              <span className="font-mono text-white font-bold">{monthlyOrders} {t("unitsPerMo")}</span>
            </div>
            <input
              type="range"
              min={50}
              max={5000}
              step={50}
              value={monthlyOrders}
              onChange={(e) => setMonthlyOrders(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>
        </div>

        {/* Profit Outputs */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-gradient-to-br from-slate-900 to-amber-950/30 border border-amber-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> {t("netProfitMargins")}
            </span>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400">{t("netProfitUnit")}</span>
                <div className={`text-2xl sm:text-3xl font-black font-mono ${netProfitPerUnit >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                  ${netProfitPerUnit.toFixed(2)}
                </div>
              </div>
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                <span className="text-xs text-slate-400">{t("netMarginPct")}</span>
                <div className={`text-2xl sm:text-3xl font-black font-mono ${netMarginPct >= 20 ? "text-emerald-400" : "text-amber-400"}`}>
                  {netMarginPct.toFixed(1)}%
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">{t("monthlyNetProfit")} ({monthlyOrders} {t("unitsPerMo")}):</span>
                <span className="font-bold text-emerald-400 font-mono text-sm">${monthlyProfit.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{t("breakEvenRoas")}</span>
                <span className="font-mono text-blue-400 font-bold">{breakEvenRoas.toFixed(2)}x ROAS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
