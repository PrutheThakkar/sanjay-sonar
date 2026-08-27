import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-left">
            <Image
              src="/images/sanjay-logo.svg"
              alt="Dr. Sanjay Sonar"
              width={420}
              height={120}
              className="footer-logo"
            />

          </div>

          <div className="footer-right">
            <div className="footer-address">
              <span className="footer-icon">
                <Image
              src="/images/localtion.svg"
              alt="Dr. Sanjay Sonar"
              width={30}
              height={30}
              className="footer-logo"
            />
              </span>
              <p>
                Police Station, 1877, Dr Anandrao Nair Marg, near Agripada,
                Mumbai Central, Mumbai, Maharashtra 400011, India
              </p>
            </div>

            <div className="footer-contact-row">
              <a href="mailto:sanjaydrsonar@gmail.com">
                <span className="footer-icon">
                   <Image
              src="/images/email.svg"
              alt="Dr. Sanjay Sonar"
              width={30}
              height={30}
              className="footer-logo"
            />
                </span>
                sanjaydrsonar@gmail.com
              </a>

              <a href="tel:+919323157440">
                <span className="footer-icon">
                   <Image
              src="/images/call.svg"
              alt="Dr. Sanjay Sonar"
              width={30}
              height={30}
              className="footer-logo"
            />
                </span>
                +91 9323157440
              </a>
            </div>

            <div className="footer-actions">
              <Link href="/consultation" className="footer-consultation-btn site-cta">
                Consultation
              </Link>
              <Link href="/site-map/" className="footer-sitemap-link">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
