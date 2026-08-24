import React from "react";
import { Metadata } from "next";
import { getCalculatorById } from "@/lib/calculatorsData";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { StripeFeeCalculator } from "@/components/calculators/StripeFeeCalculator";

const calc = getCalculatorById("stripe-fee-calculator")!;

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

export default function StripeFeePage() {
  return (
    <CalculatorLayout calc={calc}>
      <StripeFeeCalculator />
    </CalculatorLayout>
  );
}
