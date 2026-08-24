import { MetadataRoute } from "next";
import { CALCULATORS } from "@/lib/calculatorsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calc.puretoolhub.com";

  const calcEntries = CALCULATORS.map((calc) => ({
    url: `${baseUrl}${calc.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    ...calcEntries,
  ];
}
