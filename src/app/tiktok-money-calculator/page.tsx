import React from "react";
import { Metadata } from "next";
import { getCalculatorById } from "@/lib/calculatorsData";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { TikTokMoneyCalculator } from "@/components/calculators/TikTokMoneyCalculator";

const calc = getCalculatorById("tiktok-money-calculator")!;

export const metadata: Metadata = {
  title: calc.metaTitle,
  description: calc.metaDescription,
  alternates: {
    canonical: `https://calc.puretoolhub.com${calc.path}`,
  },
  openGraph: {
    title: calc.metaTitle,
    description: calc.metaDescription,
    url: `https://calc.puretoolhub.com${calc.path}`,
  },
};

export default function TikTokMoneyPage() {
  return (
    <CalculatorLayout calc={calc}>
      <TikTokMoneyCalculator />
    </CalculatorLayout>
  );
}
