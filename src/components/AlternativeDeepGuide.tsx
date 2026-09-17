import React from "react";
import Link from "next/link";
import { 
  Globe2, 
  DollarSign, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  CreditCard,
  Percent,
  Layers,
  ShoppingBag
} from "lucide-react";
import { CALCULATORS } from "@/lib/calculatorsData";

interface Props {
  slug: string;
}

export function AlternativeDeepGuide({ slug }: Props) {
  if (slug === "stripe-fee-calculator-international") {
    return (
      <div className="space-y-8 text-slate-300">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Globe2 className="w-3.5 h-3.5" />
            <span>2026 Cross-Border Invoicing Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How Stripe International & Currency Conversion Fees Actually Work
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            When you accept payments from international customers on a US Stripe account, Stripe automatically levies a <strong className="text-white">+1.5% international card fee</strong>. Furthermore, if your customer pays in their local currency (such as EUR, GBP, or CAD) and Stripe converts it to USD, an additional <strong className="text-rose-400">+1.0% currency conversion markup</strong> is added, pushing your effective fee rate to <strong className="text-rose-400">5.4% + $0.30</strong>.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            Domestic vs. Cross-Border Payout Comparison Table (2026)
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-semibold">
                  <th className="p-3.5">Invoice Amount</th>
                  <th className="p-3.5">US Domestic (2.9% + $0.30)</th>
                  <th className="p-3.5">Int'l Card (4.4% + $0.30)</th>
                  <th className="p-3.5">Int'l + Currency Conversion (5.4% + $0.30)</th>
                  <th className="p-3.5">Lost Margin on Int'l</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3.5 font-medium text-white">$100.00</td>
                  <td className="p-3.5 text-emerald-400 font-semibold">$96.80</td>
                  <td className="p-3.5 text-slate-300">$95.30</td>
                  <td className="p-3.5 text-amber-400 font-semibold">$94.30</td>
                  <td className="p-3.5 text-rose-400 font-bold">-$2.50 (-2.5%)</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3.5 font-medium text-white">$500.00</td>
                  <td className="p-3.5 text-emerald-400 font-semibold">$485.20</td>
                  <td className="p-3.5 text-slate-300">$477.70</td>
                  <td className="p-3.5 text-amber-400 font-semibold">$472.70</td>
                  <td className="p-3.5 text-rose-400 font-bold">-$12.50 (-2.5%)</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3.5 font-medium text-white">$2,000.00</td>
                  <td className="p-3.5 text-emerald-400 font-semibold">$1,941.70</td>
                  <td className="p-3.5 text-slate-300">$1,911.70</td>
                  <td className="p-3.5 text-amber-400 font-semibold">$1,891.70</td>
                  <td className="p-3.5 text-rose-400 font-bold">-$50.00 (-2.5%)</td>
                </tr>
                <tr className="hover:bg-slate-900/40">
                  <td className="p-3.5 font-medium text-white">$10,000.00</td>
                  <td className="p-3.5 text-emerald-400 font-semibold">$9,709.70</td>
                  <td className="p-3.5 text-slate-300">$9,559.70</td>
                  <td className="p-3.5 text-amber-400 font-semibold">$9,459.70</td>
                  <td className="p-3.5 text-rose-400 font-bold">-$250.00 (-2.5%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategic Tips */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-400" />
            3 Proven Strategies to Protect Cross-Border Margins
          </h3>
          <ul className="text-xs space-y-2.5 text-slate-300 list-disc list-inside leading-relaxed">
            <li>
              <strong className="text-white">Enable Multi-Currency Bank Accounts:</strong> Add local EUR and GBP bank accounts (e.g. via Wise Business or Mercury) directly to your Stripe Dashboard. When European clients pay in EUR, Stripe settles into your EUR balance without converting currency, saving you 1.0% in FX spreads.
            </li>
            <li>
              <strong className="text-white">Use Surcharge Reverse Gross-Up:</strong> If contractually permissible, calculate the exact gross quote required so you receive your full desired fee after cross-border deductions.
            </li>
            <li>
              <strong className="text-white">Activate Local Payment Rails:</strong> Offer localized bank debit schemes like SEPA Direct Debit (Europe), Bacs (UK), or iDEAL (Netherlands), which frequently carry lower fixed or capped percentage fees compared to international credit cards.
            </li>
          </ul>
        </div>

        {/* Contextual Internal Links */}
        <div className="p-5 rounded-2xl bg-blue-950/20 border border-blue-900/40 text-xs space-y-2 text-slate-400">
          <span className="font-bold text-white block">Related Payment & Billing Solvers:</span>
          <p className="leading-relaxed">
            Need to charge US domestic cards? Check our standard{" "}
            <Link href="/stripe-fee-calculator" className="text-blue-400 underline hover:text-blue-300 font-medium">
              Stripe Fee Calculator (Domestic & Standard)
            </Link>
            . Want to auto-calculate the exact invoice gross-up to net a round figure? Use our{" "}
            <Link href="/stripe-fee-calculator-reverse-invoice" className="text-blue-400 underline hover:text-blue-300 font-medium">
              Stripe Reverse Fee Calculator
            </Link>
            , or compare commercial merchant rates on our{" "}
            <Link href="/paypal-fee-calculator" className="text-blue-400 underline hover:text-blue-300 font-medium">
              PayPal Fee Calculator
            </Link>.
          </p>
        </div>
      </div>
    );
  }

  // Generic Alternative Directory Guide for calculator-net and omni-calculator
  return (
    <div className="space-y-8 text-slate-300">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Generation Online Calculation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Why Modern Creators & Digital Founders Choose CalcHub
        </h2>
        <p className="text-sm leading-relaxed text-slate-400">
          Legacy calculator websites were designed for desktop browsers in the early 2000s, cluttered with intrusive pop-up banners, auto-refreshing video ads, and rigid form reloads. CalcHub was engineered from the ground up to deliver <strong className="text-white">sub-second reactivity</strong>, <strong className="text-white">100% in-browser privacy</strong>, and models specifically tailored to the creator economy and modern business.
        </p>
      </div>

      {/* Directory Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-400" />
          Explore the Full CalcHub Suite of Financial & Creator Tools
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CALCULATORS.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all space-y-1.5 group"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{item.category}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                {item.name}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {item.shortDesc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
