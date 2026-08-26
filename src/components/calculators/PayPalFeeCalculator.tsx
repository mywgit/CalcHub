"use client";

import React, { useState } from "react";
import { ShieldCheck, Copy, Check, Sparkles, DollarSign, ArrowRightLeft, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function PayPalFeeCalculator() {
  const { lang, t } = useLanguage();
  const [amount, setAmount] = useState<number>(100);
  const [rateType, setRateType] = useState<"standard" | "invoice" | "intl" | "qr" | "custom">("standard");
  const [feeRate, setFeeRate] = useState<number>(3.49);
  const [fixedFee, setFixedFee] = useState<number>(0.49);
  const [isInternational, setIsInternational] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

  const effectiveRate = isInternational ? feeRate + 1.5 : feeRate;

  // Normal calculation: Customer sends `amount`
  const normalFee = amount * (effectiveRate / 100) + fixedFee;
  const netPayout = Math.max(amount - normalFee, 0);

  // Reverse calculation: How much to request to receive exact `amount`
  const reverseInvoice = (amount + fixedFee) / (1 - effectiveRate / 100);
  const reverseFee = reverseInvoice - amount;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const setPreset = (type: "standard" | "invoice" | "intl" | "qr") => {
    setRateType(type);
    if (type === "standard") {
      setFeeRate(3.49);
      setFixedFee(0.49);
      setIsInternational(false);
    } else if (type === "invoice") {
      setFeeRate(2.99);
      setFixedFee(0.49);
      setIsInternational(false);
    } else if (type === "intl") {
      setFeeRate(3.49);
      setFixedFee(0.49);
      setIsInternational(true);
    } else if (type === "qr") {
      setFeeRate(1.90);
      setFixedFee(0.10);
      setIsInternational(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Preset Rate Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-semibold">{lang === "zh" ? "PayPal 场景预设：" : "PayPal Preset:"}</span>
          <button
            onClick={() => setPreset("standard")}
            className={`px-3 py-1.5 rounded-xl border font-semibold transition-all ${
              rateType === "standard" && !isInternational
                ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {lang === "zh" ? "标准买家付款 (3.49% + $0.49)" : "US Standard (3.49% + $0.49)"}
          </button>
          <button
            onClick={() => setPreset("invoice")}
            className={`px-3 py-1.5 rounded-xl border font-semibold transition-all ${
              rateType === "invoice"
                ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {lang === "zh" ? "PayPal 账单/结账 (2.99% + $0.49)" : "Invoicing & Checkout (2.99% + $0.49)"}
          </button>
          <button
            onClick={() => setPreset("intl")}
            className={`px-3 py-1.5 rounded-xl border font-semibold transition-all ${
              isInternational
                ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {lang === "zh" ? "跨境国际卡 (+1.50%)" : "International (+1.50%)"}
          </button>
          <button
            onClick={() => setPreset("qr")}
            className={`px-3 py-1.5 rounded-xl border font-semibold transition-all ${
              rateType === "qr"
                ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {lang === "zh" ? "线下扫码 QR (1.90% + $0.10)" : "QR Code (1.90% + $0.10)"}
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
          <ShieldCheck className="w-4 h-4" /> 100% In-Browser Privacy
        </div>
      </div>

      {/* Main Dual Calculation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Col: Interactive Inputs */}
        <div className="lg:col-span-6 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl backdrop-blur-md space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {lang === "zh" ? "交易金额 ($ USD)" : "Transaction Amount ($ USD)"}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-bold text-lg">
                $
              </div>
              <input
                type="number"
                min="0"
                step="0.01"
                value={amount || ""}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                placeholder="100.00"
                className="w-full pl-9 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-2xl text-xl font-bold text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Rate Sliders / Tweaks */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-400">
                {lang === "zh" ? "百分比费率 (%)" : "Percentage Fee (%)"}
              </label>
              <input
                type="number"
                step="0.01"
                value={feeRate}
                onChange={(e) => { setFeeRate(parseFloat(e.target.value) || 0); setRateType("custom"); }}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm font-semibold text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-400">
                {lang === "zh" ? "固定费 ($ USD)" : "Fixed Fee ($ USD)"}
              </label>
              <input
                type="number"
                step="0.01"
                value={fixedFee}
                onChange={(e) => { setFixedFee(parseFloat(e.target.value) || 0); setRateType("custom"); }}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm font-semibold text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* International Checkbox Toggle */}
          <div className="pt-2">
            <label className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition-colors">
              <input
                type="checkbox"
                checked={isInternational}
                onChange={(e) => setIsInternational(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 bg-slate-900 border-slate-700 focus:ring-0"
              />
              <div className="text-xs">
                <span className="font-bold text-white block">
                  {lang === "zh" ? "跨境国际交易 (+1.50% 附加费)" : "International Cross-Border (+1.50%)"}
                </span>
                <span className="text-[11px] text-slate-400">
                  {lang === "zh" ? "当买家使用非本国注册的 PayPal 或信用卡付款时收取" : "Applies when buyer account is outside your country"}
                </span>
              </div>
            </label>
          </div>

          <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 leading-relaxed flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>
              {lang === "zh"
                ? `当前综合费率：${effectiveRate.toFixed(2)}% + $${fixedFee.toFixed(2)}`
                : `Active Effective Formula: ${effectiveRate.toFixed(2)}% + $${fixedFee.toFixed(2)}`}
            </span>
          </div>
        </div>

        {/* Right Col: Instant Results & Reverse Invoicing */}
        <div className="lg:col-span-6 space-y-4">
          {/* Box 1: If Customer Pays $amount */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <span className="text-xs font-bold text-slate-400">
                {lang === "zh" ? "若买家直接付款该金额" : "If Buyer Sends Exact Amount"}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                Standard
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-slate-400 block">{lang === "zh" ? "PayPal 手续费" : "PayPal Fee"}</span>
                <span className="text-2xl font-black text-rose-400 font-mono">
                  -${normalFee.toFixed(2)}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  ({((normalFee / (amount || 1)) * 100).toFixed(1)}% effective)
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 block">{lang === "zh" ? "到手净额 (Net Payout)" : "Net You Receive"}</span>
                <span className="text-2xl font-black text-emerald-400 font-mono">
                  ${netPayout.toFixed(2)}
                </span>
                <span className="text-[10px] text-emerald-500/80 block mt-0.5">
                  {lang === "zh" ? "最终入账余额" : "Ready in Balance"}
                </span>
              </div>
            </div>
          </div>

          {/* Box 2: Reverse Invoice (What to charge to get full $amount) */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-1.5">
                <ArrowRightLeft className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-white">
                  {lang === "zh" ? "反向开票推荐（为了实收足额）" : "Reverse Invoice (To Net Full Amount)"}
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                PRO Secret
              </span>
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-slate-400 block">
                  {lang === "zh" ? `为实收 $${amount.toFixed(2)}，应向买家收取：` : `To receive exact $${amount.toFixed(2)}, charge:`}
                </span>
                <span className="text-3xl font-black text-white font-mono tracking-tight">
                  ${reverseInvoice.toFixed(2)}
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  {lang === "zh"
                    ? `包含手续费 $${reverseFee.toFixed(2)}，扣完分文不少`
                    : `Covers $${reverseFee.toFixed(2)} fee, leaves exactly $${amount.toFixed(2)} net`}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(reverseInvoice.toFixed(2))}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/30"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (lang === "zh" ? "已复制" : "Copied") : (lang === "zh" ? "复制金额" : "Copy")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
