import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";

const expertiseItems = [
    {
        title: "Laparoscopic Heller’s Cardiomyotomy",
        icon: "/images/laparoscopic.svg",
        slug: "laparoscopic-hellers-cardiomyotomy",
    },
    {
        title: "Laparoscopic Hiatus Hernia Surgery",
        icon: "/images/laproscopic-hiatus.svg",
        slug: "laparoscopic-hiatus-hernia-surgery",
    },
    {
        title: "Advanced GI Surgery",
        icon: "/images/advanced-gi.svg",
        slug: "advanced-gi-surgery",
    },
    {
        title: "Complex Hernia Repair",
        icon: "/images/complex-hernia.svg",
        slug: "complex-hernia-repair",
    },
    {
        title: "Recurrent Hernia Surgery",
        icon: "/images/recurrent-hernia.svg",
        slug: "recurrent-hernia-surgery",
    },
];

export default function ExpertisePage() {
    return (
            <main className="inside-page expertise-page">
        <Layout>
                <section className="inside-banner">
                    <div className="container">
                        <h1>Expertise</h1>
                    </div>
                </section>

                <section className="expertise-top-section green-bg">
                    <div className="container">
                        <div className="expertise-top-wrapper">
                            <div className="expertise-top-content">
                                <h2>
                                    Expertise
                                    <span className="subheading">
                                        Refined through years of surgical practice.
                                    </span>
                                </h2>

                                <p>
                                    Some surgical methods are learned through repetition. <br />
                                    Others are refined over years of careful practice. Dr. Sanjay Sonar’s work is shaped by more than three decades of
                                    experience in advanced laparoscopic surgery, managing cases that demand
                                    precision, judgment, and a deep understanding of surgical complexity.
                                </p>

                                <p>
                                    Every technique used in practice has been tested, evaluated, and
                                    continuously refined with one objective in mind: better outcomes from
                                    the very beginning. The focus is not only on performing surgery successfully, but on
                                    planning it thoughtfully, reducing unnecessary trauma, improving
                                    recovery, and choosing the most effective approach for each individual
                                    case.
                                </p>


                                <p>
                                    Over time, this process of observation, refinement, and execution has
                                    helped shape methods that are now taught, documented, and shared with
                                    surgeons more widely. The work spans a broad range of advanced and minimally invasive
                                    procedures across gastrointestinal, colorectal, thoracic, endocrine,
                                    urological, vascular, and hernia surgery.
                                </p>
                               
                            </div>

                            <div className="expertise-top-img">
                                <Image
                                    src="/images/expertise-top-img.webp"
                                    alt="Dr. Sanjay Sonar"
                                    width={520}
                                    height={420}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>



                <section className="expertise-overview white-bg">
                    <div className="container">
                        <div className="expertise-overview-header">
                            <h2>
                                Areas of Expertise
                                <span className="subheading">
                                    Advanced Gastrointestinal & Hernia Surgery
                                </span>
                            </h2>

                            <p>
                                Careful management of complex gastrointestinal conditions using
                                minimally invasive approaches wherever appropriate, with a focus on
                                precision, recovery, and long-term outcomes.
                            </p>
                        </div>

                        <div className="expertise-list-block">
                            <h3>Advanced Gastrointestinal & Hernia Surgery</h3>

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


                <section className="expertise-detail-section white-bg">
                    <div className="container">
                        <div className="expertise-detail-list">
                            <div className="expertise-detail-block full">
                                <h3>Colorectal Surgery</h3>
                                <p>
                                    Advanced laparoscopic procedures designed to manage colorectal conditions
                                    with careful surgical planning and minimally invasive access
                                </p>

                                <h4>Procedures include: </h4>

                                <div className="procedure-grid">
                                    <div className="procedure-card">
                                        <Image
                                            src="/images/Laparoscopic-Rectopexy-new.webp"
                                            alt="Laparoscopic Rectopexy"
                                            width={520}
                                            height={250}
                                        />
                                        <p>Laparoscopic Rectopexy </p>
                                    </div>

                                    <div className="procedure-card">
                                        <Image
                                            src="/images/Laparoscopic-Colectomy-new.webp"
                                            alt="Laparoscopic Colectomy"
                                            width={520}
                                            height={250}
                                        />
                                        <p>Laparoscopic Colectomy </p>
                                    </div>
                                </div>
                            </div>

                            <div className="expertise-detail-block full">
                                <h3>General Laparoscopic Surgery </h3>
                                <p>
                                    Common and complex abdominal procedures carried out using refined laparoscopic techniques developed through years of practice
                                </p>

                                <h4>Procedures include:</h4>

                                <div className="procedure-grid">
                                    <div className="procedure-card">
                                        <Image
                                            src="/images/laparoscopic-cholecystectomy.webp"
                                            alt="Laparoscopic Cholecystectomy"
                                            width={520}
                                            height={250}
                                        />
                                        <p>Laparoscopic Cholecystectomy </p>
                                    </div>

                                    <div className="procedure-card">
                                        <Image
                                            src="/images/laparoscopic-appendicectomy.webp"
                                            alt="Laparoscopic Appendicectomy"
                                            width={520}
                                            height={250}
                                        />
                                        <p>Laparoscopic Appendicectomy </p>
                                    </div>
                                </div>
                            </div>

                            <div className="expertise-detail-row">
                                <div className="expertise-detail-block">
                                    <h3>Thoracic Surgery </h3>
                                    <p>
                                        Minimally invasive thoracic procedures performed
                                        using video-assisted techniques
                                        for improved precision and recovery
                                    </p>

                                    <h4>Procedures include:</h4>

                                    <div className="procedure-card">
                                        <Image
                                            src="/images/laparoscopic-rectopexy.webp"
                                            alt="Laparoscopic Rectopexy"
                                            width={520}
                                            height={250}
                                        />
                                        <p>Laparoscopic Rectopexy </p>
                                    </div>
                                </div>

                                <div className="expertise-detail-block">
                                    <h3>Endocrine Surgery </h3>
                                    <p>
                                        Minimally invasive thyroid procedures approached with careful
                                        anatomical precision and surgical planning
                                    </p>

                                    <h4>Procedures include:</h4>

                                    <div className="procedure-card">
                                        <Image
                                            src="/images/laparoscopic-thyroid-surgery.webp"
                                            alt="Laparoscopic Thyroid Surgery"
                                            width={520}
                                            height={250}
                                        />
                                        <p>Laparoscopic Thyroid Surgery </p>
                                    </div>
                                </div>
                            </div>

                            <div className="expertise-detail-row">
                                <div className="expertise-detail-block">
                                    <h3>Reconstructive Urological Surgery</h3>
                                    <p>
                                        Procedures focused on restoring function while minimizing surgical<br />
                                        trauma wherever possible
                                    </p>

                                    <h4>Procedures include:</h4>

                                    <div className="procedure-card">
                                        <Image
                                            src="/images/pyeloplasty.webp"
                                            alt="Pyeloplasty"
                                            width={520}
                                            height={250}
                                        />
                                        <p>Pyeloplasty</p>
                                    </div>
                                </div>

                                <div className="expertise-detail-block">
                                    <h3>Vascular Procedures</h3>
                                    <p>
                                        Modern minimally invasive treatment approaches for vascular
                                        conditions affecting comfort, mobility, and circulation
                                    </p>

                                    <h4>Procedures include:</h4>

                                    <div className="procedure-card">
                                        <Image
                                            src="/images/laser-treatment.webp"
                                            alt="Laser Treatment for Varicose Veins"
                                            width={520}
                                            height={250}
                                        />
                                        <p>Laser Treatment for Varicose Veins</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="expertise-closing">
                            <p>
                                Throughout every area of practice, the approach remains consistent:
                                <br />
                                to understand the problem fully, operate with precision, and build
                                towards the best possible long-term outcome
                            </p>

                            <p>
                                For consultations, evaluations, or second opinions in complex surgical
                                cases:
                            </p>

                            <a href="#consultation" className="expertise-btn">
                                Request a consultation
                            </a>
                        </div>
                    </div>
                </section>

        </Layout>
            </main>
    );
}