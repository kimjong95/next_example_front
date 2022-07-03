import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function MyEvents() {
  const router = useRouter();

  return (
    <Layout>
      <h1>My Event</h1>
      <h3>{router.query.slug}</h3>
    </Layout>
  );
}
