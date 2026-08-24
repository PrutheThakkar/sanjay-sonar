import GoogleAnalytics from "../components/GoogleAnalytics";
import StructuredData from "../components/StructuredData";
import { physicianStructuredData } from "../lib/seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StructuredData data={physicianStructuredData} />
      <Component {...pageProps} />
      <GoogleAnalytics />
    </>
  );
}
