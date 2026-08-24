import GalleryClient from "../../components/GalleryClient";
import { getGalleryPageData } from "../../lib/wordpress";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Gallery",
  description:
    "View photographs from Dr. Sanjay Sonar's surgical practice, teaching, conferences, workshops, and professional journey.",
  path: "/gallery",
});

export default async function GalleryPage() {
  let gallery = null;

  try {
    gallery = await getGalleryPageData();
  } catch (error) {
    console.error("Unable to load the WordPress Gallery page:", error);
  }

  return (
    <GalleryClient
      pageTitle={gallery?.pageTitle || "Gallery"}
      galleryCategories={gallery?.categories || []}
    />
  );
}
