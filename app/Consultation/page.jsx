"use client";

import { useEffect } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";

export default function ConsultationPage() {
    useEffect(() => {
        const section = document.querySelector(".consultation-final");

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add("section-active");
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
            <main className="inside-page consultation-page">
        <Layout>
                <section className="inside-banner">
                    <div className="container">
                        <h1>Consultation</h1>
                    </div>
                </section>

                <section className="about-hero white-bg">
                    <div className="container">
                        <div className="about-hero-wrapper">
                            <div className="about-hero-img">
                                <Image
                                    src="/images/about-cunsultation-header-img.webp"
                                    alt="Dr. Sanjay Sonar Consultation"
                                    width={820}
                                    height={760}
                                    priority
                                />
                            </div>

                            <div className="about-hero-content">
                                <h2>
                                    Consultation
                                    <span className="subheading">
                                        A clear and considered approach to surgical care.
                                    </span>
                                </h2>

                                <p>Every consultation begins with understanding.</p>

                                <p>
                                    Time is taken to evaluate the condition carefully, review
                                    previous findings if available, and understand the concerns,
                                    symptoms, and expectations surrounding each case.
                                </p>

                                <p>
                                    The focus is not only on identifying the problem, but on
                                    explaining it clearly and discussing the most appropriate path
                                    forward.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="expect-section green-bg">
                    <div className="container">
                        <div className="expect-content">
                            <h2>What to Expect</h2>

                            <p>
                                Consultations are approached with attention, clarity, and careful
                                evaluation.
                            </p>

                            <h4>Patients are guided through:</h4>

                            <div className="expect-list">
                                {[
                                    {
                                        title: "Understanding the condition",
                                        icon: "/images/understanding-the-condition.svg",
                                    },
                                    {
                                        title: "Reviewing investigations and reports",
                                        icon: "/images/Reviewing-investigations.svg",
                                    },
                                    {
                                        title: "Discussing possible treatment approaches",
                                        icon: "/images/discussing-possible-tretment-approaches.svg",
                                    },
                                    {
                                        title: "Evaluating whether surgery is required",
                                        icon: "/images/Evaluating-whether-surgery.svg",
                                    },
                                    {
                                        title: "Understanding recovery, risks, and expected outcomes",
                                        icon: "/images/Understanding-recovery-risks.svg",
                                    },
                                ].map((item) => (
                                    <div className="expect-item" key={item.title}>
                                        <div className="expect-icon">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={72}
                                                height={72}
                                            />
                                        </div>
                                        <p>{item.title}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="expect-bottom-text">
                                Where appropriate, minimally invasive and laparoscopic approaches
                                are considered to support improved recovery and reduced surgical
                                trauma.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="second-opinion-section white-bg">
                    <div className="container">
                        <div className="second-opinion-content">
                            <h2>Second Opinions</h2>

                            <p>
                                Second opinions are available for patients seeking further
                                clarity on complex surgical conditions, previous diagnoses, or
                                recommended procedures.
                            </p>

                            <p>
                                In many situations, careful reassessment can help patients better
                                understand their options and make informed decisions with
                                confidence.
                            </p>
                        </div>

                        <div className="evaluated-block">
                            <h2>Areas Commonly Evaluated</h2>

                            <div className="evaluated-grid">
                                {[
                                    {
                                        title: "Gastrointestinal and hernia-related conditions",
                                        image: "/images/Gastrointestinal-and.jpg",
                                    },
                                    {
                                        title: "Colorectal disorders",
                                        image: "/images/Colorectal-disorders.jpg",
                                    },
                                    {
                                        title: "Thyroid conditions",
                                        image: "/images/Thyroid-conditions.jpg",
                                    },
                                    {
                                        title: "Thoracic surgical conditions",
                                        image: "/images/Thoracic-surgical.jpg",
                                    },
                                    {
                                        title: "Varicose veins",
                                        image: "/images/Varicose-veins.jpg",
                                    },
                                    {
                                        title: "Reconstructive urological concerns",
                                        image: "/images/Reconstructive-urological.jpg",
                                    },
                                    {
                                        title: "Complex or recurrent surgical cases",
                                        image: "/images/Complex-or-recurrent.jpg",
                                    },
                                ].map((item) => (
                                    <div className="evaluated-card" key={item.title}>
                                        <div className="evaluated-img">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={260}
                                                height={145}
                                            />
                                        </div>
                                        <p>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="consultation-final green-bg">
                    <div className="container">
                        <div className="prep-block">
                            <h2>Preparing for Your Consultation</h2>

                            <p>If available, patients are encouraged to carry:</p>

                            <div className="prep-timeline">
                                {[
                                    {
                                        text: (
                                            <>
                                                Previous
                                                <br />
                                                medical records
                                            </>
                                        ),
                                    },
                                    {
                                        text: (
                                            <>
                                                Investigation
                                                <br />
                                                reports and scans
                                            </>
                                        ),
                                    },
                                    {
                                        text: (
                                            <>
                                                Current
                                                <br />
                                                prescriptions
                                            </>
                                        ),
                                    },
                                    {
                                        text: (
                                            <>
                                                Details of prior
                                                <br />
                                                surgeries or treatments
                                            </>
                                        ),
                                    },
                                ].map((item, index) => (
                                    <div className="prep-step" key={index}>
                                        <div className="prep-line"></div>
                                        <span className="prep-dot"></span>

                                        <p className="name">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="prep-note">
                                This helps ensure a more complete and informed evaluation.
                            </p>
                        </div>

                        <div className="appointment-row">
                            <div className="appointment-left">
                                <h2>Appointment Request</h2>

                                <p>
                                    For consultations, evaluations, or second opinions, appointments
                                    may be requested using the details below.
                                </p>
                            </div>

                            <div className="appointment-card">
                                <div className="appointment-card-top">
                                    <a href="tel:+918080080800">+91 80800 80800</a>
                                    <a href="mailto:sanjay.sonar@gmail.com">
                                        sanjay.sonar@gmail.com
                                    </a>
                                </div>

                                <p>
                                    Dr.Anand Rao, Police Station, 1877, Dr Anandrao Nair Marg,
                                    near Agripada, Mumbai Central, Mumbai, Maharashtra 400011
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
        </Layout>
            </main>
    );
}