import Image from "next/image";
import Layout from "../../components/Layout";
import { getTeachingPageData } from "../../lib/wordpress";

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

export default async function TeachingPage() {
    let teaching = null;

    try {
        teaching = await getTeachingPageData();
    } catch (error) {
        console.error("Unable to load the WordPress Teaching page:", error);
    }

    return (
        <main className="teaching-page inside-page">
            <Layout>

                <section className="inside-banner ">
                    <div className="container">
                        <h1>{teaching?.pageTitle || "Teaching"}</h1>
                    </div>
                </section>

                {/* Top Teaching Intro */}
                <section className="teaching-intro white-bg">
                    <div className="container">
                        <div className="teaching-intro-grid">
                            <div className="teaching-image large">
                                {teaching?.introImageUrl ? (
                                    <Image
                                        src={teaching.introImageUrl}
                                        alt={teaching.introImageAlt}
                                        width={900}
                                        height={1040}
                                        priority
                                    />
                                ) : (
                                    <img
                                        src="/images/teaching-header-new.webp"
                                        alt="Dr. Sanjay Sonar teaching"
                                    />
                                )}
                            </div>

                            <div className="teaching-copy">
                                {teaching?.rightSectionHtml && (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: teaching.rightSectionHtml,
                                        }}
                                    />
                                    )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dark Academic Section */}
                <section className="teaching-academic green-bg">
                    <div className="container">
                        {teaching?.academicItems.map((item, index) => {
                            const image = item.imageUrl && (
                                <div className={`teaching-image small ${index % 2 === 0 ? "right" : "left"}`}>
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.imageAlt}
                                        width={760}
                                        height={620}
                                    />
                                </div>
                            );

                            const copy = (
                                <div className="academic-copy">
                                    {item.title && (
                                        <h2 className="lined-title">{item.title}</h2>
                                    )}
                                    {item.paragraphHtml && (
                                        <div
                                            dangerouslySetInnerHTML={{ __html: item.paragraphHtml }}
                                        />
                                    )}
                                </div>
                            );

                            return (
                                <div
                                    className={`academic-row ${index === 0 ? "first" : "second"}`}
                                    key={item.id}
                                >
                                    {index % 2 === 0 ? <>{copy}{image}</> : <>{image}{copy}</>}
                                </div>
                            );
                        })}
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
                {/* <WorkSwiper /> */}

            </Layout>
        </main>
    );
}
