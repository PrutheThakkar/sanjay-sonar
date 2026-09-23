import SelectedWorkClient from "../../components/SelectedWorkClient";
import { getSelectedWorkPageData } from "../../lib/wordpress";
import { seoPageMetadata } from "../../lib/seo";

export const metadata = seoPageMetadata("/selected-work");

export default async function SelectedWorkPage({ searchParams }) {
  const query = await searchParams;
  const requestedCase = typeof query?.case === "string" ? Number(query.case) : 0;
  const initialCase = Number.isInteger(requestedCase) && requestedCase > 0 ? requestedCase : 0;
  let selectedWork = null;

  try {
    selectedWork = await getSelectedWorkPageData();
  } catch (error) {
    console.error("Unable to load the WordPress Selected Work page:", error);
  }

  return (
    <SelectedWorkClient
      key={initialCase}
      initialCase={initialCase}
      pageTitle={selectedWork?.pageTitle || "Selected Work"}
      cases={selectedWork?.items?.length ? selectedWork.items : undefined}
    />
  );
}
