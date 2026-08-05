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
    {
        title: "Laparoscopic Rectopexy",
        icon: "/images/Laparoscopic-Rectopexy-new.webp",
        slug: "laparoscopic-rectopexy",
        description: "A minimally invasive procedure used to treat rectal prolapse.",
    },
    {
        title: "Laparoscopic Colectomy",
        icon: "/images/Laparoscopic-Colectomy-new.webp",
        slug: "laparoscopic-colectomy",
        description: "Minimally invasive removal of part or all of the colon.",
    },
    {
        title: "Laparoscopic Cholecystectomy",
        icon: "/images/laparoscopic-cholecystectomy.webp",
        slug: "laparoscopic-cholecystectomy",
        description: "Minimally invasive surgical removal of the gallbladder.",
    },
    {
        title: "Laparoscopic Appendicectomy",
        icon: "/images/laparoscopic-appendicectomy.webp",
        slug: "laparoscopic-appendicectomy",
        description: "Minimally invasive surgical removal of the appendix.",
    },
    {
        title: "Laparoscopic Thyroid Surgery",
        icon: "/images/laparoscopic-thyroid-surgery.webp",
        slug: "laparoscopic-thyroid-surgery",
        description: "A minimally invasive approach to selected thyroid conditions.",
    },
    {
        title: "Pyeloplasty",
        icon: "/images/pyeloplasty.webp",
        slug: "pyeloplasty",
        description: "Reconstructive surgery to restore drainage from the kidney.",
    },
    {
        title: "Laser Treatment for Varicose Veins",
        icon: "/images/laser-treatment.webp",
        slug: "laser-treatment-for-varicose-veins",
        description: "Minimally invasive laser treatment for problematic varicose veins.",
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

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                </p>
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
    }

    if (!item) {
        item = fallbackExpertiseItems.find((entry) => entry.slug === params.slug) || null;
    }

    if (!item) return { notFound: true, revalidate: 60 };

    return {
        props: { item },
        revalidate: 300,
    };
}
