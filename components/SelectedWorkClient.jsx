"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Layout from "./Layout";
import { scrollPageTo } from "./SmoothAnimationProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import { fallbackCases } from "../lib/case-studies";

export default function SelectedWorkClient({ pageTitle, cases = fallbackCases, initialCase = 0 }) {
  const caseSectionRef = useRef(null);
  const caseStageRef = useRef(null);
  const nextSectionRef = useRef(null);


  useEffect(() => {
    document.body.classList.add("selected-work");

    return () => {
      document.body.classList.remove("selected-work");
    };
  }, []);

  useGSAP(
    () => {
      const section = caseSectionRef.current;
      const stage = caseStageRef.current;
      const nextSection = nextSectionRef.current;

      const cards = gsap.utils.toArray(
        ".gsap-case-card",
        stage
      );

      if (!section || !stage || !cards.length) {
        return undefined;
      }

      const media = gsap.matchMedia();
      let caseTimeline = null;

      /*
       * Desktop stacked-card animation.
       */
      media.add(
        "(min-width: 992px) and (prefers-reduced-motion: no-preference)",
        () => {
          const getDistancePerCard = () =>
            Math.max(window.innerHeight * 0.95, 780);

          /*
           * Place every card in the same pinned stage.
           */
          gsap.set(cards, {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            autoAlpha: 1,
            transformOrigin: "50% 0%",
            backfaceVisibility: "hidden",
          });

          /*
           * First card is visible.
           * Remaining cards begin below the viewport.
           */
          cards.forEach((card, index) => {
            gsap.set(card, {
              yPercent: index === 0 ? 0 : 105,
              scale: index === 0 ? 1 : 0.985,
              filter: "brightness(1)",
              zIndex: index + 1,
            });
          });

          /*
           * Keep the section after the cards unaffected.
           */
          if (nextSection) {
            gsap.set(nextSection, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              clearProps:
                "transform,opacity,visibility,filter",
            });
          }

          const timeline = gsap.timeline({
            defaults: {
              ease: "none",
            },

            scrollTrigger: {
              trigger: section,
              start: "top top",

              end: () =>
                `+=${getDistancePerCard() *
                  Math.max(cards.length - 1, 1)}`,

              pin: stage,
              pinSpacing: true,
              scrub: 0.75,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              refreshPriority: 1,
            },
          });

          caseTimeline = timeline;
          timeline.addLabel("case-1", 0);

          cards.slice(1).forEach((card, index) => {
            const previousCard = cards[index];
            const timelinePosition = index;
            timeline.addLabel(`case-${index + 2}`, timelinePosition + 1);

            timeline
              /*
               * Push the previous card slightly back.
               */
              .to(
                previousCard,
                {
                  yPercent: -2.5,
                  scale: 0.94,
                  filter: "brightness(0.58)",
                  duration: 0.72,
                },
                timelinePosition
              )

              /*
               * Bring the next card upward.
               */
              .fromTo(
                card,
                {
                  yPercent: 105,
                  scale: 0.985,
                  filter: "brightness(1)",
                },
                {
                  yPercent: 0,
                  scale: 1,
                  filter: "brightness(1)",
                  duration: 1,
                },
                timelinePosition
              )

              /*
               * Hide the previous card after it is covered.
               */
              .set(
                previousCard,
                {
                  autoAlpha: 0,
                },
                timelinePosition + 0.98
              );
          });

          /*
           * Hold the final card briefly before unpinning.
           */
          timeline.to(
            {},
            {
              duration: 0.25,
            }
          );

          const refreshScrollTrigger = () => {
            ScrollTrigger.refresh();
          };

          const refreshTimer = window.setTimeout(
            refreshScrollTrigger,
            350
          );

          window.addEventListener(
            "load",
            refreshScrollTrigger
          );

          return () => {
            window.clearTimeout(refreshTimer);

            window.removeEventListener(
              "load",
              refreshScrollTrigger
            );

            caseTimeline = null;
            timeline.scrollTrigger?.kill();
            timeline.kill();

            gsap.set(cards, {
              clearProps:
                "position,inset,width,height,opacity,visibility,transform,zIndex,filter,backfaceVisibility",
            });

            if (nextSection) {
              gsap.set(nextSection, {
                clearProps:
                  "transform,opacity,visibility,filter",
              });
            }
          };
        }
      );

      /*
       * Tablet and mobile.
       * Cards stay in normal document flow.
       */
      media.add(
        "(max-width: 991px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(cards, {
            position: "relative",
            autoAlpha: 1,
            y: 0,
            yPercent: 0,
            scale: 1,
            filter: "none",
            clearProps: "inset,width,height,zIndex",
          });

          const revealAnimations = cards.map(card =>
            gsap.fromTo(
              card,
              {
                autoAlpha: 0,
                y: 55,
                scale: 0.985,
              },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",

                scrollTrigger: {
                  trigger: card,
                  start: "top 88%",
                  toggleActions:
                    "play none none reverse",
                },
              }
            )
          );

          if (nextSection) {
            gsap.set(nextSection, {
              autoAlpha: 1,
              clearProps:
                "transform,opacity,visibility,filter",
            });
          }

          return () => {
            revealAnimations.forEach(animation => {
              animation.scrollTrigger?.kill();
              animation.kill();
            });
          };
        }
      );

      /*
       * Reduced-motion accessibility.
       */
      media.add(
        "(prefers-reduced-motion: reduce)",
        () => {
          gsap.set(cards, {
            position: "relative",
            autoAlpha: 1,
            y: 0,
            yPercent: 0,
            scale: 1,
            filter: "none",
            clearProps:
              "inset,width,height,zIndex,transform",
          });

          if (nextSection) {
            gsap.set(nextSection, {
              autoAlpha: 1,
              clearProps:
                "transform,opacity,visibility,filter",
            });
          }
        }
      );

      // Pinned desktop cards share one position, so native anchor scrolling
      // must be translated into the corresponding timeline position.
      const openLinkedCase = () => {
        if (document.body.classList.contains("is-preloading")) return;
        // Query parameters carry the selection across Next.js navigation.
        // Accept older links too, recovering the last case from duplicate hashes.
        const legacyCases = window.location.hash.match(/case-\d+/g);
        const targetId = initialCase > 0
          ? `case-${initialCase}`
          : legacyCases?.at(-1);
        const index = cards.findIndex(card => card.id === targetId);
        if (index < 0) return;

        ScrollTrigger.refresh();
        const trigger = caseTimeline?.scrollTrigger;
        if (trigger) {
          const progress = caseTimeline.labels[targetId] / caseTimeline.duration();
          scrollPageTo(trigger.start + (trigger.end - trigger.start) * progress);
          ScrollTrigger.update();
          trigger.getTween()?.progress(1);
          caseTimeline.progress(progress);
        } else {
          scrollPageTo(cards[index].getBoundingClientRect().top + window.scrollY - 110);
          ScrollTrigger.update();
        }
      };
      const anchorFrame = requestAnimationFrame(openLinkedCase);
      window.addEventListener("page-scroll-ready", openLinkedCase);
      window.addEventListener("hashchange", openLinkedCase);

      return () => {
        cancelAnimationFrame(anchorFrame);
        window.removeEventListener("page-scroll-ready", openLinkedCase);
        window.removeEventListener("hashchange", openLinkedCase);
        media.revert();
      };
    },
    {
      scope: caseSectionRef,
      dependencies: [initialCase, cases],
      revertOnUpdate: true,
    }
  );

  return (
      <main className="inside-page selected-work">
    <Layout>
        <section className="inside-banner">
          <div className="container">
            <h1>{pageTitle || "Selected Work"}</h1>
          </div>
        </section>

        <section className="selected-work-section">
          <div
            className="case-pin-section green-bg"
            ref={caseSectionRef}
          >
            <div
              className="case-list case-pin-stage"
              ref={caseStageRef}
            >
              {cases.map((item, index) => {
                const isEven = index % 2 === 0;
                const fullDescription =
                  fallbackCases[index]?.description ||
                  item.description ||
                  [];

                return (
                  <article
                    id={`case-${index + 1}`}
                    key={item.id || item.number}
                    className={`case-row gsap-case-card green-bg ${
                      isEven ? "even" : "odd"
                    } ${
                      isEven
                        ? "text-left"
                        : "text-right"
                    }`}
                  >
                    <div className="case-content">
                      <div className="case-header">
                        <span className="case-number">
                          {item.number}
                        </span>

                        <h2>
                          <span className="subheading">
                            {item.title}
                          </span>
                        </h2>
                      </div>

                      <div
                        className="case-description"
                        data-lenis-prevent
                        tabIndex={0}
                        aria-label={`${item.number}: ${item.title} full case details`}
                      >
                        {fullDescription.length > 0 ? (
                          fullDescription.map((paragraph, paragraphIndex) => (
                            <p key={`${item.id}-paragraph-${paragraphIndex}`}>
                              {paragraph}
                            </p>
                          ))
                        ) : item.paragraphHtml ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.paragraphHtml,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>

                    <div
                      className={`case-image ${
                        item.image
                          ? ""
                          : "placeholder"
                      }`}
                    >
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          width={990}
                          height={996}
                          sizes="(max-width: 991px) 100vw, 52vw"
                          className="case-study-image"
                        />
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="approach-cases-section white-bg after-case-animation"
          ref={nextSectionRef}
        >
          <div className="container">
            <div className="approach-heading">
              <h2>Approach Across Cases</h2>

              <p>
                While every condition is different, the
                approach remains consistent:
              </p>
            </div>

            <div className="approach-flow-stage">
              <div className="approach-label" data-aos="fade-up" data-aos-delay="0">
                <span className="approach-step-number">01</span>
                <span>Understand the problem fully</span>
              </div>

              <div className="approach-label" data-aos="fade-up" data-aos-delay="140">
                <span className="approach-step-number">02</span>
                <span>Avoid unnecessary intervention</span>
              </div>

              <div className="approach-label" data-aos="fade-up" data-aos-delay="280">
                <span className="approach-step-number">03</span>
                <span>Plan carefully</span>
              </div>

              <div className="approach-label" data-aos="fade-up" data-aos-delay="420">
                <span className="approach-step-number">04</span>
                <span>Prioritize long-term outcomes</span>
              </div>

              <div className="approach-label" data-aos="fade-up" data-aos-delay="560">
                <span className="approach-step-number">05</span>
                <span>Operate precisely</span>
              </div>
            </div>

            <div className="approach-closing">
              {/* <h2>Closing</h2> */}

              <p>
                Over time, complex surgery becomes more than
                technical execution.
              </p>

              <p>
                It becomes the ability to approach uncertainty
                with clarity, patience, and precision.
              </p>
            </div>
          </div>
        </section>
    </Layout>
      </main>
  );
}
