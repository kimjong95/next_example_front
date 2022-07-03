import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import styles from "@/styles/404.module.css";
import Layout from "@/components/Layout";

export default function NotFountPage() {
  return (
    <Layout title="Page Not Fount">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/"> Go Back Home</Link>
      </div>
    </Layout>
  );
}
