import Image from "next/image";
import Layout from "../../components/Layout";
import { getAboutPageData } from "../../lib/wordpress";

type PracticeSection = {
  id: string;
  title: string;
  paragraphHtml: string;
  imageUrl: string | null;
  imageAlt: string;
  imagePosition: "right" | "left";
};

export default async function AboutPage() {
  let aboutPageData: Awaited<ReturnType<typeof getAboutPageData>> | null = null;

  try {
    aboutPageData = await getAboutPageData();
  } catch (error) {
    console.error("Unable to load the WordPress About page:", error);
  }

  const practiceSections = (aboutPageData?.practiceSections ?? []) as PracticeSection[];

  return (
    <main className="inside-page about-page">
      <Layout>
        {aboutPageData?.pageTitle && (
          <section className="inside-banner">
            <div className="container">
              <h1 data-aos="fade-in">{aboutPageData.pageTitle}</h1>
            </div>
          </section>
        )}

        {(aboutPageData?.intro.imageUrl ||
          aboutPageData?.intro.titleHtml ||
          aboutPageData?.intro.paragraphHtml) && (
          <section className="about-intro green-bg">
            <div className="container">
              <div className="about-intro-wrapper">
                {aboutPageData.intro.imageUrl && (
                  <div className="about-intro-img" data-aos="fade-up">
                    <Image
                      src={aboutPageData.intro.imageUrl}
                      alt={aboutPageData.intro.imageAlt}
                      width={560}
                      height={520}
                      priority
                    />
                  </div>
                )}

                {(aboutPageData.intro.titleHtml ||
                  aboutPageData.intro.paragraphHtml) && (
                  <div className="about-intro-content" data-aos="fade-left">
                    {aboutPageData.intro.titleHtml && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: aboutPageData.intro.titleHtml,
                        }}
                      />
                    )}
                    {aboutPageData.intro.paragraphHtml && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: aboutPageData.intro.paragraphHtml,
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {!!practiceSections.length && (
          <section className="about-story white-bg">
            <div className="container">
              {practiceSections.map((section) => (
                <div
                  data-aos="fade-up"
                  className={`about-story-row ${
                    section.imagePosition === "right" ? "image-right" : "image-left"
                  }`}
                  key={section.id}
                >
                  {section.imageUrl && (
                    <div className="about-story-img">
                      <Image
                        src={section.imageUrl}
                        alt={section.imageAlt}
                        width={520}
                        height={360}
                      />
                    </div>
                  )}

                  {(section.title || section.paragraphHtml) && (
                    <div className="about-story-content" data-aos="fade-right">
                      {section.title && <h2>{section.title}</h2>}
                      {section.paragraphHtml && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: section.paragraphHtml,
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </Layout>
    </main>
  );
}
