"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import Link from "next/link";
export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        const loadTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2600);

        const removeTimer = setTimeout(() => {
            setShowPreloader(false);
        }, 4000);

        return () => {
            clearTimeout(loadTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = showPreloader ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [showPreloader]);

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

            {showPreloader && (
                <div className={`site-preloader ${!isLoading ? "preloader-hide" : ""}`}>
                    <div className="preloader-inner">
                        <div className="preloader-mark">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <p>Loading experience</p>

                        <div className="preloader-line">
                            <span></span>
                        </div>
                    </div>
                </div>
            )}
            <HeroSlider isLoading={isLoading}>
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

            <section className="about-section green-bg" >
                <div className="container">
                    <div className="about-wrapper">
                        <div className="left">
                            <div className="about-img-wrapper" data-aos="fade-up">
                                <Image
                                    src="/images/DSS_Homepage_Doctor-Profile-new.png"
                                    alt="Dr. Sanjay Sonar"
                                    width={485}
                                    height={585}
                                    priority
                                    className="about-img"
                                />
                            </div>

                        </div>
                        <div className="right" data-aos="fade-left">
                            <h2>Dr. Sanjay Sonar
                                <span className="subheading">
                                    Advanced laparoscopic surgeon
                                </span>
                            </h2>
                            <div className="honor-div">
                                <p className="bold">Honorary Professor - </p>
                                <p>Grant Government Medical College <br /> Sir J.J. Group of Hospitals </p>
                            </div>
                            <ul>
                                <li><p>Some cases arrive with uncertainty. </p></li>
                                <li><p>They have been seen before, but not fully understood. </p></li>
                                <li><p>These are the cases we chooses to spend time on. </p></li>
                            </ul>

                            <h3>
                                Approach to Care
                            </h3>
                            <ul>
                                <li><p>There is no rush to operate. </p></li>
                                <li><p>First, the problem is understood. </p></li>
                                <li><p>Every detail is considered. Every possibility explored. </p></li>
                                <li><p>And only then, the simplest, most precise path is chosen. </p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> 

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
                        years of Mastery in Complex Surgical Cases
                    </h3>

                    <ul>
                        <li
                            data-aos="fade-up"
                            data-aos-duration="850"
                            data-aos-delay="150"
                        >
                            <div className="complex-sec-wrap">
                                <div className="img-wrap">
                                    <Image
                                        src="/images/advanced-gastrointestainal-home.webp"
                                        alt="Dr. Sanjay Sonar"
                                        width={442}
                                        height={330}
                                        priority
                                        className="about-img"
                                    />
                                </div>
                                <h4>Advanced gastrointestinal and hernia surgery</h4>
                            </div>
                        </li>

                        <li
                            data-aos="fade-up"
                            data-aos-duration="850"
                            data-aos-delay="250"
                        >
                            <div className="complex-sec-wrap">
                                <div className="img-wrap">
                                    <Image
                                        src="/images/colorectal-home.webp"
                                        alt="Dr. Sanjay Sonar"
                                        width={442}
                                        height={330}
                                        priority
                                        className="about-img"
                                    />
                                </div>
                                <h4>Colorectal procedures</h4>
                            </div>
                        </li>

                        <li
                            data-aos="fade-up"
                            data-aos-duration="850"
                            data-aos-delay="350"
                        >
                            <div className="complex-sec-wrap">
                                <div className="img-wrap">
                                    <Image
                                        src="/images/thoracic-surgery-home.webp"
                                        alt="Dr. Sanjay Sonar"
                                        width={442}
                                        height={330}
                                        priority
                                        className="about-img"
                                    />
                                </div>
                                <h4>Thoracic surgery (VATS)</h4>
                            </div>
                        </li>

                        <li
                            data-aos="fade-up"
                            data-aos-duration="850"
                            data-aos-delay="450"
                        >
                            <div className="complex-sec-wrap">
                                <div className="img-wrap">
                                    <Image
                                        src="/images/thyroid-home-new.webp"
                                        alt="Dr. Sanjay Sonar"
                                        width={515}
                                        height={330}
                                        priority
                                        className="about-img"
                                    />
                                </div>
                                <h4>Thyroid and endocrine surgery</h4>
                            </div>
                        </li>

                        <li
                            data-aos="fade-up"
                            data-aos-duration="850"
                            data-aos-delay="550"
                        >
                            <div className="complex-sec-wrap">
                                <div className="img-wrap">
                                    <Image
                                        src="/images/reconstruction-home.webp"
                                        alt="Dr. Sanjay Sonar"
                                        width={442}
                                        height={330}
                                        priority
                                        className="about-img"
                                    />
                                </div>
                                <h4>Reconstructive urological procedures</h4>
                            </div>
                        </li>

                        <li
                            data-aos="fade-up"
                            data-aos-duration="850"
                            data-aos-delay="650"
                        >
                            <div className="complex-sec-wrap">
                                <div className="img-wrap">
                                    <Image
                                        src="/images/laser-tretment-home.webp"
                                        alt="Dr. Sanjay Sonar"
                                        width={442}
                                        height={330}
                                        priority
                                        className="about-img"
                                    />
                                </div>
                                <h4>Laser treatment for varicose veins</h4>
                            </div>
                        </li>
                    </ul>

                    <div
                        className="btn-wrapper"
                        data-aos="fade-up"
                        data-aos-duration="850"
                        data-aos-delay="750"
                    >
                        <a href="/expertise#Colorectal-Surgery" className="btn cta">
                            View More
                        </a>
                    </div>
                </div>
            </section>

            <section className="teaching-publication-section green-bg">
                <div className="container">
                    <div className="tp-row">
                        <div className="tp-image" data-aos="fade-up">
                            <Image
                                src="/images/teaching-img.webp"
                                alt="Teaching"
                                width={560}
                                height={410}
                            />
                        </div>

                        <div className="tp-content" data-aos="fade-left">
                            <h2>TEACHING</h2>

                            <h3>
                                Teaching is not separate from the work. It is a continuation of it.
                            </h3>

                            <p>
                                As an Honorary Professor, and through programs in India and abroad,
                                Dr. Sonar trains surgeons to approach complexity with clarity.
                            </p>

                            <p>Not just how to operate, but how to think.</p>

                            <Link href="/teaching" className="btn">View More</Link>
                        </div>
                    </div>

                    {/* <div className="tp-row">
                        <div className="tp-image" data-aos="fade-up">
                            <Image
                                src="/images/publications-img.webp"
                                alt="Publications"
                                width={560}
                                height={410}
                            />
                        </div>

                        <div className="tp-content" data-aos="fade-left">
                            <h2>PUBLICATIONS</h2>

                            <h3>
                                Over the years, this work has been documented in textbooks and
                                surgical writing.
                            </h3>

                            <p>
                                Built to simplify what is often seen as complex, and to make it
                                teachable.
                            </p>

                            <a href="#" className="btn">View publications</a>
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
                                <a href="#" className="selected-work-btn">
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
                                <div className="beyond-img small site-img-reveal delay-1">
                                    <Image
                                        src="/images/beyond-surgery-1st.webp"
                                        alt="Beyond surgery"
                                        width={420}
                                        height={260}
                                    />
                                </div>

                                <div className="beyond-img small site-img-reveal delay-2">
                                    <Image
                                        src="/images/beyond-surgery-2nd.webp"
                                        alt="Plantation drive"
                                        width={420}
                                        height={260}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="beyond-right">
                            <div className="beyond-img large site-img-reveal delay-3">
                                <Image
                                    src="/images/beyond-surgery-3rd.webp"
                                    alt="Community care"
                                    width={720}
                                    height={650}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="consultation-content">
                        <h2 data-aos="fade-up">CONSULTATION</h2>

                        <p data-aos="fade-up" data-aos-delay="100">
                            If you are seeking clarity on a surgical condition, consultations and
                            second opinions are available.
                        </p>

                        <p data-aos="fade-up" data-aos-delay="200">
                            Each case is approached with time, care, and attention to detail.
                        </p>

                        <Link
                            href="/consultation"
                            className="consultation-btn"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            REQUEST A CONSULTATION
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
}
