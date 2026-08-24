import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import { getHomePageData } from "../lib/wordpress";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Advanced Laparoscopic Surgeon in Mumbai",
  description:
    "Meet Dr. Sanjay Sonar, a Mumbai-based general and advanced laparoscopic surgeon with more than three decades of experience in minimally invasive and complex surgery.",
  path: "/",
});

export default async function Page() {
  let homePageData: Awaited<ReturnType<typeof getHomePageData>> | null = null;

  try {
    homePageData = await getHomePageData();
  } catch (error) {
    console.error("Unable to load the WordPress homepage:", error);
  }

  return (
    <Layout>
      <HomePage
        heroSlides={homePageData?.heroSlides ?? []}
        aboutSection={homePageData?.aboutSection ?? null}
        expertiseSection={homePageData?.expertiseSection ?? null}
        teachingSection={homePageData?.teachingSection ?? []}
        consultationSection={homePageData?.consultationSection ?? null}
      />
    </Layout>
  );
}
