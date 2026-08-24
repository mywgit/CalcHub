"use client";

import React, { useState } from "react";
import { TrendingUp, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SaaSMrrCalculator() {
  const { t } = useLanguage();
  const [currentCustomers, setCurrentCustomers] = useState<number>(100);
  const [arpu, setArpu] = useState<number>(49);
  const [newCustomersMonthly, setNewCustomersMonthly] = useState<number>(15);
  const [churnRate, setChurnRate] = useState<number>(5);

  const currentMrr = currentCustomers * arpu;
  const currentArr = currentMrr * 12;
  const ltv = churnRate > 0 ? arpu / (churnRate / 100) : arpu * 100;
  const customerLifetimeMonths = churnRate > 0 ? Math.round(100 / churnRate) : 100;

  // 12-Month Projection simulation
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  let simulatedUsers = currentCustomers;
  const projection = months.map((m) => {
    const churnedUsers = Math.round(simulatedUsers * (churnRate / 100));
    simulatedUsers = Math.max(0, simulatedUsers + newCustomersMonthly - churnedUsers);
    const mrr = simulatedUsers * arpu;
    return { month: m, users: simulatedUsers, mrr };
  });

  const endMrr = projection[11].mrr;
  const endArr = endMrr * 12;

  return (
    <div className="space-y-6">
      {/* Parameters Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Inputs */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" /> {t("saasInputs")}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">{t("currentActiveUsers")}</label>
              <input
                type="number"
                min={0}
                value={currentCustomers}
                onChange={(e) => setCurrentCustomers(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">{t("arpu")}</label>
              <input
                type="number"
                min={1}
                value={arpu}
                onChange={(e) => setArpu(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">{t("newUsersMonthly")}</label>
              <input
                type="number"
                min={0}
                value={newCustomersMonthly}
                onChange={(e) => setNewCustomersMonthly(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-emerald-400 font-mono text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">{t("monthlyChurn")}</label>
              <input
                type="number"
                min={0.1}
                max={50}
                step={0.5}
                value={churnRate}
                onChange={(e) => setChurnRate(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-rose-400 font-mono text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800/80 text-xs">
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              <span className="text-slate-400 block">{t("customerLifetime")}</span>
              <span className="text-base font-bold text-emerald-400 font-mono">${ltv.toFixed(0)}</span>
              <span className="text-[10px] text-slate-500 block">({customerLifetimeMonths} {t("monthsAvg")})</span>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              <span className="text-slate-400 block">{t("currentArr")}</span>
              <span className="text-base font-bold text-blue-400 font-mono">${currentArr.toLocaleString()}</span>
              <span className="text-[10px] text-slate-500 block">(${currentMrr.toLocaleString()}/mo)</span>
            </div>
          </div>
        </div>

        {/* 12-Month Projection */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-gradient-to-br from-slate-900 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> {t("projected12Month")}
            </span>

            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-slate-400 block">{t("month12Mrr")}</span>
                <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                  ${endMrr.toLocaleString()}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">{t("projectedArr")}</span>
                <span className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">
                  ${endArr.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Simple Bar Chart */}
            <div className="space-y-1 pt-3 border-t border-slate-800">
              <span className="text-[11px] text-slate-400 block font-semibold">{t("growthTrajectory")}</span>
              <div className="grid grid-cols-12 gap-1 items-end h-24 pt-2">
                {projection.map((p) => {
                  const maxMrr = Math.max(...projection.map((x) => x.mrr), 1);
                  const heightPct = Math.max(15, (p.mrr / maxMrr) * 100);
                  return (
                    <div key={p.month} className="flex flex-col items-center gap-1 h-full justify-end group">
                      <div
                        style={{ height: `${heightPct}%` }}
                        className="w-full bg-emerald-500/60 group-hover:bg-emerald-400 rounded-t transition-all"
                        title={`M${p.month}: $${p.mrr.toLocaleString()} (${p.users} users)`}
                      />
                      <span className="text-[9px] text-slate-500 font-mono">M{p.month}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
