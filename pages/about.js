import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

export default function about() {
  return (
    <Layout title="About DJ Events">
      <h1>About</h1>
      <p>This is an app to find the lastest DJ and other musical Events</p>
      <p>Version: 1.0.0</p>
      <Link href="/">Home Page</Link>
    </Layout>
  );
}
