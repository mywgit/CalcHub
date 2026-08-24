import React from "react";
import { Metadata } from "next";
import { getCalculatorById } from "@/lib/calculatorsData";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { PercentageCalculator } from "@/components/calculators/PercentageCalculator";

const calc = getCalculatorById("percentage-calculator")!;

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

export default function PercentagePage() {
  return (
    <CalculatorLayout calc={calc}>
      <PercentageCalculator />
    </CalculatorLayout>
  );
}
