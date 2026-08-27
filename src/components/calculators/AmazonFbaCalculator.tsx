"use client";

import React, { useState } from "react";
import { ShieldCheck, Copy, Check, Sparkles, ShoppingCart, Box, PieChart, TrendingUp, ArrowRight, DollarSign, BarChart3, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CategoryOption {
  label: string;
  rate: number;
}

const CATEGORIES: CategoryOption[] = [
  { label: "Standard / Most Categories (15%)", rate: 0.15 },
  { label: "Consumer Electronics (8%)", rate: 0.08 },
  { label: "Electronics Accessories (15% / 8% over $100)", rate: 0.15 },
  { label: "Apparel & Accessories (17%)", rate: 0.17 },
  { label: "Beauty & Personal Care (15% / 8% under $10)", rate: 0.15 },
  { label: "Grocery & Gourmet Food (8% / 15%)", rate: 0.15 },
  { label: "Books, Media & Music (15% + $1.80 closing)", rate: 0.15 },
  { label: "Toys & Games (15%)", rate: 0.15 },
  { label: "Home & Kitchen (15%)", rate: 0.15 },
];

interface SizeTierOption {
  label: string;
  fee: number;
  desc: string;
}

const SIZE_TIERS: SizeTierOption[] = [
  { label: "Small Standard (under 16 oz)", fee: 3.22, desc: "Max 15x12x0.75 in, < 1 lb" },
  { label: "Large Standard (under 1 lb)", fee: 3.86, desc: "Max 18x14x8 in, < 1 lb" },
  { label: "Large Standard (1 to 2 lbs)", fee: 4.85, desc: "Max 18x14x8 in, 1-2 lbs" },
  { label: "Large Standard (2 to 3 lbs)", fee: 5.58, desc: "Max 18x14x8 in, 2-3 lbs" },
  { label: "Small Oversize (under 70 lbs)", fee: 9.73, desc: "Max 60 in longest side, < 70 lbs" },
  { label: "Medium Oversize (under 150 lbs)", fee: 19.05, desc: "Max 108 in longest side, < 150 lbs" },
];

export function AmazonFbaCalculator() {
  const { lang } = useLanguage();
  const [salePrice, setSalePrice] = useState<number>(39.99);
  const [itemCost, setItemCost] = useState<number>(9.50);
  const [shippingToFba, setShippingToFba] = useState<number>(2.20);
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);
  const [selectedSizeTierIdx, setSelectedSizeTierIdx] = useState<number>(2); // Large standard 1-2 lbs
  const [storageMonths, setStorageMonths] = useState<number>(1);
  const [isPeakSeason, setIsPeakSeason] = useState<boolean>(false); // Oct-Dec
  const [unitVolumeCuFt, setUnitVolumeCuFt] = useState<number>(0.12);
  const [acosPercent, setAcosPercent] = useState<number>(15);
  const [miscCost, setMiscCost] = useState<number>(0.50); // packaging, inspection
  const [copied, setCopied] = useState(false);

  // Referral Fee
  const referralRate = CATEGORIES[selectedCategoryIdx].rate;
  const referralFee = Math.max(salePrice * referralRate, 0.30); // Amazon $0.30 min fee

  // FBA Fulfillment Fee
  const fbaFulfillmentFee = SIZE_TIERS[selectedSizeTierIdx].fee;

  // Monthly Storage Fee (Jan-Sep $0.87/cu.ft, Oct-Dec $2.40/cu.ft)
  const storageRatePerCuFt = isPeakSeason ? 2.40 : 0.87;
  const monthlyStorageFee = unitVolumeCuFt * storageRatePerCuFt * storageMonths;

  // Advertising Spend (ACoS)
  const adSpend = salePrice * (acosPercent / 100);

  // Amazon Fees Total
  const totalAmazonFees = referralFee + fbaFulfillmentFee + monthlyStorageFee + adSpend;

  // Total Landed & Operating Costs
  const totalCosts = itemCost + shippingToFba + miscCost + totalAmazonFees;

  // Net Profit & Margins
  const netProfit = salePrice - totalCosts;
  const netMargin = salePrice > 0 ? (netProfit / salePrice) * 100 : 0;
  const roi = (itemCost + shippingToFba + miscCost + adSpend) > 0 
    ? (netProfit / (itemCost + shippingToFba + miscCost + adSpend)) * 100 
    : 0;

  // Break-Even Calculation: P = (FixedCosts) / (1 - ReferralRate - ACoSRate)
  const fixedUnitCosts = itemCost + shippingToFba + miscCost + fbaFulfillmentFee + monthlyStorageFee;
  const variableRate = referralRate + (acosPercent / 100);
  const breakEvenPrice = variableRate < 1 ? fixedUnitCosts / (1 - variableRate) : 0;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadPresetHomeGoods = () => {
    setSalePrice(39.99);
    setItemCost(9.50);
    setShippingToFba(2.20);
    setSelectedCategoryIdx(0); // 15%
    setSelectedSizeTierIdx(2); // Large standard 1-2 lbs
    setStorageMonths(1);
    setIsPeakSeason(false);
    setUnitVolumeCuFt(0.12);
    setAcosPercent(15);
    setMiscCost(0.50);
  };

  const loadPresetElectronics = () => {
    setSalePrice(24.99);
    setItemCost(4.80);
    setShippingToFba(1.10);
    setSelectedCategoryIdx(1); // 8% electronics
    setSelectedSizeTierIdx(0); // Small standard
    setStorageMonths(1);
    setIsPeakSeason(false);
    setUnitVolumeCuFt(0.04);
    setAcosPercent(12);
    setMiscCost(0.30);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Quick Presets */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
          <ShoppingCart className="w-4 h-4 text-amber-400" />
          <span>
            {lang === "zh"
              ? "已适配 2026 Amazon 最新 FBA 履约费、类目佣金与阶梯仓储费率标准"
              : "Updated for 2026 Amazon US FBA Fulfillment, Category Referral & Storage Rates"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={loadPresetHomeGoods}
            className="text-xs px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 font-medium transition-all"
          >
            ⚡ {lang === "zh" ? "载入爆款家居预设 ($39.99)" : "Home Best-Seller Demo ($39.99)"}
          </button>
          <button
            onClick={loadPresetElectronics}
            className="text-xs px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/30 hover:bg-blue-500/20 font-medium transition-all"
          >
            ⚡ {lang === "zh" ? "载入3C轻小件预设 ($24.99)" : "Electronics Demo ($24.99)"}
          </button>
        </div>
      </div>

      {/* Main Dual Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Inputs */}
        <div className="lg:col-span-6 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl backdrop-blur-md space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 pb-2">
            {lang === "zh" ? "1. 售价与商品成本设置" : "1. Pricing & Unit Sourcing Costs"}
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                {lang === "zh" ? "亚马逊售价 ($ USD)" : "Amazon Listing Price ($)"}
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={salePrice || ""}
                onChange={(e) => setSalePrice(parseFloat(e.target.value) || 0)}
                placeholder="39.99"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-lg font-bold text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                {lang === "zh" ? "单件采购成本 COGS ($)" : "Item Cost / COGS ($)"}
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={itemCost || ""}
                onChange={(e) => setItemCost(parseFloat(e.target.value) || 0)}
                placeholder="9.50"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-lg font-bold text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                {lang === "zh" ? "头程物流费 ($/件)" : "Shipping to FBA ($/unit)"}
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={shippingToFba || ""}
                onChange={(e) => setShippingToFba(parseFloat(e.target.value) || 0)}
                placeholder="2.20"
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm font-semibold text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                {lang === "zh" ? "包装/杂费 ($/件)" : "Packaging & Misc ($)"}
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={miscCost || ""}
                onChange={(e) => setMiscCost(parseFloat(e.target.value) || 0)}
                placeholder="0.50"
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm font-semibold text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 pb-2 pt-2">
            {lang === "zh" ? "2. 亚马逊 FBA 规格与类目" : "2. Amazon FBA Tier & Category"}
          </h3>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">
              {lang === "zh" ? "商品所属类目（佣金 Referral Fee）" : "Product Category (Referral Rate)"}
            </label>
            <select
              value={selectedCategoryIdx}
              onChange={(e) => setSelectedCategoryIdx(parseInt(e.target.value))}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs font-medium text-slate-200 focus:outline-none focus:border-amber-500"
            >
              {CATEGORIES.map((cat, idx) => (
                <option key={idx} value={idx}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">
              {lang === "zh" ? "FBA 尺寸与重量分段（履约费 Fulfillment Fee）" : "FBA Size Tier & Fulfillment Fee"}
            </label>
            <select
              value={selectedSizeTierIdx}
              onChange={(e) => setSelectedSizeTierIdx(parseInt(e.target.value))}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs font-medium text-slate-200 focus:outline-none focus:border-amber-500"
            >
              {SIZE_TIERS.map((tier, idx) => (
                <option key={idx} value={idx}>
                  {tier.label} — ${tier.fee.toFixed(2)} ({tier.desc})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                {lang === "zh" ? "广告费率 ACoS (%)" : "PPC Ad Spend / ACoS (%)"}
              </label>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={acosPercent || ""}
                onChange={(e) => setAcosPercent(parseFloat(e.target.value) || 0)}
                placeholder="15"
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm font-semibold text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">
                {lang === "zh" ? "FBA 仓储周期 (月)" : "Storage Duration (Months)"}
              </label>
              <input
                type="number"
                min="0.5"
                max="12"
                step="0.5"
                value={storageMonths || ""}
                onChange={(e) => setStorageMonths(parseFloat(e.target.value) || 1)}
                placeholder="1"
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-sm font-semibold text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 text-xs">
            <span className="text-slate-300 font-medium">
              {lang === "zh" ? "Q4 旺季仓储费（10-12月）" : "Q4 Holiday Storage Surcharge (Oct-Dec)"}
            </span>
            <button
              onClick={() => setIsPeakSeason(!isPeakSeason)}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                isPeakSeason
                  ? "bg-amber-500 text-slate-950 shadow-md"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {isPeakSeason ? (lang === "zh" ? "已开启 ($2.40/cu.ft)" : "Active ($2.40/cu.ft)") : (lang === "zh" ? "普通期 ($0.87/cu.ft)" : "Standard ($0.87/cu.ft)")}
            </button>
          </div>
        </div>

        {/* Right Column: Output & Analytics */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Profit Card */}
          <div className={`p-6 rounded-3xl border shadow-2xl backdrop-blur-md ${
            netProfit > 0 ? "bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 border-amber-500/40" : "bg-slate-900 border-red-500/40"
          }`}>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {lang === "zh" ? "单件净利润与回报率" : "Unit Net Profit & Margins"}
              </span>
              <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                netMargin >= 25 
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : netMargin >= 15
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : netMargin > 0
                  ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                  : "bg-red-500/20 text-red-300 border border-red-500/30"
              }`}>
                {netMargin >= 25 ? "⭐ High Margin" : netMargin >= 15 ? "✓ Healthy Margin" : netMargin > 0 ? "⚠️ Low Margin" : "❌ Unprofitable"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div>
                <p className="text-xs text-slate-400 font-medium">{lang === "zh" ? "单件净利润 (Net Profit)" : "Net Profit / Unit"}</p>
                <p className={`text-3xl font-extrabold tracking-tight ${netProfit >= 0 ? "text-amber-400" : "text-red-400"}`}>
                  ${netProfit.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">{lang === "zh" ? "净利润率 (Net Margin)" : "Net Profit Margin"}</p>
                <p className={`text-3xl font-extrabold tracking-tight ${netMargin >= 15 ? "text-emerald-400" : netMargin > 0 ? "text-yellow-400" : "text-red-400"}`}>
                  {netMargin.toFixed(1)}%
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800/80 text-xs">
              <div>
                <span className="text-slate-400">{lang === "zh" ? "投资回报率 (ROI)" : "Return on Investment (ROI)"}: </span>
                <span className="font-bold text-slate-200">{roi.toFixed(1)}%</span>
              </div>
              <div>
                <span className="text-slate-400">{lang === "zh" ? "保本临界售价" : "Break-even Sale Price"}: </span>
                <span className="font-bold text-amber-300">${breakEvenPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Breakdown Table Card */}
          <div className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>{lang === "zh" ? "费用明细拆解 ($ / 件)" : "Fee & Cost Breakdown ($ / unit)"}</span>
              <button
                onClick={() => handleCopy(`Amazon FBA Profit Breakdown:\nSale Price: $${salePrice.toFixed(2)}\nReferral Fee: $${referralFee.toFixed(2)}\nFBA Fulfillment: $${fbaFulfillmentFee.toFixed(2)}\nStorage: $${monthlyStorageFee.toFixed(2)}\nAd Spend (${acosPercent}%): $${adSpend.toFixed(2)}\nProduct Cost: $${itemCost.toFixed(2)}\nShipping to FBA: $${shippingToFba.toFixed(2)}\nNet Profit: $${netProfit.toFixed(2)} (${netMargin.toFixed(1)}%)`)}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "Copy Report"}
              </button>
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-300 font-medium">Amazon Referral Fee ({Math.round(referralRate * 100)}%)</span>
                <span className="font-bold text-red-400">-${referralFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-300 font-medium">Amazon FBA Fulfillment Fee</span>
                <span className="font-bold text-red-400">-${fbaFulfillmentFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-300 font-medium">FBA Monthly Storage ({storageMonths} mo)</span>
                <span className="font-bold text-red-400">-${monthlyStorageFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-300 font-medium">PPC Ad Spend ({acosPercent}% ACoS)</span>
                <span className="font-bold text-orange-400">-${adSpend.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                <span className="text-slate-300 font-medium">Product Sourcing (COGS) & Head-haul Ship</span>
                <span className="font-bold text-slate-300">-${(itemCost + shippingToFba + miscCost).toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1.5 font-bold text-slate-200 pt-1">
                <span>Total Deductions & Costs</span>
                <span className="text-amber-400">-${totalCosts.toFixed(2)} ({((totalCosts / (salePrice || 1)) * 100).toFixed(1)}%)</span>
              </div>
            </div>
          </div>

          {/* Cross-Sell Funnel to SnapBio */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-slate-900 border border-blue-500/30 flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-300">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>{lang === "zh" ? "想要直接向粉丝卖货或引流？" : "Selling on Amazon, Etsy, or TikTok?"}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {lang === "zh"
                  ? "使用 SnapBio 30 秒搭建免抽佣 Notion 风独立站微官网，承接全网私域流量。"
                  : "Build your 0% commission Notion-style Link-in-Bio storefront with SnapBio in 30s."}
              </p>
            </div>
            <a
              href="https://bio.puretoolhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-lg transition-all"
            >
              <span>SnapBio</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
