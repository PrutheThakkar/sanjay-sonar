"use client";

import Image from "next/image";
import { useEffect } from "react";
import HeroSlider from "../components/HeroSlider";
import Link from "next/link";
export default function HomePage({
    heroSlides,
    aboutSection,
    expertiseSection,
    teachingSection,
    consultationSection,
}) {
    // useEffect(() => {
    //     const sections = document.querySelectorAll(".clip-reveal-section");

    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     entry.target.classList.add("section-active");
    //                 }
    //             });
    //         },
    //         { threshold: 0.35 }
    //     );

    //     sections.forEach((section) => observer.observe(section));

    //     return () => observer.disconnect();
    // }, []);

    useEffect(() => {
        const sections = document.querySelectorAll(".clip-reveal-section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("section-active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.25,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <>

            <HeroSlider isLoading={false} slides={heroSlides}>
                <div className="social-links">
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        {/* Keep your existing Instagram SVG here. */}
                    </a>

                    <a
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        {/* Keep your existing Facebook SVG here. */}
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        {/* Keep your existing LinkedIn SVG here. */}
                    </a>
                </div>
            </HeroSlider>

            {aboutSection && (
                <section className="about-section green-bg">
                    <div className="container">
                        <div className="about-wrapper">
                            <div className="left">
                                {aboutSection.imageUrl && (
                                    <div className="about-img-wrapper" data-aos="fade-up">
                                        <Image
                                            src={aboutSection.imageUrl}
                                            alt={aboutSection.imageAlt}
                                            width={485}
                                            height={585}
                                            sizes="(max-width: 575px) 90vw, (max-width: 991px) 420px, (max-width: 1100px) 330px, (max-width: 1365px) 400px, (max-width: 1600px) 45vw, 720px"
                                            quality={90}
                                            priority
                                            className="about-img"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="right" data-aos="fade-up">
                                {aboutSection.titleHtml && (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: aboutSection.titleHtml,
                                        }}
                                    />
                                )}
                                {aboutSection.contentHtml && (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: aboutSection.contentHtml,
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section
                className="years-Mastery white-bg"

                data-aos-duration="900"
                data-aos-easing="ease-out-cubic"
            >
                <div className="container">
                    <h3
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="100"
                    >
                        <span>
                            <Image
                                src="/images/35-svg.svg"
                                alt="Dr. Sanjay Sonar"
                                width={442}
                                height={330}
                                priority
                                className="about-img"
                            />
                        </span>
                        {expertiseSection?.title || "years of Mastery in Complex Surgical Cases"}
                    </h3>

                    <ul>
                        {(expertiseSection?.items || []).map((item, index) => (
                            <li
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-duration="850"
                                data-aos-delay={150 + index * 100}
                            >
                                <div className="complex-sec-wrap">
                                    <div className="img-wrap">
                                        <Image
                                            src={item.imageUrl}
                                            sizes="(max-width: 575px) 90vw, (max-width: 991px) 43vw, 28vw"
                                            quality={90}
                                            alt={item.imageAlt}
                                            width={442}
                                            height={330}
                                            className="about-img"
                                        />
                                    </div>
                                    {item.title && <h4>{item.title}</h4>}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div
                        className="btn-wrapper"
                        data-aos="fade-up"
                        data-aos-duration="850"
                        data-aos-delay="750"
                    >
                        <Link href="/expertise#Colorectal-Surgery" className="btn cta site-cta">
                            View More
                        </Link>
                    </div>
                </div>
            </section>

            <section className="teaching-publication-section green-bg">
                <div className="container">
                    {(teachingSection || []).map((item) => (
                        <div className="tp-row" key={item.id}>
                            {item.imageUrl && (
                                <div className="tp-image" data-aos="fade-up">
                                    <Image
                                        src={item.imageUrl}
                                        sizes="(max-width: 575px) 90vw, (max-width: 991px) 520px, 33vw"
                                        quality={90}
                                        alt={item.imageAlt}
                                        width={560}
                                        height={410}
                                    />
                                </div>
                            )}

                            <div className="tp-content" data-aos="fade-up">
                                {item.title && <h2>{item.title}</h2>}
                                {item.subtitle && <h3>{item.subtitle}</h3>}
                                {item.textHtml && (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item.textHtml,
                                        }}
                                    />
                                )}
                                <Link href={item.buttonHref} className="btn site-cta">
                                    {item.buttonLabel}
                                </Link>
                            </div>
                        </div>
                    ))}

                    {/* <div className="tp-row">
                        <div className="tp-image" data-aos="fade-up">
                            <Image
                                src="/images/publications-img.webp"
                                alt="Publications"
                                width={560}
                                height={410}
                            />
                        </div>

                        <div className="tp-content" data-aos="fade-up">
                            <h2>PUBLICATIONS</h2>

                            <h3>
                                Over the years, this work has been documented in textbooks and
                                surgical writing.
                            </h3>

                            <p>
                                Built to simplify what is often seen as complex, and to make it
                                teachable.
                            </p>

                            <a href="#" className="btn site-cta">View publications</a>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* <section
                className="selected-work-section home white-bg clip-reveal-section"
                id="selected-work"
            >
                <div className="container">
                    <div className="selected-work-header">
                        <h2
                            data-aos="fade-up"
                            data-aos-duration="850"
                        >
                            SELECTED WORK
                            <span className="subheading">
                                Cases that required more than routine decisions.
                            </span>
                        </h2>
                    </div>

                    <div className="selected-work-grid">
                        <div className="selected-work-card selected-work-card-large">
                            <div className="selected-work-img site-img-reveal delay-1">
                                <Image
                                    src="/images/publications-img.webp"
                                    alt="Selected work"
                                    width={700}
                                    height={630}
                                />
                            </div>

                            <h4
                                data-aos="fade-up"
                                data-aos-delay="450"
                                data-aos-duration="750"
                            >
                                Recurrent hernias where prior interventions had failed
                            </h4>
                        </div>

                        <div className="selected-work-right">
                            <div className="selected-work-card">
                                <div className="selected-work-img site-img-reveal delay-2">
                                    <Image
                                        src="/images/publications-img.webp"
                                        alt="Selected work"
                                        width={500}
                                        height={260}
                                    />
                                </div>

                                <h4
                                    data-aos="fade-up"
                                    data-aos-delay="600"
                                    data-aos-duration="750"
                                >
                                    Gastrointestinal conditions requiring staged laparoscopic correction
                                </h4>
                            </div>

                            <div className="selected-work-card">
                                <div className="selected-work-img site-img-reveal delay-3">
                                    <Image
                                        src="/images/publications-img.webp"
                                        alt="Selected work"
                                        width={500}
                                        height={260}
                                    />
                                </div>

                                <h4
                                    data-aos="fade-up"
                                    data-aos-delay="750"
                                    data-aos-duration="750"
                                >
                                    Thoracic procedures performed through minimally invasive access
                                </h4>
                            </div>

                            <div
                                className="selected-work-btn-wrap"
                                data-aos="fade-up"
                                data-aos-delay="900"
                                data-aos-duration="750"
                            >
                                <a href="#" className="selected-work-btn site-cta">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section
                className="beyond-consultation-section green-bg clip-reveal-section"
                id="consultation"
            >
                <div className="container">
                    <div className="beyond-grid">
                        <div className="beyond-left">
                            <div className="beyond-content">
                                <h2 data-aos="fade-up">BEYOND SURGERY</h2>

                                <p data-aos="fade-up" data-aos-delay="100">
                                    Outside the operating room, the work continues in more ways.
                                </p>

                                <p data-aos="fade-up" data-aos-delay="200">
                                    Through teaching, writing, and time spent in reflection. <br />
                                    Through initiatives like plantation drives.
                                </p>

                                <p data-aos="fade-up" data-aos-delay="300">
                                    At heart, the work is about contributing and passing it forward.
                                </p>
                            </div>

                            <div className="beyond-small-images">
                                <div className="beyond-img small" data-aos="fade-up">
                                    <Image
                                        src="/images/beyond-surgery-1st.webp"
                                        sizes="(max-width: 575px) 90vw, (max-width: 991px) 43vw, 22vw"
                                        quality={90}
                                        alt="Beyond surgery"
                                        width={420}
                                        height={260}
                                    />
                                </div>

                                <div className="beyond-img small" data-aos="fade-up">
                                    <Image
                                        src="/images/beyond-surgery-2nd.webp"
                                        sizes="(max-width: 575px) 90vw, (max-width: 991px) 43vw, 22vw"
                                        quality={90}
                                        alt="Plantation drive"
                                        width={420}
                                        height={260}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="beyond-right">
                            <div className="beyond-img large" data-aos="fade-up">
                                <Image
                                    src="/images/beyond-surgery-3rd.webp"
                                    sizes="(max-width: 991px) 90vw, 40vw"
                                    quality={90}
                                    alt="Community care"
                                    width={720}
                                    height={650}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="consultation-content">
                        <h2 data-aos="fade-up">
                            {consultationSection?.title || "CONSULTATION"}
                        </h2>

                        {consultationSection?.paragraphHtml && (
                            <div
                                data-aos="fade-up"
                                data-aos-delay="100"
                                dangerouslySetInnerHTML={{
                                    __html: consultationSection.paragraphHtml,
                                }}
                            />
                        )}

                        <Link
                            href="/consultation"
                            className="consultation-btn site-cta"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Request a consultation
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
}
