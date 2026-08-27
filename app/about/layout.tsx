import SeoSchema from "../../components/SeoSchema";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <><SeoSchema path="/about" />{children}</>;
}
