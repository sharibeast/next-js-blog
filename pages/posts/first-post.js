import React from "react";
import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <Layout>
      <div>
        <Head>
          <title>First post</title>
        </Head>
        <h1>this is first post</h1>
        <Link href="/">
          <a>back home</a>
        </Link>
      </div>
    </Layout>
  );
}
