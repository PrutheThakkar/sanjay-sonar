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

const expertiseDetailText = {
    "laparoscopic-hellers-cardiomyotomy": [
        "Add the additional content for Laparoscopic Heller’s Cardiomyotomy here.",
    ],
    "laparoscopic-hiatus-hernia-surgery": [
        "Add the additional content for Laparoscopic Hiatus Hernia Surgery here.",
    ],
    "advanced-gi-surgery": [
        "Add the additional content for Advanced GI Surgery here.",
    ],
    "complex-hernia-repair": [
        "Add the additional content for Complex Hernia Repair here.",
    ],
    "recurrent-hernia-surgery": [
        "Add the additional content for Recurrent Hernia Surgery here.",
    ],
    "laparoscopic-rectopexy": [
        "Living with rectal prolapse can be both uncomfortable and embarrassing. It is a condition where the rectum, the last part of the large intestine, slips down and protrudes through the anus. Many patients experience a visible swelling, difficulty controlling bowel movements, constipation, or a feeling that the bowel doesn't empty completely. Although it is more common in older adults, it can affect younger individuals as well.",
        "When symptoms begin to interfere with daily life, Laparoscopic Rectopexy offers a safe and effective treatment option. The aim of the surgery is to restore the rectum to its normal position and secure it so that it does not slip down again.",
        "The procedure is performed using keyhole surgery, which involves a few small incisions in the abdomen. Using a high-definition camera and specialised instruments, the rectum is carefully freed from the surrounding tissues, lifted back into its normal position, and fixed securely to the back of the pelvis. In some patients, a portion of the bowel may also be removed if there is significant constipation or redundancy of the colon.",
        "Compared to traditional open surgery, laparoscopic rectopexy offers several advantages, including smaller scars, less pain, reduced blood loss, and a quicker recovery. Most patients are able to walk within a day of surgery and gradually resume their daily activities over the following few weeks.",
        "Before recommending surgery, Dr. Sanjay Sonar performs a thorough evaluation to understand the severity of the prolapse and identify any associated bowel problems. This helps determine the most appropriate surgical approach for each individual.",
        "The surgery not only corrects the prolapse but also improves bowel function and quality of life for many patients. With years of experience in advanced laparoscopic colorectal surgery, Dr. Sonar focuses on delivering long-lasting results while ensuring a safe and comfortable recovery.",
    ],
    "laparoscopic-colectomy": [
        "The colon, also known as the large intestine, plays an important role in absorbing water and forming stools. Certain conditions affecting the colon may require surgery to remove a diseased portion while preserving the healthy bowel. This procedure is known as a colectomy.",
        "A laparoscopic colectomy may be recommended for conditions such as colon cancer, large non-cancerous growths (polyps), recurrent diverticulitis, inflammatory bowel disease, bowel obstruction, or certain types of intestinal bleeding. The exact type of surgery depends on which part of the colon is affected.",
        "The operation is performed using keyhole surgery, where a few small incisions are made in the abdomen. Through these openings, a camera and specialised instruments are used to carefully remove the affected portion of the colon. The healthy ends of the bowel are then joined together so that digestion can continue normally. Because the surgery is performed through small incisions, there is less trauma to the body compared to traditional open surgery.",
        "Patients undergoing laparoscopic colectomy often experience less pain after surgery, smaller scars, lower risk of wound infection, and a shorter hospital stay. They are encouraged to start moving soon after the operation and gradually return to eating and normal activities as advised by their surgeon.",
        "Before surgery, Dr. Sanjay Sonar carries out a detailed assessment that may include colonoscopy, CT scans, blood tests, and other investigations depending on the underlying condition. This ensures that every patient receives a treatment plan tailored to their specific needs.",
        "With decades of experience in advanced gastrointestinal surgery, Dr. Sonar performs laparoscopic colectomies with a strong emphasis on patient safety, precise surgical technique, and faster recovery. His goal is to remove the disease effectively while helping patients return to a healthy and active lifestyle as quickly as possible.",
    ],
    "video-assisted-thoracoscopic-surgery-vats": [
        "If you've been told you need surgery for a condition affecting your lungs or the space around them, you may not always need a large incision across the chest. Video-Assisted Thoracoscopic Surgery (VATS) is a minimally invasive technique that allows many chest procedures to be performed through a few small cuts, helping patients recover faster with less pain.",
        "VATS may be recommended for a variety of conditions, including lung nodules, recurrent fluid around the lungs, collapsed lungs (pneumothorax), certain lung infections, biopsies of the lung or lymph nodes, and some early-stage lung cancers. It can also be used to diagnose conditions when scans alone cannot provide clear answers.",
        "During the procedure, a tiny camera is inserted through a small incision between the ribs, giving the surgeon a clear, magnified view of the chest cavity. Specialised instruments are introduced through two or three additional small openings to perform the surgery with precision. Since the muscles and ribs are not widely separated as they are in traditional open surgery, patients usually experience much less discomfort after the procedure.",
        "The advantages of VATS include smaller scars, less pain, reduced blood loss, a lower risk of infection, and a shorter hospital stay. Most patients are able to get out of bed and start walking within a day, allowing them to recover and return to their daily routine much sooner than with conventional chest surgery.",
        "Every patient undergoes a detailed evaluation before surgery, which may include chest CT scans, pulmonary function tests, blood investigations, and other imaging studies. These help determine whether VATS is the most suitable option for the condition being treated.",
        "With experience in minimally invasive thoracic procedures, Dr. Sanjay Sonar focuses on providing safe, evidence-based treatment while ensuring that every patient understands their diagnosis, treatment options, and recovery journey. The aim is always to achieve the best possible surgical outcome with the least disruption to everyday life.",
    ],
    "laparoscopic-cholecystectomy": [
        "Gallstones are one of the most common reasons people experience sudden pain in the upper abdomen, especially after eating oily or heavy meals. While some gallstones remain silent, others can cause repeated pain, nausea, vomiting, infection, or even blockage of the bile ducts. When gallstones start causing symptoms, the most effective treatment is usually the removal of the gallbladder through Laparoscopic Cholecystectomy.",
        "The gallbladder is a small pouch that stores bile, a digestive fluid made by the liver. Although it plays a role in digestion, you can live a completely normal life without it. Once the gallbladder is removed, bile flows directly from the liver into the intestine.",
        "Laparoscopic cholecystectomy is performed using keyhole surgery, where four small incisions are made in the abdomen. A tiny camera and specialised instruments are used to carefully remove the gallbladder while avoiding unnecessary injury to the surrounding structures. Compared to traditional open surgery, this approach causes much less pain and leaves only small scars.",
        "Most patients are able to walk on the same day or the following morning after surgery and are discharged within 24 to 48 hours, depending on their recovery. They can gradually return to their normal diet and routine over the next few days, although heavy lifting may need to be avoided for a short period.",
        "Before surgery, Dr. Sanjay Sonar evaluates your symptoms, ultrasound findings, and overall health to ensure that surgery is the right choice. In some cases, additional tests may be needed if there is a suspicion of stones in the bile duct or other complications.",
        "Gallstones rarely disappear on their own, and delaying treatment can sometimes lead to more serious problems such as gallbladder infection, jaundice, or pancreatitis. With decades of experience in laparoscopic surgery, Dr. Sonar performs gallbladder removal with a strong focus on patient safety, quicker recovery, and long-term relief from symptoms.",
    ],
    "laparoscopic-appendicectomy": [
        "Pain that starts around the belly button and later shifts to the lower right side of the abdomen could be a sign of appendicitis. This condition occurs when the appendix, a small finger-like pouch attached to the large intestine, becomes inflamed. Without timely treatment, the appendix can burst, leading to a serious infection inside the abdomen.",
        "The standard treatment for appendicitis is Laparoscopic Appendicectomy, a minimally invasive procedure to remove the inflamed appendix before complications develop. Early surgery not only relieves pain but also reduces the risk of rupture and infection.",
        "The operation is performed through a few small cuts in the abdomen using a camera and specialised instruments. Once the appendix is identified, it is safely removed, and the small incisions are closed. Because the surgery is performed laparoscopically, patients usually experience less pain, minimal scarring, and a quicker recovery than they would after open surgery.",
        "In some patients, especially if the appendix has already burst or there is a widespread infection, the procedure may be more complex. However, even in many of these situations, a laparoscopic approach can still be safely performed by an experienced surgeon.",
        "Recovery is generally quick. Many patients are able to walk within a few hours of surgery and return home within one or two days. Most people can resume their regular activities within a couple of weeks, depending on the severity of the infection and the nature of their work.",
        "Before surgery, Dr. Sanjay Sonar confirms the diagnosis through a detailed clinical examination, blood tests, and imaging such as an ultrasound or CT scan whenever required. This helps ensure that the symptoms are truly due to appendicitis and not another abdominal condition.",
        "With over three decades of experience in emergency and laparoscopic surgery, Dr. Sonar has treated thousands of patients with appendicitis, ranging from routine cases to complex emergencies. His focus is on timely diagnosis, safe surgery, and helping patients recover as comfortably and quickly as possible.",
    ],
    "laparoscopic-thyroid-surgery": [
        "Being told that you need thyroid surgery can feel overwhelming, especially if you're worried about a visible scar on your neck. The good news is that in selected patients, thyroid surgery can now be performed using a minimally invasive approach, allowing the thyroid gland to be removed without leaving a prominent scar on the front of the neck.",
        "The thyroid is a small, butterfly-shaped gland located at the base of the neck. It produces hormones that help regulate your body's metabolism, energy levels, and many other important functions. Surgery may be recommended if you have a thyroid nodule, a benign tumour, an overactive thyroid, or, in some cases, thyroid cancer.",
        "Unlike conventional thyroid surgery, which requires an incision across the neck, laparoscopic thyroid surgery is performed through small incisions that are carefully placed in less visible areas, such as the chest or underarm, depending on the technique used. Using a high-definition camera and specialised instruments, the thyroid gland is removed while preserving the surrounding nerves and parathyroid glands that control calcium levels.",
        "One of the biggest advantages of this approach is cosmetic. Patients who are suitable candidates can avoid a noticeable scar on the neck while receiving the same effective treatment as traditional surgery. Smaller incisions also mean less pain, quicker recovery, and a faster return to normal activities.",
        "Not everyone is a candidate for laparoscopic thyroid surgery. The size of the thyroid, the nature of the lump, and the diagnosis all play an important role in deciding the best surgical approach. Before recommending surgery, Dr. Sanjay Sonar performs a detailed evaluation that may include blood tests, ultrasound, and a needle biopsy (FNAC) if required.",
        "Dr. Sonar was among the early surgeons in India to perform laparoscopic thyroid surgery at a time when the procedure was still evolving internationally. His experience allows him to carefully select patients who can benefit from this advanced technique while ensuring that safety always comes first. The goal is simple—to treat the thyroid condition effectively while helping patients recover with confidence and minimal visible scarring.",
    ],
    "pyeloplasty": [
        "If you've been experiencing repeated kidney pain, recurrent urinary infections, or have been told that your kidney is swollen, the problem may not be a kidney stone. In some people, the connection between the kidney and the tube that carries urine to the bladder becomes narrowed, making it difficult for urine to drain normally. This condition is called Pelvi-Ureteric Junction (PUJ) Obstruction, and it can gradually damage the kidney if left untreated.",
        "Pyeloplasty is the surgery performed to correct this blockage and restore the normal flow of urine. The procedure can be performed using laparoscopic (keyhole) surgery, allowing patients to recover faster with less discomfort than traditional open surgery.",
        "During the operation, Dr. Sanjay Sonar carefully removes the narrowed segment and reconnects the healthy portions of the urinary tract, creating a wider passage for urine to drain freely. In some patients, an unusually placed blood vessel may be contributing to the blockage. In such cases, the surgery also involves carefully preserving the blood vessel while reconstructing the urinary passage, ensuring that the kidney continues to receive an adequate blood supply.",
        "Because the surgery is performed through small incisions, patients usually experience less pain, minimal blood loss, and a shorter hospital stay. Most people are encouraged to start walking soon after surgery and gradually return to their normal routine over the following few weeks.",
        "Before recommending pyeloplasty, Dr. Sonar performs a thorough evaluation using ultrasound, CT scans, and specialised kidney function tests to understand the severity of the blockage and assess how well the affected kidney is functioning.",
        "With decades of experience in advanced laparoscopic surgery, Dr. Sonar has successfully treated both adults and children with PUJ obstruction. His focus is on preserving kidney function, relieving symptoms, and providing a long-term solution that allows patients to lead a healthy, active life without repeated infections or persistent pain.",
    ],
    "laser-treatment-for-varicose-veins": [
        "Do you notice swollen, twisted veins on your legs? Do your legs feel heavy, tired, or achy after standing for long hours? These could be signs of varicose veins, a condition in which the veins in the legs stop carrying blood efficiently back to the heart. Although many people think varicose veins are only a cosmetic concern, they can also cause pain, swelling, skin changes, and, in some cases, non-healing ulcers if left untreated.",
        "Today, most varicose veins can be treated without large cuts or stitches. Laser Treatment for Varicose Veins, also known as Endovenous Laser Therapy (EVLT), is a minimally invasive procedure that seals the affected vein from the inside, allowing blood to naturally flow through healthier veins.",
        "The treatment is performed under ultrasound guidance. A thin laser fibre is inserted into the affected vein through a tiny puncture in the skin. As the laser is activated, the vein gradually closes and is eventually absorbed by the body over time. Because the procedure does not involve large incisions, patients experience minimal discomfort and can usually walk soon after treatment.",
        "One of the biggest advantages of laser treatment is the quick recovery. Most patients return home the same day and are able to resume their normal daily activities within a short period. Compared to traditional vein surgery, laser treatment causes less pain, minimal scarring, and a lower risk of complications.",
        "Before recommending treatment, Dr. Sanjay Sonar performs a detailed clinical examination along with a Doppler ultrasound scan to identify which veins are affected and plan the most appropriate treatment.",
        "The aim of laser treatment is not just to improve the appearance of the legs but also to relieve pain, reduce swelling, improve circulation, and prevent future complications. With his experience in minimally invasive vascular procedures, Dr. Sonar offers personalised treatment plans that help patients return to an active and comfortable lifestyle with confidence.",
    ],
    "laparoscopic-rectopexy-2": [
        "Living with rectal prolapse can be both uncomfortable and embarrassing. It is a condition where the rectum, the last part of the large intestine, slips down and protrudes through the anus. Many patients experience a visible swelling, difficulty controlling bowel movements, constipation, or a feeling that the bowel doesn't empty completely. Although it is more common in older adults, it can affect younger individuals as well.",
        "When symptoms begin to interfere with daily life, Laparoscopic Rectopexy offers a safe and effective treatment option. The aim of the surgery is to restore the rectum to its normal position and secure it so that it does not slip down again.",
        "The procedure is performed using keyhole surgery, which involves a few small incisions in the abdomen. Using a high-definition camera and specialised instruments, the rectum is carefully freed from the surrounding tissues, lifted back into its normal position, and fixed securely to the back of the pelvis. In some patients, a portion of the bowel may also be removed if there is significant constipation or redundancy of the colon.",
        "Compared to traditional open surgery, laparoscopic rectopexy offers several advantages, including smaller scars, less pain, reduced blood loss, and a quicker recovery. Most patients are able to walk within a day of surgery and gradually resume their daily activities over the following few weeks.",
        "Before recommending surgery, Dr. Sanjay Sonar performs a thorough evaluation to understand the severity of the prolapse and identify any associated bowel problems. This helps determine the most appropriate surgical approach for each individual.",
        "The surgery not only corrects the prolapse but also improves bowel function and quality of life for many patients. With years of experience in advanced laparoscopic colorectal surgery, Dr. Sonar focuses on delivering long-lasting results while ensuring a safe and comfortable recovery.",
    ],
};

export default function ExpertiseDetail({ item }) {
    if (!item) {
        return (
                <main className="inside-page">
            <Layout>
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
            </Layout>
                </main>
        );
    }

    return (
            <main className="inside-page">
        <Layout>
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

                                {(expertiseDetailText[item.slug] || [
                                    `Add the additional content for ${item.title} here.`,
                                ]).map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
        </Layout>
            </main>
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
