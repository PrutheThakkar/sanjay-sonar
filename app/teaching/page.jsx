import { Span } from "next/dist/trace";
import Layout from "../../components/Layout";
import WorkSwiper from "../../components/WorkSwiper";

const philosophyItems = [
    {
        icon: "/images/How-approach-complexity-calmly.svg",
        text: (
            <>
                How to approach
                <br />
                complexity calmly
            </>
        ),
    },
    {
        icon: "/images/How-plan-carefully.svg",
        text: <>How to plan carefully</>,
    },
    {
        icon: "/images/How-make-decisions-clarity.svg",
        text: (
            <>
                How to make decisions
                <br />
                with clarity
            </>
        ),
    },
    {
        icon: "/images/And-how-refine-practice-time.svg",
        text: (
            <>
                And how to refine
                <br />
                practice over time
            </>
        ),
    },
];

export default function TeachingPage() {
    return (
        <main className="teaching-page inside-page">
            <Layout>

                <section className="inside-banner ">
                    <div className="container">
                        <h1>Teaching</h1>
                    </div>
                </section>

                {/* Top Teaching Intro */}
                <section className="teaching-intro white-bg">
                    <div className="container">
                        <div className="teaching-intro-grid">
                            <div className="teaching-image large">
                                <img
                                    src="/images/teaching-header-new.webp"
                                    alt="Dr. Sanjay Sonar teaching"
                                />
                            </div>

                            <div className="teaching-copy">
                                <h2 >
                                Teaching
                                <span className="subheading">
                                    Teaching is not separate from the work.
                                    <br />
                                    It is a continuation of it.
                                </span>
                                </h2>
                                                            

                                <p>
                                    For over three decades, Dr. Sanjay Sonar has remained deeply
                                    involved in the teaching and training of surgeons, alongside
                                    his clinical practice in advanced laparoscopic surgery.
                                </p>

                                <p>
                                    His approach to teaching is rooted in experience. Shaped not
                                    only by technique, but by years spent understanding
                                    complexity, decision-making, and surgical judgment in real
                                    operating environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dark Academic Section */}
                <section className="teaching-academic green-bg">
                    <div className="container">
                        <div className="academic-row first">
                            <div className="academic-copy">
                                <h2 className="lined-title">Academic Role</h2>

                                <p>
                                    Dr. Sonar serves as an Honorary Professor at Grant Government
                                    Medical College &amp; Sir J.J. Group of Hospitals, where he is
                                    actively involved in mentoring and training surgeons across
                                    different stages of their careers.
                                </p>

                                <p>
                                    His teaching focuses on building clarity, confidence, and a
                                    structured understanding of advanced surgical practice.
                                </p>
                            </div>

                            <div className="teaching-image small right">
                                <img
                                    src="/images/teaching-img-new-2.webp"
                                    alt="Academic role"
                                />
                            </div>
                        </div>

                        <div className="academic-row second">
                            <div className="teaching-image small left">
                                <img
                                    src="/images/teaching-img-3.webp"
                                    alt="Workshop and surgical training"
                                />
                            </div>

                            <div className="academic-copy">
                                <h2 className="lined-title">Workshops &amp; Surgical Training</h2>

                                <p>
                                    Over the years, he has conducted and participated in numerous
                                    surgical workshops, training programs, live operative
                                    sessions, and academic discussions in India and internationally.
                                </p>

                                <p>
                                    These sessions are designed to bridge the gap between theory
                                    and practical surgical application, simplifying complex
                                    procedures and helping surgeons approach advanced cases with
                                    greater precision and confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="teaching-philosophy white-bg">
                    <div className="container">
                        <div className="philosophy-content">
                            <h2 className="lined-title">A Philosophy of Teaching</h2>

                            <p>
                                For Dr. Sonar, teaching is not only about demonstrating technique.
                            </p>

                            <p>It is about teaching surgeons how to think:</p>

                            <div className="philosophy-grid">
                                {philosophyItems.map((item, index) => (
                                    <div className="philosophy-item" key={index}>
                                        <div className="philosophy-icon">
                                            <img src={item.icon} alt="" />
                                        </div>

                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="philosophy-closing">
                                The goal is not imitation, but understanding.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Selected Work — Coverflow Swiper */}
                <WorkSwiper />

            </Layout>
        </main>
    );
}