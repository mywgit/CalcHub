"use client";

import React, { useState } from "react";
import { ShieldCheck, Copy, Check, CreditCard, Sparkles, Globe2, ArrowRight, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function StripeFeeCalculator() {
  const { t } = useLanguage();
  const [amount, setAmount] = useState<number>(100);
  const [feeRate, setFeeRate] = useState<number>(2.9);
  const [fixedFee, setFixedFee] = useState<number>(0.30);
  const [isInternational, setIsInternational] = useState<boolean>(false);
  const [isCurrencyConversion, setIsCurrencyConversion] = useState<boolean>(false);
  const [isInstantPayout, setIsInstantPayout] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

  // Calculate effective rate based on 2026 Stripe rules
  let effectiveRate = feeRate;
  if (isInternational) effectiveRate += 1.5;
  if (isCurrencyConversion) effectiveRate += 1.0;
  if (isInstantPayout) effectiveRate += 1.5;

  // Normal calculation: Customer pays `amount`
  const normalFee = (amount * (effectiveRate / 100)) + fixedFee;
  const netPayout = Math.max(amount - normalFee, 0);

  // Reverse calculation: What to invoice to receive exact `amount`
  const reverseInvoice = (amount + fixedFee) / (1 - (effectiveRate / 100));
  const reverseFee = reverseInvoice - amount;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Preset Rate Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-semibold">{t("presetGateway")}</span>
          <button
            onClick={() => {
              setFeeRate(2.9);
              setFixedFee(0.30);
              setIsInternational(false);
              setIsCurrencyConversion(false);
              setIsInstantPayout(false);
            }}
            className={`px-3 py-1.5 rounded-lg border font-semibold transition-all ${
              feeRate === 2.9 && !isInternational && !isCurrencyConversion && !isInstantPayout
                ? "bg-blue-600 border-blue-500 text-white shadow"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {t("stripeUsStandard")}
          </button>
          <button
            onClick={() => {
              setFeeRate(2.9);
              setFixedFee(0.30);
              setIsInternational(true);
              setIsCurrencyConversion(false);
            }}
            className={`px-3 py-1.5 rounded-lg border font-semibold transition-all ${
              isInternational && !isCurrencyConversion
                ? "bg-blue-600 border-blue-500 text-white shadow"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
            }`}
          >
            🌍 International Card (+1.5%)
          </button>
          <button
            onClick={() => {
              setFeeRate(2.9);
              setFixedFee(0.30);
              setIsInternational(true);
              setIsCurrencyConversion(true);
            }}
            className={`px-3 py-1.5 rounded-lg border font-semibold transition-all ${
              isInternational && isCurrencyConversion
                ? "bg-blue-600 border-blue-500 text-white shadow"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
            }`}
          >
            💱 Intl + FX Conversion (+2.5%)
          </button>
          <button
            onClick={() => {
              setFeeRate(3.49);
              setFixedFee(0.49);
              setIsInternational(false);
              setIsCurrencyConversion(false);
            }}
            className={`px-3 py-1.5 rounded-lg border font-semibold transition-all ${
              feeRate === 3.49
                ? "bg-blue-600 border-blue-500 text-white shadow"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {t("paypalStandard")}
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
          <ShieldCheck className="w-4 h-4" /> {t("privacyGuarantee")}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Inputs */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
          <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-blue-400" /> {t("transactionInputs")}
          </h2>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">{t("transactionAmount")}</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
              <input
                type="number"
                min={1}
                step={1}
                value={amount}
                onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                className="w-full pl-9 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-lg font-bold focus:outline-none focus:border-blue-500"
                placeholder="100.00"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">{t("percentageFee")}</label>
              <input
                type="number"
                step={0.1}
                value={feeRate}
                onChange={(e) => setFeeRate(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm font-mono focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">{t("fixedFee")}</label>
              <input
                type="number"
                step={0.05}
                value={fixedFee}
                onChange={(e) => setFixedFee(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm font-mono focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* 2026 Advanced Fee Toggles */}
          <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                <input
                  type="checkbox"
                  checked={isInternational}
                  onChange={(e) => setIsInternational(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-0 bg-slate-950 border-slate-700"
                />
                <span>🌐 International Cross-Border Card (+1.5%)</span>
              </label>
              <span className="text-slate-500 font-mono">+1.5%</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                <input
                  type="checkbox"
                  checked={isCurrencyConversion}
                  onChange={(e) => setIsCurrencyConversion(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-0 bg-slate-950 border-slate-700"
                />
                <span>💱 Currency Conversion Fee (+1.0%)</span>
              </label>
              <span className="text-slate-500 font-mono">+1.0%</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                <input
                  type="checkbox"
                  checked={isInstantPayout}
                  onChange={(e) => setIsInstantPayout(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-0 bg-slate-950 border-slate-700"
                />
                <span>⚡ Instant Payout to Bank Card (+1.5%)</span>
              </label>
              <span className="text-slate-500 font-mono">+1.5%</span>
            </div>

            <div className="pt-2 border-t border-slate-800/50 flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-400">Total Effective Rate:</span>
              <span className="text-blue-400 font-mono text-sm font-bold">
                {effectiveRate.toFixed(2)}% + ${fixedFee.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Right Output Cards */}
        <div className="lg:col-span-6 space-y-4">
          {/* Card 1: Customer Pays $Amount */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t("ifCustomerPays")} <strong className="text-white font-mono">${amount.toFixed(2)}</strong>:
            </span>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl space-y-1">
                <span className="text-xs font-semibold text-emerald-400">{t("youReceiveNet")}</span>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                  ${netPayout.toFixed(2)}
                </div>
              </div>

              <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl space-y-1">
                <span className="text-xs font-semibold text-rose-400">{t("totalProcessingFee")}</span>
                <div className="text-2xl sm:text-3xl font-black text-rose-400 font-mono">
                  ${normalFee.toFixed(2)}
                </div>
              </div>
            </div>

            {/* Micro Breakdown */}
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-xs space-y-1.5 text-slate-400">
              <div className="flex justify-between">
                <span>Base Processing Fee ({feeRate}%):</span>
                <span className="font-mono text-slate-300">${((amount * feeRate) / 100).toFixed(2)}</span>
              </div>
              {isInternational && (
                <div className="flex justify-between text-amber-400/90">
                  <span>International Surcharge (+1.5%):</span>
                  <span className="font-mono">${((amount * 1.5) / 100).toFixed(2)}</span>
                </div>
              )}
              {isCurrencyConversion && (
                <div className="flex justify-between text-indigo-400/90">
                  <span>Currency Conversion (+1.0%):</span>
                  <span className="font-mono">${((amount * 1.0) / 100).toFixed(2)}</span>
                </div>
              )}
              {isInstantPayout && (
                <div className="flex justify-between text-sky-400/90">
                  <span>Instant Payout (+1.5%):</span>
                  <span className="font-mono">${((amount * 1.5) / 100).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Fixed Transaction Fee:</span>
                <span className="font-mono text-slate-300">${fixedFee.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Reverse Invoice Amount */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950/40 border border-blue-500/30 rounded-2xl p-6 space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" /> {t("toReceiveExactly")} <strong className="text-white font-mono">${amount.toFixed(2)}</strong>:
              </span>
              <button
                onClick={() => handleCopy(reverseInvoice.toFixed(2))}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? t("copied") : t("copyInvoiceAmount")}</span>
              </button>
            </div>

            <div className="flex items-baseline gap-3">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                ${reverseInvoice.toFixed(2)}
              </div>
              <span className="text-xs text-slate-400 font-mono">({t("includesFee")} ${reverseFee.toFixed(2)})</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t("invoiceClientDesc")}
            </p>
          </div>
        </div>
      </div>

      {/* 2026 Stripe Fee Comparison Matrix (SEO Goldmine Table) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-400" /> 2026 Official Stripe Fee Comparison Matrix
          </h3>
          <span className="text-xs text-slate-500">Based on standard US accounts</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase">
                <th className="py-2.5 px-3">Transaction Type</th>
                <th className="py-2.5 px-3">Percentage Fee</th>
                <th className="py-2.5 px-3">Fixed Fee</th>
                <th className="py-2.5 px-3">Effective on $100</th>
                <th className="py-2.5 px-3">Net You Keep</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="py-2.5 px-3 font-sans font-medium text-white">US Domestic Standard Card</td>
                <td className="py-2.5 px-3 text-emerald-400 font-bold">2.9%</td>
                <td className="py-2.5 px-3">$0.30</td>
                <td className="py-2.5 px-3 text-rose-400">$3.20</td>
                <td className="py-2.5 px-3 text-emerald-400 font-bold">$96.80</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="py-2.5 px-3 font-sans font-medium text-white">International Card (Non-US)</td>
                <td className="py-2.5 px-3 text-amber-400 font-bold">4.4% (+1.5%)</td>
                <td className="py-2.5 px-3">$0.30</td>
                <td className="py-2.5 px-3 text-rose-400">$4.70</td>
                <td className="py-2.5 px-3 text-emerald-400 font-bold">$95.30</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="py-2.5 px-3 font-sans font-medium text-white">International + Currency Conversion</td>
                <td className="py-2.5 px-3 text-rose-400 font-bold">5.4% (+2.5%)</td>
                <td className="py-2.5 px-3">$0.30</td>
                <td className="py-2.5 px-3 text-rose-400">$5.70</td>
                <td className="py-2.5 px-3 text-emerald-400 font-bold">$94.30</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="py-2.5 px-3 font-sans font-medium text-white">PayPal Standard Merchant</td>
                <td className="py-2.5 px-3 text-indigo-400 font-bold">3.49%</td>
                <td className="py-2.5 px-3">$0.49</td>
                <td className="py-2.5 px-3 text-rose-400">$3.98</td>
                <td className="py-2.5 px-3 text-emerald-400 font-bold">$96.02</td>
              </tr>
              <tr className="hover:bg-slate-800/40 transition-colors">
                <td className="py-2.5 px-3 font-sans font-medium text-white">Stripe Instant Payout (Debit)</td>
                <td className="py-2.5 px-3 text-sky-400 font-bold">+1.5%</td>
                <td className="py-2.5 px-3">$0.00</td>
                <td className="py-2.5 px-3 text-rose-400">+$1.50</td>
                <td className="py-2.5 px-3 text-emerald-400 font-bold">Immediate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
