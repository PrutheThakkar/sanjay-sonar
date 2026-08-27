import StructuredData from "./StructuredData";
import { pageStructuredData } from "../lib/seo";
import { getSeoPage } from "../lib/seo-pages";

export default function SeoSchema({ path }) {
  const seo = getSeoPage(path);
  if (!seo) return null;

  return pageStructuredData(seo).map((data) => (
    <StructuredData key={data["@id"]} data={data} />
  ));
}
