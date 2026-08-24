import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  title: "CalcHub - Free Business, Creator & Growth Calculators (2026)",
  description: "Accurate, fast, and 100% in-browser financial and business calculators for Stripe fees, TikTok creator rewards, YouTube revenue, SaaS MRR, and Shopify margins.",
  metadataBase: new URL("https://calc.puretoolhub.com"),
  alternates: {
    canonical: "https://calc.puretoolhub.com",
    languages: {
      "en-US": "https://calc.puretoolhub.com",
      "es-ES": "https://calc.puretoolhub.com",
      "pt-BR": "https://calc.puretoolhub.com",
      "de-DE": "https://calc.puretoolhub.com",
      "fr-FR": "https://calc.puretoolhub.com",
      "ja-JP": "https://calc.puretoolhub.com",
      "zh-CN": "https://calc.puretoolhub.com",
      "x-default": "https://calc.puretoolhub.com",
    },
  },
  openGraph: {
    title: "CalcHub - Business & Creator Calculators",
    description: "Free online calculators for creators, e-commerce, freelancers, and SaaS founders.",
    url: "https://calc.puretoolhub.com",
    siteName: "CalcHub",
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "ejrEjHxYiwD771YUuanwy9u0_QDLMHoqx3P7Ubs4RAo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
