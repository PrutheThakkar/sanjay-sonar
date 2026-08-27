import Link from "next/link";
import Layout from "../../components/Layout";
import SeoSchema from "../../components/SeoSchema";
import { seoPageMetadata } from "../../lib/seo";

export const metadata = seoPageMetadata("/site-map");

const mainPages = [
  { title: "Home", description: "An introduction to Dr. Sanjay Sonar and his surgical practice.", href: "/" },
  { title: "About Dr. Sonar", description: "Experience, qualifications, approach and academic work.", href: "/about/" },
  { title: "Surgical Expertise", description: "An overview of laparoscopic and specialist surgical care.", href: "/expertise/" },
  { title: "Teaching & Training", description: "Surgical education, workshops and academic contribution.", href: "/teaching/" },
  { title: "Gallery", description: "Highlights from clinical, teaching and professional work.", href: "/gallery/" },
  { title: "Selected Work", description: "Selected complex procedures and surgical case stories.", href: "/selected-work/" },
];

const expertisePages = [
  ["General Laparoscopic Surgery", "/expertise/laparoscopic-surgery/"],
  ["Advanced GI Surgery", "/expertise/advanced-gi-surgery/"],
  ["Hernia Surgery", "/expertise/hernia-surgery/"],
  ["Complex Hernia Surgery", "/expertise/complex-hernia-surgery/"],
  ["Laparoscopic Hiatus Hernia Surgery", "/expertise/laparoscopic-hiatus-hernia-surgery/"],
  ["Colorectal Surgery", "/expertise/colorectal-surgery/"],
  ["Laparoscopic Rectopexy", "/expertise/laparoscopic-rectopexy/"],
  ["Laparoscopic Colectomy", "/expertise/laparoscopic-colectomy/"],
  ["Thoracic Surgery", "/expertise/thoracic-surgery/"],
  ["Laparoscopic Thyroid Surgery", "/expertise/laparoscopic-thyroid-surgery/"],
  ["Urological Surgery", "/expertise/urological-surgery/"],
  ["Laparoscopic Pyeloplasty", "/expertise/laparoscopic-pyeloplasty/"],
  ["Laser Treatment for Varicose Veins", "/expertise/laser-treatment-varicose-veins/"],
  ["Laparoscopic Cholecystectomy", "/expertise/laparoscopic-cholecystectomy/"],
  ["Laparoscopic Heller’s Cardiomyotomy", "/expertise/laparoscopic-hellers-cardiomyotomy/"],
];

const consultationPages = [
  { title: "Consultation", description: "Request a surgical consultation or second opinion.", href: "/consultation/" },
];

export default function SiteMapPage() {
  return (
    <main className="inside-page sitemap-page">
      <SeoSchema path="/site-map" />
      <Layout>
        <section className="inside-banner">
          <div className="container">
            <p className="sitemap-eyebrow">Explore the website</p>
            <h1>Site Map</h1>
          </div>
        </section>

        <section className="sitemap-main white-bg">
          <div className="container">
            <div className="sitemap-intro">
              <span>Dr. Sanjay Sonar</span>
              <h2>Find the information you need</h2>
              <p>Browse the main sections of the website or go directly to a surgical specialty or procedure.</p>
            </div>

            <div className="sitemap-grid" aria-label="Main website pages">
              {mainPages.map((item, index) => (
                <Link className="sitemap-card" href={item.href} key={item.href}>
                  <span className="sitemap-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="sitemap-card-copy">
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                  </span>
                  <span className="sitemap-arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="sitemap-expertise green-bg">
          <div className="container">
            <div className="sitemap-section-heading">
              <span>Areas of care</span>
              <h2>Surgical Expertise</h2>
            </div>
            <div className="sitemap-link-list">
              {expertisePages.map(([title, href], index) => (
                <Link href={href} key={href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="sitemap-contact white-bg">
          <div className="container">
            <div className="sitemap-section-heading">
              <span>Get in touch</span>
              <h2>Appointments & Consultation</h2>
            </div>
            <div className="sitemap-contact-grid">
              {consultationPages.map((item) => (
                <Link href={item.href} key={item.href}>
                  <strong>{item.title}</strong>
                  <small>{item.description}</small>
                  <span aria-hidden="true">View page →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}
