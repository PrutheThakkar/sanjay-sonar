import type { Metadata } from "next";

export const siteName = "Dr. Sanjay Sonar";

export const siteUrl = (() => {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://sanjaysonar.com");

  return configuredUrl.replace(/\/$/, "");
})();

export const defaultDescription =
  "Dr. Sanjay Sonar is a Mumbai-based general and advanced laparoscopic surgeon with more than three decades of experience in complex and minimally invasive surgery.";

export const defaultSocialImage = "/images/Sanjay-Banner-1.jpg";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path === "/" ? "/" : path.replace(/\/$/, "");

  return {
    title,
    description,
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

export const physicianStructuredData = {
  "@context": "https://schema.org",
  "@type": "Physician",
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
