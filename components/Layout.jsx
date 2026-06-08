import Header from "./Header";
import Footer from "./Footer";
import "../css/common.css";
import "../css/home.css";
import "../css/about.css";
import "../css/expertise.css";
import "../css/consultation.css";
import "../css/publication.css";
import "../css/selected-work.css";
import "../css/teaching.css";

export default function Layout({ children }) {
  return (
    <div className="page">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
