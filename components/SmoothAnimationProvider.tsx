"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import Lenis from "lenis";
import AOS from "aos";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

const cardSelector = [
  ".expertise-item",
  ".procedure-card",
  ".evaluated-card",
  ".expect-item",
  ".gallery-card",
  ".publication-card",
  ".tp-row",
  ".about-story-row",
].join(",");

export default function SmoothAnimationProvider() {
  const pathname = usePathname();
  const [showPreloader, setShowPreloader] = useState(true);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("is-preloading");

    if (reduceMotion) {
      const frameId = requestAnimationFrame(() => {
        document.body.classList.remove("is-preloading");
        setShowPreloader(false);
        setPageReady(true);
      });

      return () => cancelAnimationFrame(frameId);
    }

    const timeline = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        document.body.classList.remove("is-preloading");
        setShowPreloader(false);
        setPageReady(true);
      },
    });

    timeline
      .fromTo(
        ".brand-preloader__orbit",
        { scale: 0.55, opacity: 0, rotate: -35 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.8 },
      )
      .fromTo(
        ".brand-preloader__logo",
        { y: 18, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.65 },
        "-=0.45",
      )
      .fromTo(
        ".brand-preloader__label",
        { y: 10, opacity: 0, letterSpacing: "0.5em" },
        { y: 0, opacity: 1, letterSpacing: "0.28em", duration: 0.5 },
        "-=0.3",
      )
      .fromTo(
        ".brand-preloader__progress span",
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "power2.inOut" },
        "-=0.2",
      )
      .to(".brand-preloader__content", {
        y: -16,
        opacity: 0,
        duration: 0.35,
        delay: 0.1,
      })
      .to(
        ".brand-preloader",
        { yPercent: -100, duration: 0.85, ease: "power4.inOut" },
        "-=0.05",
      );

    return () => {
      timeline.kill();
      document.body.classList.remove("is-preloading");
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    if (!pageReady) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(
        ".main > section:not(.hero):not(.inside-banner)",
      );

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 98%",
              end: "top 40%",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      gsap.fromTo(
        ".header",
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "all" },
      );

      gsap.fromTo(
        ".inside-banner h1",
        { y: 45, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", clearProps: "all" },
      );

      gsap.utils
        .toArray<HTMLElement>("section:not(.hero) h2")
        .forEach((heading) => {
          gsap.fromTo(
            heading,
            { "--heading-line-scale": 0 },
            {
              "--heading-line-scale": 0.4,
              duration: 1.1,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: heading,
                start: "top 90%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>("section:not(.hero) h2:not([data-aos]), section:not(.hero) h3:not([data-aos])")
        .filter((element) => !element.closest(".gsap-case-card"))
        .forEach((element) => {
          gsap.fromTo(
            element,
            { y: 34, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              clearProps: "transform,opacity",
              scrollTrigger: { trigger: element, start: "top 88%", once: true },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>(cardSelector)
        .filter(
          (element) =>
            !element.hasAttribute("data-aos") &&
            !element.closest(".gsap-case-card"),
        )
        .forEach((element, index) => {
          gsap.fromTo(
            element,
            { y: 42, opacity: 0, scale: 0.985 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.75,
              delay: (index % 4) * 0.06,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: { trigger: element, start: "top 90%", once: true },
            },
          );
        });

      requestAnimationFrame(() => {
        AOS.refreshHard();
        ScrollTrigger.refresh();
      });
    });

    return () => context.revert();
  }, [pageReady, pathname]);

  if (!showPreloader) return null;

  return (
    <div className="brand-preloader" role="status" aria-label="Loading website">
      <div className="brand-preloader__wash" />
      <div className="brand-preloader__content">
        <div className="brand-preloader__brand">
          <div className="brand-preloader__orbit" aria-hidden="true">
            <span />
            <span />
          </div>
          {/* <Image
            className="brand-preloader__logo"
            src="/images/sanjay-logo.svg"
            alt="Dr. Sanjay Sonar"
            width={232}
            height={51}
            priority
          /> */}
        </div>
        <p className="brand-preloader__label">Precision in practice</p>
        <div className="brand-preloader__progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
