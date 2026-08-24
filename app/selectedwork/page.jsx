import SelectedWorkClient from "../../components/SelectedWorkClient";
import { getSelectedWorkPageData } from "../../lib/wordpress";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Selected Surgical Work",
  description:
    "Read selected case stories that illustrate Dr. Sanjay Sonar's experience, clinical judgment, and approach to complex surgical care.",
  path: "/selectedwork",
});

export default async function SelectedWorkPage() {
  let selectedWork = null;

  try {
    selectedWork = await getSelectedWorkPageData();
  } catch (error) {
    console.error("Unable to load the WordPress Selected Work page:", error);
  }

  return (
    <SelectedWorkClient
      pageTitle={selectedWork?.pageTitle || "Selected Work"}
      cases={selectedWork?.items?.length ? selectedWork.items : undefined}
    />
  );
}
