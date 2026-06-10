import Image from "next/image";
import Layout from "../../components/Layout";

const aboutSections = [
  {
    title: "The Practice",
    text: [
      "Dr. Sanjay Sonar is an advanced laparoscopic surgeon with over 35 years of surgical experience, known for his work in complex and minimally invasive procedures.",
      "Over the course of his career, he has approached surgery not simply as a technical discipline, but as a process of continuous learning, refinement, and responsibility.",
      "His work focuses on understanding complexity with patience and clarity, carefully evaluating each condition, planning each step with precision, and choosing approaches designed for better long-term outcomes.",
    ],
    image: "/images/dss_aboutpage_thepractice-1.webp",
    imagePosition: "right",
  },
  {
    title: "Teaching & Mentorship",
    text: [
      "Teaching has remained a central part of his professional life.",
      "Dr. Sonar serves as an Honorary Professor at Grant Government Medical College & Sir J.J. Group of Hospitals, where he is actively involved in training and mentoring surgeons.",
      "He also conducts workshops and teaching programs in India and internationally, sharing practical surgical knowledge developed through decades of clinical experience.",
      "His approach to teaching is rooted in clarity and simplicity, focusing not only on surgical technique, but on judgment, decision-making, and understanding how to think through complexity.",
    ],
    image: "/images/dss_aboutpage_teaching-1.webp",
    imagePosition: "left",
  },
  {
    title: "Publications & Surgical Writing",
    text: [
      "Over the years, Dr. Sonar has contributed to medical education through textbooks, academic writing, and surgical documentation.",
      "His written work is driven by a simple idea: that complex surgical concepts should be made understandable, teachable, and useful to others.",
      "These contributions continue to support the learning and development of surgeons and trainees across different stages of practice.",
    ],
    image: "/images/dss_aboutpage_teaching-1.webp",
    imagePosition: "right",
  },
  {
    title: "Beyond the Operating Room",
    text: [
      "Outside surgery, Dr. Sonar remains involved in community initiatives and environmental efforts, including plantation drives.",
      "He believes that meaningful work extends beyond professional achievement, and that knowledge and experience carry a responsibility to contribute more widely.",
      "At heart, his work is guided by reflection, consistency, and the belief that careful effort, over time, shapes both practice and people.",
    ],
    image: "/images/dss_aboutpage_beyond_the_operating_room_1.webp",
    imagePosition: "left",
  },
];

export default function AboutPage() {
  return (
    <main className="inside-page about-page">
      <Layout>

        <section className="inside-banner">
          <div className="container">
            <h1  data-aos="fade-in">About Page</h1>
          </div>
        </section>


        <section className="about-intro green-bg">
          <div className="container">
            <div className="about-intro-wrapper">
              <div className="about-intro-img" data-aos="fade-up" >
                <Image
                  src="/images/dss_aboutpage_about_1.webp"
                  alt="Dr. Sanjay Sonar teaching surgery"
                  width={560}
                  height={520}
                  priority
                />
              </div>

              <div className="about-intro-content" data-aos="fade-left">
                <h2>
                  About
                  <span className="subheading">
                    A life shaped by surgery, teaching, and thoughtful practice.
                  </span>
                </h2>

                <p>
                  Dr. Sanjay Sonar is an advanced laparoscopic surgeon with over
                  35 years of surgical experience, known for his work in complex
                  and minimally invasive procedures.
                </p>

                <p>
                  Over the course of his career, he has approached surgery not
                  simply as a technical discipline, but as a process of
                  continuous learning, refinement, and responsibility.
                </p>

                <p>
                  His work focuses on understanding complexity with patience and
                  clarity, carefully evaluating each condition, planning each
                  step with precision, and choosing approaches designed for
                  better long-term outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-story white-bg">
          <div className="container">
            {aboutSections.map((section) => (
              <div data-aos="fade-up"
                className={`about-story-row ${section.imagePosition === "right" ? "image-right" : "image-left"
                  }`}
                key={section.title}
              >
                <div className="about-story-img">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={520}
                    height={360}
                  />
                </div>

                <div className="about-story-content" data-aos="fade-right">
                  <h2>{section.title}</h2>

                  {section.text.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-closing green-bg" >
          <div className="container">
            <p data-aos="fade-up">
              Over decades of practice, teaching, and continued learning, one
              principle has remained constant: to approach every case with
              clarity, precision, and care and to leave the discipline stronger
              than it was found.
            </p>

            <div className="about-consultation" data-aos="fade-up">
              <h2>Publications & Surgical Writing</h2>
              <p>For consultations, evaluations, or second opinions:</p>
              <a href="/contact" className="cta">Request a consultation</a>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}