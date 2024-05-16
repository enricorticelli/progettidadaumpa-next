// RootLayout.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Progetti Dadaumpa",
  description: "Compagnia teatrale a Bologna",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Utilizza i metadati qui */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
          defer></script>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
