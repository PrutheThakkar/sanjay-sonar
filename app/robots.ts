import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: [
        "*",
        "GPTBot",
        "OAI-SearchBot",
        "ChatGPT-User",
        "Claude-SearchBot",
        "PerplexityBot",
        "Google-Extended",
        "meta-externalagent",
      ],
      allow: "/",
      disallow: ["/api/", "/__graphql"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}


