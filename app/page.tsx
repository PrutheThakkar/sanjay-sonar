import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import { getHomePageData, getSelectedWorkPageData } from "../lib/wordpress";
import { seoPageMetadata } from "../lib/seo";
import { fallbackCases } from "../lib/case-studies";
import SeoSchema from "../components/SeoSchema";

export const metadata = seoPageMetadata("/");

export default async function Page() {
  const [homeResult, casesResult] = await Promise.allSettled([
    getHomePageData(),
    getSelectedWorkPageData(),
  ]);
  const homePageData = homeResult.status === "fulfilled" ? homeResult.value : null;
  const selectedWork = casesResult.status === "fulfilled" ? casesResult.value : null;

  if (homeResult.status === "rejected") {
    console.error("Unable to load the WordPress homepage:", homeResult.reason);
  }
  if (casesResult.status === "rejected") {
    console.error("Unable to load the WordPress case studies:", casesResult.reason);
  }

  const caseStudies = selectedWork?.items?.length ? selectedWork.items : fallbackCases;

  return (
    <>
      <SeoSchema path="/" />
      <Layout>
      <HomePage
        heroSlides={homePageData?.heroSlides ?? []}
        aboutSection={homePageData?.aboutSection ?? null}
        expertiseSection={homePageData?.expertiseSection ?? null}
        caseStudies={caseStudies}
        teachingSection={homePageData?.teachingSection ?? []}
        consultationSection={homePageData?.consultationSection ?? null}
      />
      </Layout>
    </>
  );
}
