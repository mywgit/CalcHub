"use client";

import React, { useState } from "react";
import { Briefcase, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function FreelanceRateCalculator() {
  const { t } = useLanguage();
  const [targetSalary, setTargetSalary] = useState<number>(85000);
  const [annualExpenses, setAnnualExpenses] = useState<number>(8000);
  const [taxRate, setTaxRate] = useState<number>(25);
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState<number>(25);
  const [vacationWeeks, setVacationWeeks] = useState<number>(4);

  // Total required pre-tax gross income = (Target Salary + Expenses) / (1 - (Tax Rate / 100))
  const grossNeeded = (targetSalary + annualExpenses) / (1 - (taxRate / 100));
  const workingWeeks = 52 - vacationWeeks;
  const totalBillableHoursYear = workingWeeks * billableHoursPerWeek;

  const hourlyRate = totalBillableHoursYear > 0 ? (grossNeeded / totalBillableHoursYear) : 0;
  const dayRate = hourlyRate * 8;
  const weeklyRetainer = hourlyRate * billableHoursPerWeek;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Inputs */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-purple-400" /> {t("incomeHoursGoals")}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">{t("targetTakeHome")}</label>
              <input
                type="number"
                step={5000}
                value={targetSalary}
                onChange={(e) => setTargetSalary(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">{t("annualOverhead")}</label>
              <input
                type="number"
                step={500}
                value={annualExpenses}
                onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 font-mono text-sm focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">{t("effectiveTaxRate")}</label>
              <input
                type="number"
                step={1}
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-rose-400 font-mono text-sm focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">{t("vacationWeeks")}</label>
              <input
                type="number"
                step={1}
                value={vacationWeeks}
                onChange={(e) => setVacationWeeks(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 font-mono text-sm focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">{t("billableHoursPerWeek")}</span>
              <span className="font-mono text-white font-bold">{billableHoursPerWeek} {t("hrsPerWeek")}</span>
            </div>
            <input
              type="range"
              min={10}
              max={40}
              step={1}
              value={billableHoursPerWeek}
              onChange={(e) => setBillableHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>

        {/* Rate Outputs */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-gradient-to-br from-slate-900 to-purple-950/30 border border-purple-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
            <span className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> {t("recHourlyRate")}
            </span>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                ${hourlyRate.toFixed(2)}
                <span className="text-sm font-normal text-slate-400 ml-2">/ hour</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {totalBillableHoursYear.toLocaleString()} {t("annualBillableHours")}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block">{t("dayRate")}</span>
                <span className="text-lg font-bold text-emerald-400 font-mono">${dayRate.toFixed(0)}</span>
              </div>
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block">{t("weeklyRetainer")}</span>
                <span className="text-lg font-bold text-blue-400 font-mono">${weeklyRetainer.toFixed(0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
