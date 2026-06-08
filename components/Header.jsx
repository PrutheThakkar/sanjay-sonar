"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home", width: "30%" },
  { label: "About", href: "/about", width: "45%" },
  { label: "Expertise", href: "/expertise", width: "65%" },
  { label: "Teaching", href: "/teaching", width: "75%" },
  { label: "Publications", href: "/publications", width: "85%" },
  { label: "Selected Work", href: "/selectedwork", width: "100%" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="brand">
          <div className="logo">
            <Image
              src="/images/sanjay-logo.svg"
              alt="Dr. Sanjay Sonar Logo"
              width={232}
              height={52}
              priority
            />
          </div>
        </div>

        <nav className="nav">
          {links.map((link) => {
            const style = { "--underline-width": link.width };
            if (link.href && link.href.startsWith("/")) {
              return (
                <Link key={link.label} href={link.href} className="navLink" style={style}>
                  {link.label}
                </Link>
              );
            }

            return (
              <a key={link.label} href={link.href} className="navLink" style={style}>
                {link.label}
              </a>
            );
          })}
        </nav>
      

        <Link href="/Consultation" className="cta">
          Consultation
        </Link>

        <button
          className={`menuBtn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
        <nav className="mobileNav">
          {links.map((link) => {
            if (link.href && link.href.startsWith("/")) {
              return (
                <Link key={link.label} href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              );
            }

            return (
              <a key={link.label} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            );
          })}

          <Link href="/Consultation" className="mobileCta" onClick={closeMenu}>
            Consultation
          </Link>
        </nav>
      </div>
    </>
  );
}