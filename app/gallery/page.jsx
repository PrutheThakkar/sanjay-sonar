import GalleryClient from "../../components/GalleryClient";
import { getGalleryPageData } from "../../lib/wordpress";

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
