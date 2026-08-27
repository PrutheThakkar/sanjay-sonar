import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/seo";
import { seoPageList } from "../lib/seo-pages";

const topLevelPriorities: Record<string, number> = {
  "/": 1,
  "/expertise": 0.9,
  "/consultation": 0.9,
  "/about": 0.8,
  "/teaching": 0.7,
  "/selected-work": 0.7,
  "/gallery": 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return seoPageList.map(({ path }) => ({
    url: `${siteUrl}${path === "/" ? "/" : `${path}/`}`,
    changeFrequency: path === "/" || path === "/expertise" ? "weekly" : "monthly",
    priority: topLevelPriorities[path] ?? 0.8,
  }));
}
