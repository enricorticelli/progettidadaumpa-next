import React from "react";
import Header from "./header";
import Footer from "./footer";
import Loading from "./loading";
import Head from "next/head";
import { Suspense } from "react";

import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {" "}
        <title>Progetti Dadaumpa</title>
        <meta name="description" content="Compagnia teatrale a Bologna" />{" "}
        {/* Add meta tags */}
        {/* Add any other meta tags or link tags as needed */}
      </Head>
      <main className={`container mx-auto flex flex-wrap ${mont.className}`}>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </main>
    </>
  );
}
