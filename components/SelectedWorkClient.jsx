"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Layout from "./Layout";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const fallbackCases = [
  {
    image: "/images/Case Study 1.webp",
    number: "Case 01",
    title: "When a Routine Procedure Turned Into an Emergency",
    description: [
      "A young woman was brought to Dr. Sanjay Sonar with severe abdominal pain shortly after undergoing a routine gynecological procedure at another hospital. Although the procedure is commonly performed and is generally safe, her symptoms suggested that something was seriously wrong. On examination, Dr. Sonar suspected that the intestine had been injured during the procedure, allowing bowel contents to leak into the abdomen and causing a life-threatening infection. Recognising the urgency of the situation, he immediately took her up for emergency surgery.",
      "During the operation, the diagnosis was confirmed. To control the infection and give the injured bowel the best chance to heal, Dr. Sonar repaired the damage and temporarily diverted the large intestine, preventing waste from passing through the injured segment. After a few months, once the healing was complete, a second surgery was performed to restore the normal passage of the bowel. The patient recovered well and was able to return to her normal life.",
      "The story, however, didn't end there. Two years later, the same patient called Dr. Sonar with wonderful news—she had delivered a healthy baby. She later visited the clinic with her child to thank him for the timely treatment that had not only saved her life but also preserved her ability to become a mother. For Dr. Sonar, it remains one of those rare cases where the greatest reward wasn't just a successful surgery, but seeing a patient return with a new chapter of her life in her arms.",
    ],
  },
  {
    image: "/images/Case Study 2.webp",
    number: "Case 02",
    title: "When Appendicitis Wasn't the Real Problem",
    description: [
      "A woman was referred to Dr. Sanjay Sonar with a diagnosis of acute appendicitis. However, she was far from a routine surgical patient. She was severely obese, diabetic, hypertensive, and suffered from obstructive sleep apnea, requiring a CPAP/BiPAP machine to breathe comfortably even while sleeping. She had also undergone previous abdominal surgery for an umbilical hernia, making another operation technically challenging because of the dense internal scar tissue that was expected. To reduce postoperative pain and help her recover faster, Dr. Sonar chose to perform the surgery laparoscopically.",
      "During the operation, the inflamed appendix was identified, but something didn't seem right. Instead of stopping after the appendicectomy, Dr. Sonar explored the surrounding area further. Hidden behind dense adhesions was a 2 cm perforation in the caecum, the first part of the large intestine. On closer examination, the perforation appeared suspicious for an underlying tumour. Simply closing the hole would have left the disease untreated, so the surgical plan had to change immediately. Despite the hostile abdomen and extensive adhesions from the previous surgery, Dr. Sonar carefully mobilised the bowel, removed the affected segment, and performed a laparoscopic bowel resection with reconstruction, preserving the continuity of the intestine.",
      "Despite being an extremely high-risk patient, the surgery was successful and the patient recovered well. The case is a reminder that surgery is not just about executing a planned procedure—it is about recognising when the diagnosis is incomplete and having the experience to adapt safely. Sometimes, the most important decision in the operating room is knowing when to look beyond the obvious.",
    ],
  },
  {
    image: "/images/Case Study 3.webp",
    number: "Case 03",
    title:
      "Laparoscopic Repair of a Rare Kidney Obstruction in a Teenager",
    description: [
      "A 14-year-old boy was brought to Dr. Sanjay Sonar after his family noticed swelling in one of his kidneys during evaluation. Further investigations revealed a Pelvi-Ureteric Junction (PUJ) obstruction, a condition where the flow of urine from the kidney into the ureter is blocked, causing the kidney to enlarge over time. Left untreated, the obstruction can gradually damage the kidney and affect its function.",
      "The plan was to perform a laparoscopic PUJ repair, but during surgery, Dr. Sonar discovered that the obstruction was more complex than the scans had suggested. An abnormally placed blood vessel supplying the kidney was crossing the junction and contributing to the blockage. The challenge was to carefully separate the ureter from this vital blood vessel without compromising the kidney's blood supply or causing significant bleeding. Once the blood vessel was preserved, the obstructed segment was reconstructed using a laparoscopic pyeloplasty, restoring the normal flow of urine from the kidney.",
      "The boy recovered well after surgery, and the kidney drainage returned to normal, preserving its function. For Dr. Sonar, the case remains memorable not only because of its technical complexity but also because the patient was the grandson of his own son's English teacher. It serves as a reminder that successful surgery often depends on adapting to unexpected findings in the operating room while keeping the patient's long-term wellbeing at the centre of every decision.",
    ],
  },
  {
    image: "/images/Case Study 4.webp",
    number: "Case 04",
    title:
      "Saving a Critically Ill Patient with a Perforated Ulcer",
    description: [
      "One of the earliest emergency surgeries that shaped Dr. Sanjay Sonar's career involved a patient who arrived from a village in an extremely critical condition. By the time he reached the hospital, he was barely conscious, struggling to breathe, with a dangerously low blood pressure and almost no urine output—clear signs that his body was going into shock. The cause was a perforated duodenal ulcer, where a hole in the intestine had allowed stomach contents to spill into the abdominal cavity, leading to a life-threatening infection.",
      "Before rushing the patient to the operating table, the priority was to stabilize him. Over the next few hours, Dr. Sonar and his team carefully administered intravenous fluids, antibiotics, and supportive treatment until his condition was safe enough for surgery. During the operation, they discovered nearly three litres of infected fluid inside the abdomen. The perforation was repaired using a Graham's patch, a time-tested surgical technique for closing perforated ulcers, and the abdominal cavity was thoroughly cleaned to control the infection.",
      "The patient made an excellent recovery and was discharged in good health. What Dr. Sonar remembers most, however, is not the complexity of the surgery but what happened afterwards. At every follow-up visit, the patient would bring fruits from his village as a token of gratitude. The treatment had been provided free of cost, but the experience reinforced a lesson that has stayed with him throughout his career: the greatest reward in surgery is not the operation itself, but seeing a patient return to a normal life.",
    ],
  },
  {
    image: "/images/Case Study 5.webp",
    number: "Case 05",
    title: "A Thyroid Surgery Without a Visible Neck Scar",
    description: [
      "A young woman visited Dr. Sanjay Sonar after being diagnosed with a small, benign thyroid nodule that required surgical removal. While the condition itself was not cancerous, it could continue to grow and eventually cause discomfort or other complications if left untreated. The standard treatment was an open thyroidectomy, which would have left a permanent scar across the front of her neck. With her wedding approaching, the patient was understandably concerned about carrying a visible reminder of the surgery for the rest of her life.",
      "Instead of viewing this as a purely cosmetic concern, Dr. Sonar explored whether the operation could be performed using a minimally invasive approach. At the time, laparoscopic thyroidectomy was still an emerging technique, with only a handful of cases reported internationally. After studying one of the earliest published techniques from Hong Kong, he adapted the procedure and successfully performed one of the first laparoscopic thyroidectomies in India. By approaching the thyroid through small, strategically placed incisions hidden beneath clothing, he was able to remove the nodule safely while preserving the natural appearance of the neck.",
      "The patient recovered well, her biopsy confirmed the nodule was benign, and she was able to return to her daily life without the visible neck scar associated with conventional surgery. Beyond the technical achievement, the case demonstrates how modern surgery can be tailored not only to treat the disease effectively, but also to respect a patient's lifestyle, confidence, and personal priorities. Sometimes, the best surgical outcome is one that heals the patient without leaving a visible reminder behind.",
    ],
  },
  {
    image: "/images/Case Study 6.webp",
    number: "Case 06",
    title:
      "Removing a Large Ureteric Stone Through Keyhole Surgery",
    description: [
      "A patient came to Dr. Sanjay Sonar with an unusually large 4 cm stone lodged in the ureter, the narrow tube that carries urine from the kidney to the bladder. While most ureteric stones can be treated using an endoscope passed through the urinary tract, the size of this stone made the conventional approach difficult and potentially unsafe. Breaking it endoscopically would have been time-consuming and carried a higher risk of injuring the ureter.",
      "Instead, Dr. Sonar performed a laparoscopic transabdominal ureterolithotomy, an advanced minimally invasive procedure in which the ureter is accessed through keyhole surgery, the stone is removed intact, and the ureter is carefully repaired with fine sutures. At the time, this was among the early cases of its kind performed in India, and the work was recognised internationally with the acceptance of Dr. Sonar's abstract at a surgical conference in Korea. Despite the complexity of the surgery, the patient recovered remarkably well and was fit to return home within just two days.",
      "The case highlights that not every kidney or ureteric stone can be managed with standard endoscopic techniques. When stones are exceptionally large or located in challenging positions, choosing the right surgical approach can make all the difference. It also reinforces an important message for patients: persistent urinary symptoms should never be ignored, and early medical evaluation often leads to simpler and more effective treatment.",
    ],
  },
  {
    image: "/images/Case Study 7.webp",
    number: "Case 07",
    title: "A Complex Recurrent Incisional Hernia Repair",
    description: [
      "A woman from Dadar came to Dr. Sanjay Sonar after undergoing three surgeries for an incisional hernia, yet the hernia kept returning. By the time she sought another opinion, she was living with a large recurrent hernia. Rather than rushing into another operation, Dr. Sonar advised waiting for nearly 18 months after her last surgery so the abdominal tissues could heal and strengthen, creating the best possible conditions for a lasting repair.",
      "Given her history of multiple recurrences, a conventional repair was unlikely to provide a durable solution. Instead, Dr. Sonar performed an advanced Posterior Component Separation (Transversus Abdominis Release - TAR), a technique that allows the abdominal wall to be reconstructed and reinforced with a large polypropylene mesh placed behind the rectus muscles. This approach provides broader support while reducing tension on the repair, improving the chances of long-term success.",
      "The patient recovered well and has continued to do exceptionally well on follow-up. More than five years after the surgery, there has been no recurrence of the hernia, despite three previous failed repairs. The case highlights how thoughtful surgical planning, appropriate timing, and advanced reconstruction techniques can make a meaningful difference in complex recurrent hernia cases.",
    ],
  },
];

