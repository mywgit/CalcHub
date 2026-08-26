"use client";

import React, { useState } from "react";
import { ShieldCheck, Copy, Check, Sparkles, ShoppingBag, PieChart, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function EtsyFeeCalculator() {
  const { lang } = useLanguage();
  const [itemPrice, setItemPrice] = useState<number>(35);
  const [shippingCharged, setShippingCharged] = useState<number>(5);
  const [itemCost, setItemCost] = useState<number>(8);
  const [actualShippingCost, setActualShippingCost] = useState<number>(4.5);
  const [offsiteAds, setOffsiteAds] = useState<"none" | "12" | "15">("none");
  const [isEtsyPlus, setIsEtsyPlus] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

  // Etsy Fee Constants (2026 Standards)
  const listingFee = 0.20;
  const totalRevenue = itemPrice + shippingCharged;
  
  // 6.5% transaction fee on total order (item + shipping charged)
  const transactionFee = totalRevenue * 0.065;
  
  // 3.0% + $0.25 payment processing fee (US standard)
  const paymentFee = totalRevenue * 0.03 + 0.25;

  // Offsite Ads fee if applicable
  const offsiteRate = offsiteAds === "15" ? 0.15 : offsiteAds === "12" ? 0.12 : 0;
  const offsiteAdsFee = totalRevenue * offsiteRate;

  // Total Etsy Fees
  const totalEtsyFees = listingFee + transactionFee + paymentFee + offsiteAdsFee;

  // Total Costs (Item COGS + Shipping + Etsy Fees)
  const totalCosts = itemCost + actualShippingCost + totalEtsyFees;

  // Net Profit & Margin
  const netProfit = totalRevenue - totalCosts;
  const profitMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Value Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
          <ShoppingBag className="w-4 h-4 text-orange-400" />
          <span>
            {lang === "zh"
              ? "已适配 2026 Etsy 最新官方费率：刊登费 $0.20 + 交易费 6.5% + 支付处理费 3%+$0.25"
              : "Updated 2026 Etsy Rates: $0.20 Listing + 6.5% Transaction + 3%+$0.25 Payment Processing"}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
          <ShieldCheck className="w-4 h-4" /> 100% In-Browser Privacy
        </div>
      </div>

      {/* Main Dual Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Col: Inputs */}
        <div className="lg:col-span-6 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl backdrop-blur-md space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 pb-2">
            {lang === "zh" ? "1. 订单收入与成本输入" : "1. Order Pricing & Costs"}
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                {lang === "zh" ? "商品售价 ($ USD)" : "Item Sale Price ($)"}
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={itemPrice || ""}
                onChange={(e) => setItemPrice(parseFloat(e.target.value) || 0)}
                placeholder="35.00"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-lg font-bold text-white focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                {lang === "zh" ? "向买家收取的运费 ($)" : "Shipping Charged ($)"}
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={shippingCharged || ""}
                onChange={(e) => setShippingCharged(parseFloat(e.target.value) || 0)}
                placeholder="5.00"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-lg font-bold text-white focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-1">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">
                {lang === "zh" ? "商品制作/进货成本 ($)" : "Item COGS / Material ($)"}
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={itemCost || ""}
                onChange={(e) => setItemCost(parseFloat(e.target.value) || 0)}
                placeholder="8.00"
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm font-semibold text-slate-200 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">
                {lang === "zh" ? "实际物流发货成本 ($)" : "Actual Shipping Cost ($)"}
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={actualShippingCost || ""}
                onChange={(e) => setActualShippingCost(parseFloat(e.target.value) || 0)}
                placeholder="4.50"
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm font-semibold text-slate-200 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* Offsite Ads Selector */}
          <div className="pt-2 space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">
              {lang === "zh" ? "Etsy 站外广告分成 (Offsite Ads)" : "Etsy Offsite Ads Fee"}
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setOffsiteAds("none")}
                className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all ${
                  offsiteAds === "none"
                    ? "bg-orange-600 border-orange-500 text-white shadow-md"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {lang === "zh" ? "未出单 (0%)" : "No Ads (0%)"}
              </button>
              <button
                type="button"
                onClick={() => setOffsiteAds("15")}
                className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all ${
                  offsiteAds === "15"
                    ? "bg-orange-600 border-orange-500 text-white shadow-md"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {lang === "zh" ? "标准店 (+15%)" : "Standard (15%)"}
              </button>
              <button
                type="button"
                onClick={() => setOffsiteAds("12")}
                className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all ${
                  offsiteAds === "12"
                    ? "bg-orange-600 border-orange-500 text-white shadow-md"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {lang === "zh" ? "年收 >$10k (+12%)" : ">$10k Store (12%)"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Col: Detailed Profit & Fee Breakdown */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Profit Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs text-slate-400 block">{lang === "zh" ? "每单真实净利润" : "Your Real Net Profit"}</span>
                <span
                  className={`text-3xl font-black font-mono tracking-tight ${
                    netProfit >= 0 ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  ${netProfit.toFixed(2)}
                </span>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400 block">{lang === "zh" ? "净利润率" : "Net Margin"}</span>
                <span
                  className={`text-2xl font-black font-mono ${
                    profitMargin >= 25 ? "text-emerald-400" : profitMargin > 0 ? "text-amber-400" : "text-rose-400"
                  }`}
                >
                  {profitMargin.toFixed(1)}%
                </span>
              </div>
            </div>

            {/* Fee Breakdown Details */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>{lang === "zh" ? "订单总收入 (总价 + 实收运费)" : "Total Customer Payment"}</span>
                <span className="text-white font-mono font-bold">${totalRevenue.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-slate-400">
                <span>{lang === "zh" ? "• 刊登费 (Listing Fee)" : "• Listing Fee ($0.20)"}</span>
                <span className="text-rose-400 font-mono">-${listingFee.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-slate-400">
                <span>{lang === "zh" ? "• 交易费 (6.5% Transaction Fee)" : "• Transaction Fee (6.5%)"}</span>
                <span className="text-rose-400 font-mono">-${transactionFee.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-slate-400">
                <span>{lang === "zh" ? "• 支付处理费 (3% + $0.25 Processing)" : "• Payment Processing (3% + $0.25)"}</span>
                <span className="text-rose-400 font-mono">-${paymentFee.toFixed(2)}</span>
              </div>

              {offsiteAdsFee > 0 && (
                <div className="flex justify-between text-amber-400 font-semibold">
                  <span>{lang === "zh" ? `• 站外广告分成 (${offsiteRate * 100}%)` : `• Offsite Ads (${offsiteRate * 100}%)`}</span>
                  <span className="font-mono">-${offsiteAdsFee.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between pt-2 border-t border-slate-800/80 font-bold text-orange-300">
                <span>{lang === "zh" ? "Etsy 官方抽成总额" : "Total Etsy Fees"}</span>
                <span className="font-mono">
                  -${totalEtsyFees.toFixed(2)} ({((totalEtsyFees / (totalRevenue || 1)) * 100).toFixed(1)}%)
                </span>
              </div>
            </div>

            {/* Quick Copy Summary */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  handleCopy(
                    `Etsy Profit: $${netProfit.toFixed(2)} (${profitMargin.toFixed(1)}% margin) on $${totalRevenue.toFixed(2)} sale. Total fees: $${totalEtsyFees.toFixed(2)}.`
                  )
                }
                className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shadow-md shadow-orange-600/30 flex items-center justify-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (lang === "zh" ? "已复制测算摘要" : "Copied Summary") : (lang === "zh" ? "复制测算结果摘要" : "Copy Calculation Summary")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
