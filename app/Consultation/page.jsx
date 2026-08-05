import Image from "next/image";
import Layout from "../../components/Layout";
import ContactForm from "../../components/ContactForm";
import { getConsultationPageData } from "../../lib/wordpress";

function CmsTitle({ html }) {
  if (!html) return null;

  if (/<h[1-6]\b/i.test(html)) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return <h2 dangerouslySetInnerHTML={{ __html: html }} />;
}

export default async function ConsultationPage() {
  let consultation = null;

  try {
    consultation = await getConsultationPageData();
  } catch (error) {
    console.error("Unable to load the WordPress Consultation page:", error);
  }

  if (!consultation) {
    return (
      <main className="inside-page consultation-page">
        <Layout />
      </main>
    );
  }

  const hasIntroduction =
    consultation.consultationTitleHtml || consultation.consultationParagraphHtml;
  const hasExpectations =
    consultation.whatToExpectTitleHtml ||
    consultation.patientsGuidedHtml ||
    consultation.patientItems.length;
  const hasSecondOpinion =
    consultation.secondOpinionsTitleHtml ||
    consultation.secondParagraphHtml ||
    consultation.areaCommonlyHtml ||
    consultation.areaItems.length;

  return (
    <main className="inside-page consultation-page">
      <Layout>
        {consultation.pageTitle && (
          <section className="inside-banner">
            <div className="container">
              <h1>{consultation.pageTitle}</h1>
            </div>
          </section>
        )}

        {hasIntroduction && (
          <section className="about-hero white-bg">
            <div className="container">
              <div className="about-hero-wrapper">
                <div className="about-hero-img">
                  <Image
                    src="/images/cunsultation-page.webp"
                    alt={consultation.pageTitle}
                    width={820}
                    height={760}
                    priority
                  />
                </div>

                <div className="about-hero-content">
                  <CmsTitle html={consultation.consultationTitleHtml} />
                  {consultation.consultationParagraphHtml && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: consultation.consultationParagraphHtml,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {hasExpectations && (
          <section className="expect-section green-bg">
            <div className="container">
              <div className="expect-content">
                <CmsTitle html={consultation.whatToExpectTitleHtml} />

                {consultation.patientsGuidedHtml && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: consultation.patientsGuidedHtml,
                    }}
                  />
                )}

                {!!consultation.patientItems.length && (
                  <div className="expect-list">
                    {consultation.patientItems.map((item) => (
                      <div className="expect-item" key={item.id}>
                        {item.iconUrl && (
                          <div className="expect-icon">
                            <Image
                              src={item.iconUrl}
                              alt={item.iconAlt}
                              width={72}
                              height={72}
                            />
                          </div>
                        )}
                        {item.title && <p>{item.title}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {hasSecondOpinion && (
          <section className="second-opinion-section white-bg">
            <div className="container">
              {(consultation.secondOpinionsTitleHtml ||
                consultation.secondParagraphHtml) && (
                <div className="second-opinion-content">
                  <CmsTitle html={consultation.secondOpinionsTitleHtml} />
                  {consultation.secondParagraphHtml && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: consultation.secondParagraphHtml,
                      }}
                    />
                  )}
                </div>
              )}

              {consultation.areaCommonlyHtml && (
                <div
                  className="evaluated-block"
                  dangerouslySetInnerHTML={{
                    __html: consultation.areaCommonlyHtml,
                  }}
                />
              )}

              {!!consultation.areaItems.length && (
                <div className="evaluated-grid">
                  {consultation.areaItems.map((item) => (
                    <div className="evaluated-card" key={item.id}>
                      {item.imageUrl && (
                        <div className="evaluated-img">
                          <Image
                            src={item.imageUrl}
                            alt={item.imageAlt}
                            width={260}
                            height={145}
                          />
                        </div>
                      )}
                      {item.title && <p>{item.title}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        <section className="consultation-final green-bg section-active">
          <div className="container">
            <div className="prep-block">
              <h2>Preparing for Your Consultation</h2>
              <p>If available, patients are encouraged to carry:</p>

              <div className="prep-timeline">
                {[
                  "Previous medical records",
                  "Investigation reports and scans",
                  "Current prescriptions",
                  "Details of prior surgeries or treatments",
                ].map((item) => (
                  <div className="prep-step" key={item}>
                    <div className="prep-line" />
                    <span className="prep-dot" />
                    <p className="name">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="appointment-row">
              {consultation.appointmentRequestHtml && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: consultation.appointmentRequestHtml,
                  }}
                />
              )}
              <div className="appointment-card">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}
