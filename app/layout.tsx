import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";
import StructuredData from "../components/StructuredData";
import {
  defaultDescription,
  defaultSocialImage,
  physicianStructuredData,
  siteName,
  siteUrl,
} from "../lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Sanjay Sonar | Advanced Laparoscopic Surgeon in Mumbai",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Healthcare",
  icons: {
    icon: [{ url: "/images/site-logo.svg", type: "image/svg+xml" }],
    shortcut: "/images/site-logo.svg",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName,
    title: "Dr. Sanjay Sonar | Advanced Laparoscopic Surgeon in Mumbai",
    description: defaultDescription,
    images: [{ url: defaultSocialImage, alt: `${siteName}, surgeon in Mumbai` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Sanjay Sonar | Advanced Laparoscopic Surgeon in Mumbai",
    description: defaultDescription,
    images: [defaultSocialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData data={physicianStructuredData} />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
