import Image from "next/image";
import Link from "next/link";

const footerNavColumns = [
  {
    heading: "Home",
    links: [
      { label: "About", href: "/about" },
      { label: "Expertise", href: "/expertise" },
      { label: "Teaching", href: "/teaching" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "Selected Work", href: "/selected-work" },
    ],
  },
];

const footerAddress =
  "Police Station, 1877, Dr Anandrao Nair Marg, near Agripada, Mumbai Central, Mumbai, Maharashtra 400011, India";
const footerEmail = "sanjaydrsonar@gmail.com";
const footerPhone = "+91 9323157440";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-brand">
            <Link href="/" className="footer-brand-top">
              <Image
                src="/images/site-logo.svg"
                alt="Dr. Sanjay Sonar"
                width={49}
                height={49}
                className="footer-mark"
              />
              <span className="footer-brand-text">
                <strong>Dr. Sanjay Sonar</strong>
                <em>General Surgeon</em>
              </span>
            </Link>

            <Link href="/consultation" className="footer-consultation-btn site-cta">
              Consultation
            </Link>

            <div className="footer-social">
              <a
                href="https://www.instagram.com/sanjay.sonar?stkn=b2JjZTBrYWZtZG9j"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/dr-sanjay-sonar-356721279/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86V21h-4V9Z" />
                </svg>
              </a>

              <a
                href="http://www.youtube.com/@Dr.Sanjaysonar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
                  <path d="M10.3 9.2v5.6l5-2.8-5-2.8Z" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-nav-columns">
            {footerNavColumns.map((column) => (
              <div className="footer-nav-col" key={column.heading}>
                <span className="footer-col-heading">{column.heading}</span>

                {column.links.map((link) => (
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}

            <div className="footer-nav-col footer-reach-out">
              <span className="footer-col-heading">Reach Out</span>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  footerAddress,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <span className="footer-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
                    <circle cx="12" cy="9.5" r="2.4" />
                  </svg>
                </span>
                See All Locations
              </a>

              <a href={`mailto:${footerEmail}`} className="footer-contact-item">
                <span className="footer-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                    <path d="m3.5 6 8.5 6.5L20.5 6" />
                  </svg>
                </span>
                {footerEmail}
              </a>

              <a
                href={`tel:${footerPhone.replace(/\s+/g, "")}`}
                className="footer-contact-item"
              >
                <span className="footer-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4.5 4h3.6l1.6 4.4-2 1.6a12 12 0 0 0 6.3 6.3l1.6-2 4.4 1.6V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3 5.6 1.5 1.5 0 0 1 4.5 4Z" />
                  </svg>
                </span>
                {footerPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
