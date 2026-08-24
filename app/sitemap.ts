import type { MetadataRoute } from "next";
import { getExpertiseItems } from "../lib/wordpress";
import { siteUrl } from "../lib/seo";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/expertise", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/teaching", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/selectedwork", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/publications", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/Consultation", priority: 0.9, changeFrequency: "monthly" as const },
];

const fallbackExpertiseSlugs = [
  "laparoscopic-hellers-cardiomyotomy",
  "laparoscopic-hiatus-hernia-surgery",
  "advanced-gi-surgery",
  "complex-hernia-repair",
  "recurrent-hernia-surgery",
  "laparoscopic-rectopexy",
  "laparoscopic-colectomy",
  "laparoscopic-cholecystectomy",
  "laparoscopic-appendicectomy",
  "laparoscopic-thyroid-surgery",
  "pyeloplasty",
  "laser-treatment-for-varicose-veins",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let expertiseSlugs = fallbackExpertiseSlugs;

  try {
    const expertiseItems = await getExpertiseItems();
    if (expertiseItems.length) {
      expertiseSlugs = Array.from(
        new Set([
          ...fallbackExpertiseSlugs,
          ...expertiseItems.map((item: { slug: string }) => item.slug),
        ]),
      );
    }
  } catch (error) {
    console.warn("Unable to add WordPress expertise pages to sitemap:", error);
  }

  return [
    ...staticRoutes.map(({ path, ...route }) => ({
      url: `${siteUrl}${path}`,
      ...route,
    })),
    ...expertiseSlugs.map((slug) => ({
      url: `${siteUrl}/expertise/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
