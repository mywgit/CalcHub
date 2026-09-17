import React from "react";
import Link from "next/link";
import { 
  DollarSign, 
  Percent, 
  TrendingUp, 
  Layers, 
  Globe2, 
  Calculator, 
  Zap, 
  BookOpen, 
  ShieldAlert 
} from "lucide-react";

interface Props {
  calculatorId: string;
}

export function CalculatorDeepGuide({ calculatorId }: Props) {
  switch (calculatorId) {
    case "stripe-fee-calculator":
      return (
        <article className="space-y-8 text-slate-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>2026 Merchant Fee Architecture Guide</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Stripe 2026 Processing Fees: Domestic, International & Invoicing Breakdown
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Understanding your effective payment processing rate is crucial for SaaS founders, digital product creators, and e-commerce merchants. While Stripe’s headline rate is <strong className="text-white">2.9% + $0.30</strong> for standard US cards, cross-border transactions, currency exchange spreads, and billing add-ons can quickly push your real deduction over <strong className="text-rose-400">5.4%</strong>.
            </p>
          </div>

          {/* Fee Matrix Table */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              2026 Stripe Official Fee Schedule Comparison
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-semibold">
                    <th className="p-3.5">Transaction Type</th>
                    <th className="p-3.5">Percentage Rate</th>
                    <th className="p-3.5">Fixed Charge</th>
                    <th className="p-3.5">Effective Take-Home on $100</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">US Domestic Standard Card</td>
                    <td className="p-3.5 text-slate-300">2.90%</td>
                    <td className="p-3.5 text-slate-300">$0.30</td>
                    <td className="p-3.5 font-semibold text-emerald-400">$96.80</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">International Card (Same Currency)</td>
                    <td className="p-3.5 text-slate-300">4.40% <span className="text-[10px] text-blue-400">(+1.5% Cross-Border)</span></td>
                    <td className="p-3.5 text-slate-300">$0.30</td>
                    <td className="p-3.5 font-semibold text-emerald-400">$95.30</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">International + Currency Conversion</td>
                    <td className="p-3.5 text-slate-300">5.40% <span className="text-[10px] text-amber-400">(+1.0% FX Spread)</span></td>
                    <td className="p-3.5 text-slate-300">$0.30</td>
                    <td className="p-3.5 font-semibold text-emerald-400">$94.30</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Stripe Invoicing (Plus Plan)</td>
                    <td className="p-3.5 text-slate-300">3.40% <span className="text-[10px] text-purple-400">(+0.5% Invoicing)</span></td>
                    <td className="p-3.5 text-slate-300">$0.30</td>
                    <td className="p-3.5 font-semibold text-emerald-400">$96.30</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">ACH Direct Debit (US Domestic)</td>
                    <td className="p-3.5 text-slate-300">0.80% <span className="text-[10px] text-emerald-400">(Capped at $5.00)</span></td>
                    <td className="p-3.5 text-slate-300">$0.00</td>
                    <td className="p-3.5 font-semibold text-emerald-400">$99.20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Real-World Surcharge & Invoicing Advice */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Calculator className="w-4 h-4 text-blue-400" />
                The Reverse Calculation Formula
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                If you want to receive an exact net amount (e.g. $500.00), billing $500 directly will leave you with only $485.20. To offset the 2.9% + $0.30 fee, use the reverse formula:
              </p>
              <div className="bg-slate-950 p-2.5 rounded-lg text-[11px] font-mono text-emerald-400 border border-slate-800/80">
                Invoice = (Target Net + $0.30) / (1 - 0.029) = $515.24
              </div>
              <p className="text-[11px] text-slate-400">
                Need to invoice client with auto reverse deduction? Use our{" "}
                <Link href="/stripe-fee-calculator-reverse-invoice" className="text-blue-400 underline hover:text-blue-300">
                  Stripe Reverse Fee Calculator
                </Link>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-purple-400" />
                Global Clients & Cross-Border Optimization
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Selling software or consulting overseas? European consumer card regulations (Interchange Fee Regulation) cap domestic interchange at 0.2%-0.3%, but cross-border cards trigger Stripe’s 1.5% international surcharge.
              </p>
              <p className="text-[11px] text-slate-400">
                See our comprehensive guide and rate checker on the{" "}
                <Link href="/stripe-fee-calculator-international" className="text-blue-400 underline hover:text-blue-300">
                  Stripe International Fee Calculator
                </Link>{" "}
                or compare merchant deductions with{" "}
                <Link href="/paypal-fee-calculator" className="text-blue-400 underline hover:text-blue-300">
                  PayPal Fee Calculator
                </Link>.
              </p>
            </div>
          </div>

          {/* Actionable Tips */}
          <div className="p-6 rounded-2xl bg-blue-950/20 border border-blue-900/40 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              3 Ways to Legally Reduce Stripe Processing Fees in 2026
            </h4>
            <ul className="text-xs space-y-2 text-slate-300 list-disc list-inside leading-relaxed">
              <li>
                <strong className="text-white">Incentivize ACH or Bank Transfers:</strong> For B2B contracts over $1,000, encourage ACH Direct Debit. Because ACH is capped at $5.00, a $5,000 transaction costs just $5 instead of $145.30!
              </li>
              <li>
                <strong className="text-white">Multi-Currency Bank Settlement:</strong> If you receive substantial revenue in EUR or GBP, configure native currency bank settlement accounts within Stripe to eliminate the 1% dynamic currency conversion spread.
              </li>
              <li>
                <strong className="text-white">Request Interchange-Plus Custom Volume Pricing:</strong> Once your monthly processing volume surpasses $80,000 - $100,000, contact Stripe sales to request custom interchange-plus tiered pricing.
              </li>
            </ul>
          </div>
        </article>
      );

    case "percentage-calculator":
      return (
        <article className="space-y-8 text-slate-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Percent className="w-3.5 h-3.5" />
              <span>Foundational Financial Math</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Profit Margin vs. Markup: The Critical Distinction Founders Must Know
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              One of the most dangerous financial mistakes in business is conflating <strong className="text-white">Profit Margin</strong> with <strong className="text-white">Markup</strong>. Setting a 30% markup on a $100 wholesale product produces a selling price of $130, but yields a profit margin of only 23.08%—which can easily push an e-commerce brand into the red once ad spend and merchant fees are deducted.
            </p>
          </div>

          {/* Quick Conversion Matrix */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              Markup to Margin Fast Conversion Matrix
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-semibold">
                    <th className="p-3.5">Cost of Goods (COGS)</th>
                    <th className="p-3.5">Markup Percentage</th>
                    <th className="p-3.5">Retail Selling Price</th>
                    <th className="p-3.5">Gross Profit ($)</th>
                    <th className="p-3.5">True Profit Margin (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 text-white">$100.00</td>
                    <td className="p-3.5 text-blue-400 font-semibold">15.0%</td>
                    <td className="p-3.5 text-slate-300">$115.00</td>
                    <td className="p-3.5 text-slate-300">$15.00</td>
                    <td className="p-3.5 font-bold text-emerald-400">13.04%</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 text-white">$100.00</td>
                    <td className="p-3.5 text-blue-400 font-semibold">25.0%</td>
                    <td className="p-3.5 text-slate-300">$125.00</td>
                    <td className="p-3.5 text-slate-300">$25.00</td>
                    <td className="p-3.5 font-bold text-emerald-400">20.00%</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 text-white">$100.00</td>
                    <td className="p-3.5 text-blue-400 font-semibold">50.0%</td>
                    <td className="p-3.5 text-slate-300">$150.00</td>
                    <td className="p-3.5 text-slate-300">$50.00</td>
                    <td className="p-3.5 font-bold text-emerald-400">33.33%</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 text-white">$100.00</td>
                    <td className="p-3.5 text-blue-400 font-semibold">100.0% (Keystone)</td>
                    <td className="p-3.5 text-slate-300">$200.00</td>
                    <td className="p-3.5 text-slate-300">$100.00</td>
                    <td className="p-3.5 font-bold text-emerald-400">50.00%</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 text-white">$100.00</td>
                    <td className="p-3.5 text-blue-400 font-semibold">300.0%</td>
                    <td className="p-3.5 text-slate-300">$400.00</td>
                    <td className="p-3.5 text-slate-300">$300.00</td>
                    <td className="p-3.5 font-bold text-emerald-400">75.00%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mathematical Formulas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase">Margin Formula</span>
              <p className="font-mono text-xs text-white bg-slate-950 p-2 rounded border border-slate-800">
                ((Price - Cost) / Price) × 100
              </p>
              <p className="text-[11px] text-slate-400">Expressed as a fraction of the selling price.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase">Markup Formula</span>
              <p className="font-mono text-xs text-white bg-slate-950 p-2 rounded border border-slate-800">
                ((Price - Cost) / Cost) × 100
              </p>
              <p className="text-[11px] text-slate-400">Expressed as a percentage added to COGS.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-purple-400 uppercase">% Change Formula</span>
              <p className="font-mono text-xs text-white bg-slate-950 p-2 rounded border border-slate-800">
                ((New - Old) / Old) × 100
              </p>
              <p className="text-[11px] text-slate-400">For YoY growth or discount adjustments.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-2">
            <span className="font-bold text-white block">Connected Business Tools:</span>
            <p className="text-slate-400 leading-relaxed">
              Planning your product pricing strategy? Simulate net profitability with ad spend on our{" "}
              <Link href="/shopify-profit-calculator" className="text-blue-400 underline hover:text-blue-300">
                Shopify Profit Calculator
              </Link>, or model subscription growth with our{" "}
              <Link href="/saas-mrr-calculator" className="text-blue-400 underline hover:text-blue-300">
                SaaS MRR & Churn Calculator
              </Link>.
            </p>
          </div>
        </article>
      );

    case "saas-mrr-calculator":
      return (
        <article className="space-y-8 text-slate-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>SaaS Growth & Unit Economics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              2026 SaaS Financial Metrics: Churn, LTV, CAC & The Rule of 40
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              For recurring revenue businesses, Monthly Recurring Revenue (MRR) is only half the story. Top venture capital firms and strategic acquirers evaluate software companies based on their <strong className="text-white">Net Revenue Retention (NRR)</strong>, <strong className="text-white">SaaS Quick Ratio</strong>, and <strong className="text-white">LTV:CAC ratio</strong>.
            </p>
          </div>

          {/* Benchmark Table */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              SaaS Health Scorecard Benchmarks (2026)
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-semibold">
                    <th className="p-3.5">Metric</th>
                    <th className="p-3.5">Poor / High Risk</th>
                    <th className="p-3.5">Good / Healthy</th>
                    <th className="p-3.5">Elite / Top Quartile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Monthly Logo Churn (B2B SMB)</td>
                    <td className="p-3.5 text-rose-400">&gt; 5.0%</td>
                    <td className="p-3.5 text-amber-400">2.0% - 3.5%</td>
                    <td className="p-3.5 font-bold text-emerald-400">&lt; 1.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Monthly Logo Churn (Enterprise)</td>
                    <td className="p-3.5 text-rose-400">&gt; 2.0%</td>
                    <td className="p-3.5 text-amber-400">0.8% - 1.2%</td>
                    <td className="p-3.5 font-bold text-emerald-400">&lt; 0.5%</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">LTV to CAC Ratio</td>
                    <td className="p-3.5 text-rose-400">&lt; 2.0x</td>
                    <td className="p-3.5 text-amber-400">3.0x - 4.5x</td>
                    <td className="p-3.5 font-bold text-emerald-400">&gt; 5.0x</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">CAC Payback Period</td>
                    <td className="p-3.5 text-rose-400">&gt; 18 months</td>
                    <td className="p-3.5 text-amber-400">10 - 14 months</td>
                    <td className="p-3.5 font-bold text-emerald-400">&lt; 8 months</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">SaaS Quick Ratio</td>
                    <td className="p-3.5 text-rose-400">&lt; 2.0</td>
                    <td className="p-3.5 text-amber-400">2.5 - 4.0</td>
                    <td className="p-3.5 font-bold text-emerald-400">&gt; 4.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-400" />
              How the SaaS Quick Ratio Determines Growth Efficiency
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              The Quick Ratio compares your growth engine against your churn leak:
            </p>
            <div className="bg-slate-950 p-3 rounded-lg text-xs font-mono text-emerald-400 border border-slate-800">
              Quick Ratio = (New MRR + Expansion MRR) / (Churned MRR + Contraction MRR)
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              If your Quick Ratio is below 2.0, you are adding 2 dollars of revenue for every dollar leaking out—meaning your growth will inevitably plateau. Scaling past $1M ARR requires keeping your Quick Ratio above 4.0.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            Billing your software clients via recurring payments? Compute your processing overhead with our{" "}
            <Link href="/stripe-fee-calculator" className="text-blue-400 underline hover:text-blue-300">
              Stripe Fee Calculator
            </Link>{" "}
            or assess consultant billings with our{" "}
            <Link href="/freelance-rate-calculator" className="text-blue-400 underline hover:text-blue-300">
              Freelance Hourly Rate Calculator
            </Link>.
          </div>
        </article>
      );

    case "tiktok-money-calculator":
      return (
        <article className="space-y-8 text-slate-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Creator Economy & Short-Form Video</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              TikTok Creator Rewards Program (2026): What Determines Your Payout?
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Following TikTok’s complete sunset of the original Creator Fund, the revamped <strong className="text-white">Creator Rewards Program</strong> now pays creators substantially higher rates—often between <strong className="text-emerald-400">$0.40 and $1.20 per 1,000 qualified views</strong>. However, strict qualification rules mean that not all video views generate revenue.
            </p>
          </div>

          {/* Qualified Views Breakdown */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              The 4 Mandatory Criteria for a "Qualified View"
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-blue-400">1. Video Length &gt; 60 Seconds</span>
                <p className="text-xs text-slate-400">Videos under 1 minute are completely ineligible for Creator Rewards Program payouts.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-emerald-400">2. 5-Second Watch Threshold</span>
                <p className="text-xs text-slate-400">The viewer must watch at least 5 continuous seconds of the video without swiping away.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-purple-400">3. Organic "For You" Feed</span>
                <p className="text-xs text-slate-400">Views from paid promotion (Spark Ads) or shared external links do not qualify for ad pool payouts.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-amber-400">4. Unique Viewer Per 24h</span>
                <p className="text-xs text-slate-400">Repeated loops by the same account within a 24-hour window count as only 1 qualified view.</p>
              </div>
            </div>
          </div>

          {/* Geo RPM Table */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-blue-400" />
              2026 TikTok RPM Benchmarks by Viewer Geography
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-semibold">
                    <th className="p-3.5">Audience Geography</th>
                    <th className="p-3.5">Typical RPM (per 1,000 views)</th>
                    <th className="p-3.5">Estimated Earnings per 1M Views</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">United States & Canada</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$0.75 - $1.40</td>
                    <td className="p-3.5 text-white font-semibold">$750 - $1,400</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">United Kingdom & Germany</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$0.50 - $0.95</td>
                    <td className="p-3.5 text-white font-semibold">$500 - $950</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">France, Spain & Italy</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$0.35 - $0.70</td>
                    <td className="p-3.5 text-white font-semibold">$350 - $700</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Latin America (Brazil, Mexico)</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$0.10 - $0.25</td>
                    <td className="p-3.5 text-white font-semibold">$100 - $250</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">South / Southeast Asia</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$0.03 - $0.12</td>
                    <td className="p-3.5 text-white font-semibold">$30 - $120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            Publishing video content on both platforms? Compare short-form and long-form monetization using our{" "}
            <Link href="/youtube-money-calculator" className="text-blue-400 underline hover:text-blue-300">
              YouTube Revenue Calculator
            </Link>.
          </div>
        </article>
      );

    case "youtube-money-calculator":
      return (
        <article className="space-y-8 text-slate-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>YouTube Partner Program (YPP)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              YouTube CPM vs. RPM Explained: 2026 Industry Benchmarks by Content Niche
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              On YouTube, <strong className="text-white">CPM (Cost Per Mille)</strong> is what advertisers pay for 1,000 ad impressions, while <strong className="text-white">RPM (Revenue Per Mille)</strong> is what you actually pocket after YouTube’s 45% platform split and including views where no ads were served. Knowing your niche’s typical RPM is essential for forecasting channel income.
            </p>
          </div>

          {/* 2026 Niche Table */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              2026 YouTube RPM Benchmark by Niche (Long-Form Videos)
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-semibold">
                    <th className="p-3.5">Content Category</th>
                    <th className="p-3.5">Typical Long-Form RPM</th>
                    <th className="p-3.5">Earnings per 100k Views</th>
                    <th className="p-3.5">Primary Advertiser Types</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Personal Finance, Investing & Crypto</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$12.00 - $28.00</td>
                    <td className="p-3.5 text-white font-semibold">$1,200 - $2,800</td>
                    <td className="p-3.5 text-slate-400">Banks, FinTech, Brokers, Credit Cards</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">B2B SaaS, Coding & Tech Reviews</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$8.50 - $18.00</td>
                    <td className="p-3.5 text-white font-semibold">$850 - $1,800</td>
                    <td className="p-3.5 text-slate-400">Cloud Hosting, Dev Tools, VPNs</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Real Estate & Mortgages</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$10.00 - $24.00</td>
                    <td className="p-3.5 text-white font-semibold">$1,000 - $2,400</td>
                    <td className="p-3.5 text-slate-400">Lenders, Title Companies, Insurers</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Health, Fitness & Supplementation</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$4.00 - $8.50</td>
                    <td className="p-3.5 text-white font-semibold">$400 - $850</td>
                    <td className="p-3.5 text-slate-400">Supplements, Athleisure, Wellness Apps</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Gaming, Animation & Vlogs</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$1.80 - $4.50</td>
                    <td className="p-3.5 text-white font-semibold">$180 - $450</td>
                    <td className="p-3.5 text-slate-400">Mobile Games, Snacks, Apparel</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">YouTube Shorts (All Niches)</td>
                    <td className="p-3.5 text-amber-400 font-bold">$0.04 - $0.09</td>
                    <td className="p-3.5 text-white font-semibold">$4 - $9</td>
                    <td className="p-3.5 text-slate-400">Shorts Pooled Revenue Share</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-red-400" />
              The 8-Minute Video Threshold
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Videos longer than 8 minutes can have manually placed mid-roll ad slots. Adding 2 thoughtful mid-rolls at natural pauses typically increases your video RPM by <strong className="text-white">60% to 110%</strong> compared to videos under 8 minutes that only run pre-roll and post-roll ads.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            Also posting short vertical clips? Check your short-form RPM with our{" "}
            <Link href="/tiktok-money-calculator" className="text-blue-400 underline hover:text-blue-300">
              TikTok Creator Rewards Calculator
            </Link>.
          </div>
        </article>
      );

    case "amazon-fba-calculator":
      return (
        <article className="space-y-8 text-slate-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Layers className="w-3.5 h-3.5" />
              <span>Amazon Seller Central 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Amazon FBA Fee Structure (2026): Referral, Pick & Pack, and Low-Inventory Fees
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Selling physical products on Amazon FBA (Fulfillment by Amazon) offers unparalleled Prime delivery reach, but Amazon’s complex fee matrix can absorb 35% to 55% of your gross selling price. In 2024–2026, Amazon introduced new <strong className="text-white">Low-Inventory-Level Fees</strong> and restructured inbound placement fees.
            </p>
          </div>

          {/* Fee Breakdown Table */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              2026 Core FBA Fee Categories
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-semibold">
                    <th className="p-3.5">Fee Category</th>
                    <th className="p-3.5">Standard Rate (2026)</th>
                    <th className="p-3.5">Impact on $30 Retail Item</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Referral Fee (Most Categories)</td>
                    <td className="p-3.5 text-slate-300">15% of total sales price</td>
                    <td className="p-3.5 font-semibold text-rose-400">-$4.50</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">FBA Pick & Pack (Large Standard 1 lb)</td>
                    <td className="p-3.5 text-slate-300">$3.86 - $4.45 per unit</td>
                    <td className="p-3.5 font-semibold text-rose-400">-$4.15</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Monthly Storage Fee (Off-Peak Jan-Sep)</td>
                    <td className="p-3.5 text-slate-300">$0.78 / cubic foot / month</td>
                    <td className="p-3.5 font-semibold text-rose-400">-$0.25</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Low-Inventory-Level Fee (&lt;28 days)</td>
                    <td className="p-3.5 text-slate-300">$0.32 - $0.89 per shipped unit</td>
                    <td className="p-3.5 font-semibold text-rose-400">-$0.45 (if out of stock risk)</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Sponsored Products (PPC Ad Spend)</td>
                    <td className="p-3.5 text-slate-300">15% - 25% target ACoS</td>
                    <td className="p-3.5 font-semibold text-rose-400">-$6.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            Considering selling via your own direct-to-consumer store instead? Model your independent margins with our{" "}
            <Link href="/shopify-profit-calculator" className="text-blue-400 underline hover:text-blue-300">
              Shopify Profit Calculator
            </Link>{" "}
            or check payment processing costs on{" "}
            <Link href="/stripe-fee-calculator" className="text-blue-400 underline hover:text-blue-300">
              Stripe Fee Calculator
            </Link>.
          </div>
        </article>
      );

    case "shopify-profit-calculator":
      return (
        <article className="space-y-8 text-slate-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>DTC Unit Economics & Margin Health</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              E-Commerce Profitability Blueprint: Blended ROAS, CAC & Net Take-Home
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              In DTC (direct-to-consumer) e-commerce, high revenue often conceals zero net profit. True profitability requires accounting for product landed cost (COGS), pick-and-pack fulfillment, paid social ad acquisition (Meta/TikTok CAC), payment processing fees (2.9% + $0.30), and customer return rates (typically 5% to 15%).
            </p>
          </div>

          {/* Breakeven ROAS Table */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Percent className="w-4 h-4 text-blue-400" />
              Breakeven Return on Ad Spend (ROAS) Benchmark Table
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-semibold">
                    <th className="p-3.5">Product Gross Margin %</th>
                    <th className="p-3.5">Breakeven ROAS</th>
                    <th className="p-3.5">Target Scaling ROAS (20% Net Profit)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">40% Gross Margin</td>
                    <td className="p-3.5 text-rose-400 font-bold">2.50x</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">5.00x</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">50% Gross Margin</td>
                    <td className="p-3.5 text-rose-400 font-bold">2.00x</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">3.33x</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">65% Gross Margin</td>
                    <td className="p-3.5 text-rose-400 font-bold">1.54x</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">2.22x</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">80% Gross Margin (High-Ticket / Cosmetics)</td>
                    <td className="p-3.5 text-rose-400 font-bold">1.25x</td>
                    <td className="p-3.5 text-emerald-400 font-semibold">1.67x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            Compare Shopify store unit economics with Amazon marketplace fulfillment on our{" "}
            <Link href="/amazon-fba-calculator" className="text-blue-400 underline hover:text-blue-300">
              Amazon FBA Calculator
            </Link>{" "}
            or master margin formulas with our{" "}
            <Link href="/percentage-calculator" className="text-blue-400 underline hover:text-blue-300">
              Percentage & Markup Calculator
            </Link>.
          </div>
        </article>
      );

    case "paypal-fee-calculator":
      return (
        <article className="space-y-8 text-slate-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>PayPal Commercial Rates (2026)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              PayPal Merchant Fee Guide: Goods & Services vs. PayPal Checkout
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              PayPal remains a dominant checkout option across global e-commerce, but its merchant fee schedule differs markedly from Stripe. Understanding transaction fixed fees, standard checkout rates, and cross-border adjustments is critical for calculating true payout margins.
            </p>
          </div>

          {/* Table */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              PayPal 2026 Core Fee Schedule
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-semibold">
                    <th className="p-3.5">Payment Method</th>
                    <th className="p-3.5">US Domestic Rate</th>
                    <th className="p-3.5">International Card</th>
                    <th className="p-3.5">Fixed Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">PayPal Checkout / Invoicing</td>
                    <td className="p-3.5 text-slate-300">3.49%</td>
                    <td className="p-3.5 text-blue-400 font-semibold">4.99% (+1.50%)</td>
                    <td className="p-3.5 text-slate-300">$0.49</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Standard Goods & Services (P2P)</td>
                    <td className="p-3.5 text-slate-300">2.99%</td>
                    <td className="p-3.5 text-blue-400 font-semibold">4.49% (+1.50%)</td>
                    <td className="p-3.5 text-slate-300">$0.49</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Venmo for Business</td>
                    <td className="p-3.5 text-slate-300">1.90%</td>
                    <td className="p-3.5 text-slate-400">N/A (US only)</td>
                    <td className="p-3.5 text-slate-300">$0.10</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Charity / 501(c)(3) Discount</td>
                    <td className="p-3.5 text-slate-300">1.99%</td>
                    <td className="p-3.5 text-blue-400 font-semibold">3.49% (+1.50%)</td>
                    <td className="p-3.5 text-slate-300">$0.49</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            Compare merchant processing deductions side-by-side with our{" "}
            <Link href="/stripe-fee-calculator" className="text-blue-400 underline hover:text-blue-300">
              Stripe Fee Calculator
            </Link>{" "}
            or check invoice gross-ups with our{" "}
            <Link href="/stripe-fee-calculator-reverse-invoice" className="text-blue-400 underline hover:text-blue-300">
              Reverse Invoice Calculator
            </Link>.
          </div>
        </article>
      );

    case "etsy-fee-calculator":
      return (
        <article className="space-y-8 text-slate-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Etsy Seller Economics (2026)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Etsy 2026 Seller Fee Schedule: Listing, Transaction & Offsite Ads
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Selling handmade, vintage, or digital craft goods on Etsy involves multiple layered deductions. Beyond the headline 6.5% transaction fee, sellers must account for listing renewals, domestic payment processing, and mandatory Offsite Ads fees for high-volume shops.
            </p>
          </div>

          {/* Table */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              Complete Etsy Fee Structure
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-semibold">
                    <th className="p-3.5">Fee Type</th>
                    <th className="p-3.5">Rate / Amount</th>
                    <th className="p-3.5">Application Rule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Listing Fee</td>
                    <td className="p-3.5 text-slate-300">$0.20 flat</td>
                    <td className="p-3.5 text-slate-400">Renews every 4 months or each time a quantity sells</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Transaction Fee</td>
                    <td className="p-3.5 text-slate-300">6.50%</td>
                    <td className="p-3.5 text-slate-400">Applied to item price + shipping charge + gift wrapping</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Etsy Payments Processing</td>
                    <td className="p-3.5 text-slate-300">3.00% + $0.25</td>
                    <td className="p-3.5 text-slate-400">Standard rate for US domestic card orders</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Offsite Ads Fee (&lt;$10k sales)</td>
                    <td className="p-3.5 text-amber-400 font-semibold">15.00% (Optional)</td>
                    <td className="p-3.5 text-slate-400">Only charged when an order originates from Google/Meta ads</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">Offsite Ads Fee (&gt;$10k sales)</td>
                    <td className="p-3.5 text-rose-400 font-semibold">12.00% (Mandatory)</td>
                    <td className="p-3.5 text-slate-400">Mandatory lifetime enrollment once trailing 12mo &gt; $10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            Valuing your handmade craft time? Calculate realistic hourly earnings with our{" "}
            <Link href="/freelance-rate-calculator" className="text-blue-400 underline hover:text-blue-300">
              Freelance Hourly Rate Calculator
            </Link>{" "}
            or master retail markups with our{" "}
            <Link href="/percentage-calculator" className="text-blue-400 underline hover:text-blue-300">
              Markup & Margin Calculator
            </Link>.
          </div>
        </article>
      );

    case "freelance-rate-calculator":
      return (
        <article className="space-y-8 text-slate-300">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Independent Consulting Blueprint</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              The Freelancer Hourly Rate Blueprint: Accounting for Taxes, Overhead & Billable Hours
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Transitioning from corporate employment to freelancing requires rethinking compensation. A $50/hour rate as an employee is not equivalent to a $50/hour freelance rate. Freelancers must absorb self-employment taxes (15.3%), non-billable administrative hours (typically 35% of total time), health insurance, software licenses, and unpaid vacation.
            </p>
          </div>

          {/* Table */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Employee Salary vs. Equivalent Freelance Hourly Rate (2026)
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-semibold">
                    <th className="p-3.5">Former Annual Salary</th>
                    <th className="p-3.5">Nominal W-2 Hourly ($)</th>
                    <th className="p-3.5">Minimum Freelance Rate (1.5x)</th>
                    <th className="p-3.5">Recommended Sustainable Rate (2.0x)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">$60,000 / year</td>
                    <td className="p-3.5 text-slate-300">$28.85 / hr</td>
                    <td className="p-3.5 text-amber-400 font-semibold">$45.00 / hr</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$60.00 / hr</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">$90,000 / year</td>
                    <td className="p-3.5 text-slate-300">$43.27 / hr</td>
                    <td className="p-3.5 text-amber-400 font-semibold">$68.00 / hr</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$90.00 / hr</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">$120,000 / year</td>
                    <td className="p-3.5 text-slate-300">$57.69 / hr</td>
                    <td className="p-3.5 text-amber-400 font-semibold">$90.00 / hr</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$120.00 / hr</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40">
                    <td className="p-3.5 font-medium text-white">$160,000 / year</td>
                    <td className="p-3.5 text-slate-300">$76.92 / hr</td>
                    <td className="p-3.5 text-amber-400 font-semibold">$120.00 / hr</td>
                    <td className="p-3.5 text-emerald-400 font-bold">$160.00 / hr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            Invoicing international clients? Calculate payment gateway deductions using our{" "}
            <Link href="/stripe-fee-calculator" className="text-blue-400 underline hover:text-blue-300">
              Stripe Fee Calculator
            </Link>{" "}
            or compute exact client quotes with our{" "}
            <Link href="/stripe-fee-calculator-reverse-invoice" className="text-blue-400 underline hover:text-blue-300">
              Reverse Invoice Calculator
            </Link>.
          </div>
        </article>
      );

    default:
      return null;
  }
}
