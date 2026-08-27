import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import { getHomePageData } from "../lib/wordpress";
import { seoPageMetadata } from "../lib/seo";
import SeoSchema from "../components/SeoSchema";

export const metadata = seoPageMetadata("/");

export default async function Page() {
  let homePageData: Awaited<ReturnType<typeof getHomePageData>> | null = null;

  try {
    homePageData = await getHomePageData();
  } catch (error) {
    console.error("Unable to load the WordPress homepage:", error);
  }

  return (
    <>
      <SeoSchema path="/" />
      <Layout>
      <HomePage
        heroSlides={homePageData?.heroSlides ?? []}
        aboutSection={homePageData?.aboutSection ?? null}
        expertiseSection={homePageData?.expertiseSection ?? null}
        teachingSection={homePageData?.teachingSection ?? []}
        consultationSection={homePageData?.consultationSection ?? null}
      />
      </Layout>
    </>
  );
}
