import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>{title}</Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <Header />

      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, jd, edm, events",
};
