import React from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const mont = Montserrat({ subsets: ["latin"] });

export default function Layout({ children, artists }) {
  return (
    <>
      <Head>
        <title>Progetti Dadaumpa</title>
        <meta name="description" content="Compagnia teatrale a Bologna" />
        {/* Add meta tags */}
        {/* Add any other meta tags or link tags as needed */}
      </Head>
      <Header />
      <main className={`container mx-auto flex flex-wrap ${mont.className}`}>
        {children}
        <Footer artists={artists} />
      </main>
      <Analytics />
    </>
  );
}
