"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

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
              className="hover:scale-110 transition-all duration-500 p-16 md:p-0"
            />
          </a>
        </div>
        <button className="absolute hidden sm:block left-1/2 transform -translate-x-1/2 bottom-[50px] w-auto px-24 shadow flex flex-col items-center justify-center my-4 p-6 rounded transition-all duration-500 bg-gradient-to-t to-telemagenta from-polynesian-blue bg-size-200 bg-pos-0 hover:bg-pos-100 relative group hover:scale-110">
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

      {/* Topic Nav */}
      <nav
        className={`w-full py-4 fixed top-0 left-0 z-10 transition-all duration-400 ${
          scrolled ? "bg-gray-100" : "bg-transparent text-gray-100"
        }`}>
        <div className="block sm:hidden">
          <a
            href="#"
            className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
            onClick={handleMenuClick}>
            Menu{" "}
            <FontAwesomeIcon
              icon={open ? faChevronDown : faChevronUp}
              className="ml-2"
            />
          </a>
        </div>
        <div
          className={`${
            open ? "block" : "hidden"
          } w-full flex-grow sm:flex sm:items-center sm:w-auto`}>
          <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
            <a
              className={`font-bold text-gray-800 hover:text-gray-700 ${
                scrolled ? "logo-scrolled" : ""
              }`}
              href="/">
              {scrolled && (
                <Image
                  src="/images/logoquadrato.png"
                  width={30}
                  height={30}
                  className="hover:scale-110 transition-all duration-400 mx-4 hidden sm:block"
                />
              )}
            </a>
            <a
              href="/"
              className="hover:text-white hover:bg-telemagenta rounded py-2 px-4 mx-2 transition-all duration-300">
              Home
            </a>
            <a
              href="#"
              className="hover:text-white hover:bg-telemagenta rounded py-2 px-4 mx-2 transition-all duration-300">
              Spettacoli
            </a>
            <a
              href="#"
              className="hover:text-white hover:bg-telemagenta rounded py-2 px-4 mx-2 transition-all duration-300">
              Artisti
            </a>
            <a
              href="#"
              className="hover:text-white hover:bg-telemagenta rounded py-2 px-4 mx-2 transition-all duration-300">
              Chi Siamo
            </a>
            <a
              href="#"
              className="hover:text-white hover:bg-telemagenta rounded py-2 px-4 mx-2 transition-all duration-300">
              Contatti
            </a>
            <a
              href="/articles"
              className="hover:text-white hover:bg-telemagenta rounded py-2 px-4 mx-2 transition-all duration-300">
              Blog
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
