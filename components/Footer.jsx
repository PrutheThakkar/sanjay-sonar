import Image from "next/image";

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

            <p className="footer-copy">ALL right received 2026</p>
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
              <a href="mailto:appointment@sanjaysonar.com">
                <span className="footer-icon">
                   <Image
              src="/images/email.svg"
              alt="Dr. Sanjay Sonar"
              width={30}
              height={30}
              className="footer-logo"
            />
                </span>
                appointment@sanjaysonar.com
              </a>

              <a href="tel:+918447914579">
                <span className="footer-icon">
                   <Image
              src="/images/call.svg"
              alt="Dr. Sanjay Sonar"
              width={30}
              height={30}
              className="footer-logo"
            />
                </span>
                +91 84479 14579
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}