import Head from "next/head";
import { defaultSocialImage, siteName, siteUrl } from "../lib/seo";

export default function SeoHead({ title, description, path, noIndex = false }) {
  const pageTitle = `${title} | ${siteName}`;
  const canonicalUrl = `${siteUrl}${path}`;
  const imageUrl = `${siteUrl}${defaultSocialImage}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/images/site-logo.svg" type="image/svg+xml" />
      <link rel="shortcut icon" href="/images/site-logo.svg" />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
      )}
    </Head>
  );
}
