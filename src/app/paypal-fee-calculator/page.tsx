import React from "react";
import { Metadata } from "next";
import { getCalculatorById } from "@/lib/calculatorsData";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { PayPalFeeCalculator } from "@/components/calculators/PayPalFeeCalculator";

const calc = getCalculatorById("paypal-fee-calculator")!;

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

export default function PayPalFeePage() {
  return (
    <CalculatorLayout calc={calc}>
      <PayPalFeeCalculator />
    </CalculatorLayout>
  );
}
