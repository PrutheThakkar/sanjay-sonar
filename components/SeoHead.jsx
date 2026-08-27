import Head from "next/head";
import { defaultSocialImage, pageStructuredData, siteName, siteUrl } from "../lib/seo";
import { getSeoPage } from "../lib/seo-pages";

export default function SeoHead({ title, description, path, noIndex = false }) {
  const seo = getSeoPage(path);
  const pageTitle = seo?.title || `${title} | ${siteName}`;
  const pageDescription = seo?.description || description;
  const canonicalPath = seo?.path || path;
  const canonicalUrl = `${siteUrl}${canonicalPath === "/" ? "/" : `${canonicalPath}/`}`;
  const imageUrl = `${siteUrl}${defaultSocialImage}`;
  const keywords = seo ? [seo.focusKeyword, ...seo.secondaryKeywords] : [];

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {!!keywords.length && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="icon" href="/images/site-logo.svg" type="image/svg+xml" />
      <link rel="shortcut icon" href="/images/site-logo.svg" />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
      {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
      )}
      {seo && pageStructuredData(seo).map((data) => (
        <script
          key={data["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
        />
      ))}
    </Head>
  );
}
