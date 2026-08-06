import SelectedWorkClient from "../../components/SelectedWorkClient";
import { getSelectedWorkPageData } from "../../lib/wordpress";

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
      cases={selectedWork?.items || []}
    />
  );
}
