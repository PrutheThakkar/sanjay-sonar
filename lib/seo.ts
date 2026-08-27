import type { Metadata } from "next";
import { getSeoPage, type SeoPage } from "./seo-pages";

export const siteName = "Dr. Sanjay Sonar";

export const siteUrl = (() => {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://www.sanjaysonar.com");

  return configuredUrl.replace(/\/$/, "");
})();

export const defaultDescription =
  "Dr. Sanjay Sonar is a Mumbai-based general and advanced laparoscopic surgeon with more than three decades of experience in complex and minimally invasive surgery.";

export const defaultSocialImage = "/images/Sanjay-Banner-1.jpg";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonicalPath,
      siteName,
      title,
      description,
      images: [{ url: defaultSocialImage, alt: `${siteName}, surgeon in Mumbai` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultSocialImage],
    },
  };
}

export function seoPageMetadata(path: string): Metadata {
  const seo = getSeoPage(path);

  if (!seo) throw new Error(`Missing SEO metadata for ${path}`);

  return pageMetadata({
    title: seo.title,
    description: seo.description,
    path: seo.path,
    keywords: [seo.focusKeyword, ...seo.secondaryKeywords],
  });
}

export const physicianStructuredData = {
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalBusiness"],
  "@id": `${siteUrl}/#physician`,
  name: "Dr. Sanjay Sonar",
  url: siteUrl,
  image: `${siteUrl}/images/dr-sanjay-sonar.webp`,
  description: defaultDescription,
  medicalSpecialty: [
    "Surgery",
    "Gastroenterologic",
    "Colorectal",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1877 Dr Anandrao Nair Marg, near Agripada Police Station",
    addressLocality: "Mumbai Central",
    addressRegion: "Maharashtra",
    postalCode: "400011",
    addressCountry: "IN",
  },
  telephone: "+91-84479-14579",
  email: "appointment@sanjaysonar.com",
};

export function pageStructuredData(seo: SeoPage) {
  const canonicalUrl = `${siteUrl}${seo.path === "/" ? "/" : `${seo.path}/`}`;
  const types = seo.schemaTypes.filter((type) => type !== "Physician");

  return types.map((type) => ({
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: seo.title,
    description: seo.description,
    about: { "@id": `${siteUrl}/#physician` },
    mainEntity: { "@id": `${siteUrl}/#physician` },
  }));
}
