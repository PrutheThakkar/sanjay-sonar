import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Surgical Publications",
  description:
    "Explore Dr. Sanjay Sonar's contributions to surgical education through publications, clinical papers, presentations, and teaching material.",
  path: "/publications",
});

export default function PublicationsLayout({ children }) {
  return children;
}
