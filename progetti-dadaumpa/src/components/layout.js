import React from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function Layout({ children, artists, isHome }) {
  return (
    <>
      <Head>
        <title>Progetti Dadaumpa</title>
        <meta name="description" content="Compagnia teatrale a Bologna" />
        {/* Add meta tags */}
        {/* Add any other meta tags or link tags as needed */}
      </Head>
      <main className={`container mx-auto flex flex-wrap ${mont.className}`}>
        <Header isHome={isHome} />
        {/* Spacer for non-home pages */}
        {!isHome && (
          <div className="container mx-auto flex flex-wrap h-20"></div>
        )}
        {children}
        <Footer artists={artists} />
      </main>
    </>
  );
}
