"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function HomePage() {
    useEffect(() => {
        const sections = document.querySelectorAll(".selected-work-section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("section-active");
                    }
                });
            },
            { threshold: 0.35 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>

            <section className="hero" id="home">
                <div className="hero-bg">
                <picture>
                    <source
                    media="(max-width: 767px)"
                    srcSet="/images/home-banner-img-mob.png"
                    />

                    <source
                    media="(min-width: 768px)"
                    srcSet="/images/Sanjay-Banner-1.jpg"
                    />

                    <img
                    src="/images/Sanjay-Banner-1.jpg"
                    alt="Dr. Sanjay Sonar Banner"
                    className="hero-img"
                    />
                </picture>
                </div>

                <div className="hero-content">
                    
                    <picture>
                    <source
                    media="(max-width: 767px)"
                    srcSet="/images/35-mob-text.png"
                    />

                    <source
                    media="(min-width: 768px)"
                    srcSet="/images/35-text-new-banner.png"
                    />

                    <img
                    src="/images/35-text-new-banner.png"
                    alt="Dr. Sanjay Sonar Banner"
                    className="hero-img"
                    />
                </picture>

                    <div className="social-links">
                        <a href="#" aria-label="Instagram">
                            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.1749 5.83919C25.77 5.83919 25.3741 5.95796 25.0374 6.18049C24.7006 6.40302 24.4382 6.7193 24.2832 7.08935C24.1282 7.4594 24.0877 7.86659 24.1667 8.25943C24.2457 8.65227 24.4407 9.01312 24.7271 9.29634C25.0134 9.57956 25.3783 9.77244 25.7755 9.85058C26.1727 9.92872 26.5844 9.88862 26.9585 9.73534C27.3327 9.58206 27.6525 9.32249 27.8774 8.98946C28.1024 8.65642 28.2225 8.26488 28.2225 7.86434C28.2225 7.32724 28.0068 6.81213 27.6228 6.43234C27.2388 6.05255 26.718 5.83919 26.1749 5.83919ZM34.024 9.92325C33.9908 8.52302 33.7257 7.13765 33.2391 5.82231C32.8052 4.69689 32.13 3.67781 31.2598 2.83521C30.4148 1.97018 29.3821 1.30652 28.2396 0.894442C26.9132 0.398551 25.5109 0.130302 24.0932 0.101258C22.2845 -9.43035e-08 21.7044 0 17.0632 0C12.422 0 11.8419 -9.43035e-08 10.0332 0.101258C8.61547 0.130302 7.2132 0.398551 5.8868 0.894442C4.74643 1.31069 3.71454 1.97378 2.86662 2.83521C1.992 3.67089 1.32099 4.69234 0.904349 5.82231C0.402966 7.13418 0.131745 8.52109 0.102379 9.92325C-9.5348e-08 11.7121 0 12.2859 0 16.8763C0 21.4666 -9.5348e-08 22.0404 0.102379 23.8293C0.131745 25.2315 0.402966 26.6184 0.904349 27.9302C1.32099 29.0602 1.992 30.0816 2.86662 30.9173C3.71454 31.7788 4.74643 32.4418 5.8868 32.8581C7.2132 33.354 8.61547 33.6222 10.0332 33.6513C11.8419 33.7525 12.422 33.7525 17.0632 33.7525C21.7044 33.7525 22.2845 33.7525 24.0932 33.6513C25.5109 33.6222 26.9132 33.354 28.2396 32.8581C29.3821 32.446 30.4148 31.7824 31.2598 30.9173C32.1338 30.0779 32.8097 29.0579 33.2391 27.9302C33.7257 26.6149 33.9908 25.2295 34.024 23.8293C34.024 22.0404 34.1264 21.4666 34.1264 16.8763C34.1264 12.2859 34.1264 11.7121 34.024 9.92325ZM30.9526 23.6268C30.9402 24.698 30.744 25.7594 30.3725 26.7658C30.1 27.5002 29.6625 28.1638 29.0927 28.7065C28.5393 29.2643 27.8697 29.6962 27.1305 29.9723C26.113 30.3397 25.0399 30.5338 23.9567 30.546C22.2504 30.6304 21.6191 30.6473 17.1314 30.6473C12.6438 30.6473 12.0125 30.6473 10.3062 30.546C9.18152 30.5669 8.06167 30.3956 6.99591 30.0398C6.28912 29.7496 5.65023 29.3188 5.11896 28.774C4.55261 28.2319 4.12049 27.5677 3.85628 26.8333C3.4397 25.8125 3.20864 24.727 3.17375 23.6268C3.17375 21.9391 3.07138 21.3147 3.07138 16.8763C3.07138 12.4378 3.07138 11.8134 3.17375 10.1258C3.1814 9.03058 3.38355 7.94525 3.77097 6.91927C4.07136 6.20694 4.53244 5.57197 5.11896 5.06288C5.63736 4.48262 6.27804 4.02178 6.99591 3.71278C8.036 3.34157 9.13222 3.14756 10.2379 3.13899C11.9442 3.13899 12.5756 3.03773 17.0632 3.03773C21.5508 3.03773 22.1822 3.03773 23.8885 3.13899C24.9716 3.15127 26.0448 3.34529 27.0622 3.71278C27.8376 3.9974 28.5336 4.46014 29.0927 5.06288C29.6519 5.58128 30.0888 6.21508 30.3725 6.91927C30.7517 7.94692 30.948 9.03181 30.9526 10.1258C31.038 11.8134 31.055 12.4378 31.055 16.8763C31.055 21.3147 31.038 21.9391 30.9526 23.6268ZM17.0632 8.21874C15.3327 8.22208 13.642 8.73267 12.2047 9.686C10.7675 10.6393 9.64818 11.9926 8.98827 13.5749C8.32836 15.1571 8.15744 16.8973 8.49712 18.5756C8.8368 20.2539 9.67182 21.7949 10.8967 23.004C12.1216 24.2131 13.6813 25.036 15.3788 25.3687C17.0763 25.7013 18.8355 25.5289 20.434 24.8732C22.0325 24.2174 23.3986 23.1077 24.3596 21.6844C25.3207 20.261 25.8337 18.5878 25.8337 16.8763C25.8359 15.7373 25.6105 14.6091 25.1703 13.5566C24.7302 12.5041 24.0839 11.5481 23.2689 10.7435C22.4538 9.93893 21.4859 9.30166 20.4209 8.86836C19.3559 8.43506 18.2148 8.21429 17.0632 8.21874ZM17.0632 22.4961C15.9394 22.4961 14.8408 22.1665 13.9064 21.549C12.972 20.9314 12.2437 20.0538 11.8137 19.0269C11.3836 18 11.2711 16.87 11.4903 15.7799C11.7096 14.6898 12.2507 13.6884 13.0454 12.9025C13.84 12.1165 14.8525 11.5813 15.9547 11.3645C17.0569 11.1476 18.1994 11.2589 19.2376 11.6843C20.2759 12.1096 21.1633 12.8299 21.7876 13.7541C22.412 14.6782 22.7452 15.7648 22.7452 16.8763C22.7452 17.6143 22.5983 18.345 22.3127 19.0269C22.0272 19.7087 21.6086 20.3282 21.081 20.8501C20.5534 21.3719 19.927 21.7859 19.2376 22.0683C18.5482 22.3507 17.8094 22.4961 17.0632 22.4961Z" fill="" />
                            </svg>

                        </a>
                        <a href="#" aria-label="Facebook">
                            <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.6719 19.6187C39.6719 8.78093 30.7937 0 19.836 0C8.87819 0 0 8.78093 0 19.6187C0 29.4106 7.25372 37.527 16.7366 39L16.7366 25.2899H11.6976L11.6976 19.6187H16.7366V15.2962C16.7366 10.3797 19.696 7.66394 24.2287 7.66394C26.3994 7.66394 28.6694 8.04682 28.6694 8.04682V12.8724H26.1675C23.704 12.8724 22.9353 14.3849 22.9353 15.9362V19.6187H28.4366L27.5568 25.2899H22.9353L22.9353 39C32.4182 37.527 39.6719 29.4106 39.6719 19.6187Z" fill="" />
                            </svg>

                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.2732 0L2.55148 0C1.14377 0 0 1.14706 0 2.55517L0 32.885C0 34.2931 1.14377 35.4402 2.55148 35.4402L33.2732 35.4402C34.6809 35.4402 35.8327 34.2931 35.8327 32.885L35.8327 2.55517C35.8327 1.14706 34.6809 0 33.2732 0ZM10.8298 30.3773L5.51888 30.3773L5.51888 13.4641H10.8378L10.8378 30.3773H10.8298ZM8.17434 11.1542C6.47068 11.1542 5.09496 9.7856 5.09496 8.10852C5.09496 6.43144 6.47068 5.06288 8.17434 5.06288C9.86999 5.06288 11.2537 6.43144 11.2537 8.10852C11.2537 9.79351 9.87799 11.1542 8.17434 11.1542ZM30.7377 30.3773H25.4268V22.1501C25.4268 20.1882 25.3868 17.6647 22.6674 17.6647C19.9 17.6647 19.476 19.8006 19.476 22.0077V30.3773H14.1651L14.1651 13.4641L19.2601 13.4641V15.774H19.3321C20.0439 14.445 21.7796 13.0448 24.363 13.0448C29.738 13.0448 30.7377 16.5493 30.7377 21.1059L30.7377 30.3773Z" fill="" />
                            </svg>

                        </a>
                    </div>
                </div>
            </section>

            <section className="about-section green-bg">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="left">
                            <div className="about-img-wrapper">
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
                        <div className="right">
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

            <section className="years-Mastery white-bg">
                <div className="container">
                    <h3><span><Image
                        src="/images/35-svg.svg"
                        alt="Dr. Sanjay Sonar"
                        width={442}
                        height={330}
                        priority
                        className="about-img"
                    /></span>years of Mastery in Complex Surgical Cases </h3>
                    <ul>
                        <li>
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
                                <h4>Advanced gastrointestinal and hernia surgery </h4>
                            </div>
                        </li>
                        <li>
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
                                <h4>Colorectal procedures </h4>
                            </div>
                        </li>
                        <li>
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
                                <h4>Thoracic surgery (VATS) </h4>
                            </div>
                        </li>
                        <li>
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
                                <h4>Thyroid and endocrine surgery </h4>
                            </div>
                        </li>
                        <li>
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
                                <h4>Reconstructive urological procedures </h4>
                            </div>
                        </li>
                        <li>
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
                                <h4>Laser treatment for varicose veins </h4>
                            </div>
                        </li>
                    </ul>
                    <div className="btn-wrapper">
                    <a href="/expertise#Colorectal-Surgery" className="btn cta">View More</a>
                    </div>
                </div>
            </section>

            <section className="teaching-publication-section green-bg">
                <div className="container">
                    <div className="tp-row">
                        <div className="tp-image">
                            <Image
                                src="/images/teaching-img.webp"
                                alt="Teaching"
                                width={560}
                                height={410}
                            />
                        </div>

                        <div className="tp-content">
                            <h2>TEACHING</h2>

                            <h3>
                                Teaching is not separate from the work. It is a continuation of it.
                            </h3>

                            <p>
                                As an Honorary Professor, and through programs in India and abroad,
                                Dr. Sonar trains surgeons to approach complexity with clarity.
                            </p>

                            <p>Not just how to operate, but how to think.</p>

                            <a href="#" className="btn">View More</a>
                        </div>
                    </div>

                    <div className="tp-row">
                        <div className="tp-image">
                            <Image
                                src="/images/publications-img.webp"
                                alt="Publications"
                                width={560}
                                height={410}
                            />
                        </div>

                        <div className="tp-content">
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
                    </div>
                </div>
            </section>

            <section className="selected-work-section white-bg" id="selected-work">
                <div className="container">
                    <div className="selected-work-header">
                        <h2>SELECTED WORK
                            <span className="subheading">Cases that required more than routine decisions.</span>
                        </h2>

                    </div>

                    <div className="selected-work-grid">
                        <div className="selected-work-card selected-work-card-large">
                            <div className="selected-work-img">
                                <Image
                                    src="/images/publications-img.webp"
                                    alt="Selected work"
                                    width={700}
                                    height={630}
                                />
                            </div>
                            <h4>Recurrent hernias where prior interventions had failed</h4>
                        </div>

                        <div className="selected-work-right">
                            <div className="selected-work-card">
                                <div className="selected-work-img">
                                    <Image
                                        src="/images/publications-img.webp"
                                        alt="Selected work"
                                        width={500}
                                        height={260}
                                    />
                                </div>
                                <h4>Gastrointestinal conditions requiring staged laparoscopic correction</h4>
                            </div>

                            <div className="selected-work-card">
                                <div className="selected-work-img">
                                    <Image
                                        src="/images/publications-img.webp"
                                        alt="Selected work"
                                        width={500}
                                        height={260}
                                    />
                                </div>
                                <h4>Thoracic procedures performed through minimally invasive access</h4>
                            </div>

                            <div className="selected-work-btn-wrap">
                                <a href="#" className="selected-work-btn">View more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="beyond-consultation-section green-bg" id="consultation">
                <div className="container">
                    <div className="beyond-grid">
                        <div className="beyond-left">
                            <div className="beyond-content">
                                <h2>BEYOND SURGERY</h2>

                                <p>Outside the operating room, the work continues in more ways.</p>

                                <p>
                                    Through teaching, writing, and time spent in reflection. <br />
                                    Through initiatives like plantation drives.
                                </p>

                                <p>
                                    At heart, the work is about contributing and passing it forward.
                                </p>
                            </div>

                            <div className="beyond-small-images">
                                <div className="beyond-img small">
                                    <Image
                                        src="/images/beyond-surgery-1st.webp"
                                        alt="Beyond surgery"
                                        width={420}
                                        height={260}
                                    />
                                </div>

                                <div className="beyond-img small">
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
                            <div className="beyond-img large">
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
                        <h2>CONSULTATION</h2>

                        <p>
                            If you are seeking clarity on a surgical condition, consultations and
                            second opinions are available.
                        </p>

                        <p>
                            Each case is approached with time, care, and attention to detail.
                        </p>

                        <a href="#" className="consultation-btn">
                            REQUEST A CONSULTATION
                        </a>
                    </div>
                </div>
            </section>

        </>
    );
}
