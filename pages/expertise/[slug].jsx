import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getExpertiseBySlug, getExpertiseItems } from "../../lib/wordpress";

const fallbackExpertiseItems = [
    {
        title: "Laparoscopic Heller’s Cardiomyotomy",
        icon: "/images/laparoscopic.svg",
        slug: "laparoscopic-hellers-cardiomyotomy",
        description:
            "Advanced treatment for achalasia using minimally invasive techniques.",
    },
    {
        title: "Laparoscopic Hiatus Hernia Surgery",
        icon: "/images/laproscopic-hiatus.svg",
        slug: "laparoscopic-hiatus-hernia-surgery",
        description:
            "Repair of hiatus hernia with attention to reflux prevention and anatomy.",
    },
    {
        title: "Advanced GI Surgery",
        icon: "/images/advanced-gi.svg",
        slug: "advanced-gi-surgery",
        description:
            "Complex gastrointestinal procedures using laparoscopic and minimally invasive approaches.",
    },
    {
        title: "Complex Hernia Repair",
        icon: "/images/complex-hernia.svg",
        slug: "complex-hernia-repair",
        description: "Tailored approaches to recurrent or complicated hernia cases.",
    },
    {
        title: "Recurrent Hernia Surgery",
        icon: "/images/recurrent-hernia.svg",
        slug: "recurrent-hernia-surgery",
        description: "Management and repair strategies for recurrent hernias.",
    },
];

export default function ExpertiseDetail({ item }) {
    if (!item) {
        return (
            <Layout>
                <main className="inside-page">
                    <section className="inside-banner">
                        <div className="container">
                            <h1>Not Found</h1>
                        </div>
                    </section>

                    <section className="container">
                        <p>Sorry — that expertise area could not be found.</p>
                        <p>
                            <Link href="/expertise">Back to expertise list</Link>
                        </p>
                    </section>
                </main>
            </Layout>
        );
    }

    return (
        <Layout>
            <main className="inside-page">
                <section className="inside-banner">
                    <div className="container">
                        <h1>{item.title}</h1>
                    </div>
                </section>

                <section className="expertise-detail-section white-bg">
                    <div className="container">
                        <div className="expertise-detail-list">
                            <div className="expertise-detail-block full">
                                <h3>{item.title}</h3>
                                {item.content ? (
                                    <div
                                        className="wordpress-content"
                                        dangerouslySetInnerHTML={{ __html: item.content }}
                                    />
                                ) : (
                                    <div
                                        className="wordpress-content"
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    />
                                )}

                                <h4>Example procedures</h4>

                                <div className="procedure-grid">
                                    <div className="procedure-card">
                                        <Image
                                            src="/images/laparoscopic-rectopexy.webp"
                                            alt="Procedure"
                                            width={520}
                                            height={250}
                                        />
                                        <p>Example procedure</p>
                                    </div>

                                    <div className="procedure-card">
                                        <Image
                                            src="/images/laparoscopic-colectomy.webp"
                                            alt="Procedure"
                                            width={520}
                                            height={250}
                                        />
                                        <p>Example procedure</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export async function getStaticPaths() {
    let expertiseItems = fallbackExpertiseItems;

    try {
        const wordpressItems = await getExpertiseItems();
        if (wordpressItems.length) expertiseItems = wordpressItems;
    } catch (error) {
        console.warn(`Using local expertise paths: ${error.message}`);
    }

    const paths = expertiseItems.map((item) => ({ params: { slug: item.slug } }));

    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }) {
    let item = null;

    try {
        item = await getExpertiseBySlug(params.slug);
    } catch (error) {
        console.warn(`Using local expertise detail: ${error.message}`);
        item = fallbackExpertiseItems.find((entry) => entry.slug === params.slug) || null;
    }

    if (!item) return { notFound: true, revalidate: 60 };

    return {
        props: { item },
        revalidate: 300,
    };
}
