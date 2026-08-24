import type { Metadata } from "next";
import { ALTERNATIVE_PAGES } from "@/lib/alternativeData";
import { AlternativeLayout } from "@/components/AlternativeLayout";
import { PercentageCalculator } from "@/components/calculators/PercentageCalculator";

const data = ALTERNATIVE_PAGES.find((p) => p.slug === "calculator-net-alternative")!;

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDesc,
  alternates: {
    canonical: `https://calc.puretoolhub.com${data.path}`,
  },
  openGraph: {
    title: data.title,
    description: data.metaDesc,
    url: `https://calc.puretoolhub.com${data.path}`,
  },
};

export default function CalculatorNetAlternativePage() {
  return (
    <AlternativeLayout data={data}>
      <PercentageCalculator />
    </AlternativeLayout>
  );
}
