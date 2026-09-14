import type { Metadata } from "next";
import { ALTERNATIVE_PAGES } from "@/lib/alternativeData";
import { AlternativeLayout } from "@/components/AlternativeLayout";
import { StripeFeeCalculator } from "@/components/calculators/StripeFeeCalculator";

const data = ALTERNATIVE_PAGES.find((p) => p.slug === "stripe-fee-calculator-international")!;

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

export default function StripeInternationalFeePage() {
  return (
    <AlternativeLayout data={data}>
      <StripeFeeCalculator />
    </AlternativeLayout>
  );
}
