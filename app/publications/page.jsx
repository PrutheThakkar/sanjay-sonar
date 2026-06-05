"use client";

import Image from "next/image";
import { useEffect } from "react";
import Layout from "../../components/Layout";

import Link from "next/link";


const expertiseItems = [
    {
        title: "Advanced laparoscopic surgery ",
        icon: "/images/Advanced-laparoscopic-surgery.svg",
    },
    {
        title: "Gastrointestinal surgery ",
        icon: "/images/Gastrointestinal-surgery.svg",
    },
    {
        title: "Hernia surgery ",
        icon: "/images/Hernia-surgery.svg",
    },
    {
        title: "Colorectal procedures",
        icon: "/images/Colorectal-procedures.svg",

    },
    {
        title: "Thoracic surgery",
        icon: "/images/Thoracic-surgery.svg",
    },
    {
        title: "Minimally invasive techniques ",
        icon: "/images/Minimally-invasive-techniques.svg",
    },
    {
        title: "Surgical planning and operative judgment ",
        icon: "/images/Surgical-planning-operative-judgment.svg",
    },
];


const papers = [
  {
    title: "Presentation Title",
    image: "/images/presentation-1.jpg",
    description: "Brief description or publication details.",
  },
  {
    title: "Presentation Title",
    image: "/images/presentation-2.jpg",
    description: "Brief description or publication details.",
  },
  {
    title: "Presentation Title",
    image: "/images/presentation-3.jpg",
    description: "Brief description or publication details.",
  },
];

export default function HomePage() {
    return (
        <main className="inside-page about-page">
            <Layout>

                <section className="inside-banner">
                    <div className="container">
                        <h1>Publications </h1>
                    </div>
                </section>

                <section className="publications-intro white-bg">
                    <div className="container">
                        <div className="publications-content">
                            <h2>
                                Publications
                                <span className="subheading">
                                    Knowledge developed through practice, documented for others.
                                </span>
                            </h2>

                            <p>
                                Over the course of his career, Dr. Sanjay Sonar has contributed to
                                surgical education through textbooks, academic writing, clinical papers,
                                and structured teaching material developed from years of surgical
                                experience.
                            </p>

                            <p>
                                His work reflects the same principles that guide his practice: clarity,
                                precision, and the importance of making complex surgical knowledge
                                practical, understandable, and useful.
                            </p>

                            <div className="purpose-block">
                                <h3>Writing with Purpose</h3>

                                <p>
                                    The focus of his publications has never been academic volume alone,
                                    but contribution.
                                </p>

                                <p>
                                    Each publication is shaped around real clinical experience, with the
                                    aim of refining surgical understanding, improving decision-making, and
                                    helping surgeons approach complexity with greater confidence and
                                    clarity.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="selected-work-section green-bg" id="selected-work">
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

                                {/* <div className="selected-work-btn-wrap">
                                    <a href="#" className="selected-work-btn">View more</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="expertise-overview white-bg">
                    <div className="container">
                        <div className="expertise-overview-header">
                            <h2>
                                Clinical Papers & Academic Work

                            </h2>

                            <p>
                                Over the years, Dr. Sonar has also contributed to surgical literature through clinical papers,
                                case studies, presentations, and academic publications.
                            </p>
                            <p>These works draw from practical surgical experience and focus on advancing understanding in areas of minimally
                                invasive and complex surgery.</p>
                        </div>

                        <div className="expertise-list-block">
                            <h3>Areas of Academic Contribution </h3>

                            <div className="expertise-list">
                                {expertiseItems.map((item) => (
                                    <Link
                                        href={`/expertise/${item.slug}`}
                                        key={item.title}
                                        className="expertise-item"
                                    >
                                        <div className="expertise-icon">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={76}
                                                height={76}
                                            />
                                        </div>

                                        <p>{item.title}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </main>
    )

}