export default function SelectedWorkClient({ pageTitle, cases = fallbackCases }) {
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

          cards.slice(1).forEach((card, index) => {
            const previousCard = cards[index];
            const timelinePosition = index;

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

      return () => {
        media.revert();
      };
    },
    {
      scope: caseSectionRef,
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

                return (
                  <article
                    key={item.id}
                    className={`case-row gsap-case-card green-bg ${
                      isEven ? "even" : "odd"
                    } ${
                      isEven
                        ? "text-left"
                        : "text-right"
                    }`}
                  >
                    <div className="case-content">
                      <span className="case-number">
                        {item.number}
                      </span>

                      <h2>
                        <span className="subheading">
                          {item.title}
                        </span>
                      </h2>

                      {item.paragraphHtml && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.paragraphHtml,
                          }}
                        />
                      )}
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
              <svg
                className="approach-svg"
                viewBox="0 0 2048 520"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="flow-line line-1"
                  d="M72 118 H238"
                />

                <path
                  className="flow-line line-2"
                  d="M660 118 H900"
                />

                <path
                  className="flow-line line-3"
                  d="M1368 118 H1615"
                />

                <path
                  className="flow-line line-4"
                  d="M965 340 H1178"
                />

                <path
                  className="flow-line line-5"
                  d="M1615 340 H1830 V205"
                />

                <circle
                  className="flow-dot dot-1"
                  cx="72"
                  cy="118"
                  r="12"
                />

                <circle
                  className="flow-dot dot-2"
                  cx="900"
                  cy="118"
                  r="12"
                />

                <circle
                  className="flow-dot dot-3"
                  cx="1615"
                  cy="118"
                  r="12"
                />

                <circle
                  className="flow-dot dot-4"
                  cx="965"
                  cy="340"
                  r="12"
                />

                <circle
                  className="flow-dot dot-5"
                  cx="1615"
                  cy="340"
                  r="12"
                />
              </svg>

              <div className="approach-label label-understand">
                understand
                <br />
                the problem fully
              </div>

              <div className="approach-label label-avoid">
                avoid unnecessary
                <br />
                intervention
              </div>

              <div className="approach-label label-plan">
                plan carefully
              </div>

              <div className="approach-label label-outcomes">
                prioritize long-term
                <br />
                outcomes
              </div>

              <div className="approach-label label-operate">
                operate precisely
              </div>
            </div>

            <div className="approach-closing">
              <h2>Closing</h2>

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
