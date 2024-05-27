"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./navbar";

const Header = () => {
  return (
    <>
      <header
        className="relative w-full 2xl:h-[700px] xl:h-[500px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/images/banner.gif")',
        }}>
        <div className="flex flex-col items-center justify-center h-full">
          <a className="font-bold text-gray-800 hover:text-gray-700" href="/">
            <Image
              src="/images/logo.png"
              width={300}
              height={300}
              className="hover:scale-110 transition-all duration-500 p-16 md:pt-32 xl:p-0"
            />
          </a>
        </div>
        <button className="absolute hidden md:block left-1/2 transform -translate-x-1/2 xl:bottom-[55px] md:bottom-[-35px] w-auto px-24 shadow flex flex-col items-center justify-center my-4 p-6 rounded transition-all duration-500 bg-gradient-to-t to-telemagenta from-polynesian-blue bg-size-200 bg-pos-0 hover:bg-pos-100 relative group hover:scale-110">
          <div className="flex items-center justify-center transition-transform duration-500">
            <a
              href="https://progettidadaumpa.us4.list-manage.com/subscribe?u=f1f70e82d8b5112a2025a24e4&id=5c31ce5444"
              target="_blank"
              className="text-lg text-white font-semibold text-center transition-transform duration-500 group-hover:translate-x-4 group-hover:scale-110">
              Iscriviti alla Newsletter!
            </a>
            <svg
              className="w-0 text-white opacity-0 transition-all duration-500 delay-200 group-hover:w-6 group-hover:opacity-100 group-hover:ml-12 group-hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
        </button>
      </header>

      <Navbar />
    </>
  );
};

export default Header;
