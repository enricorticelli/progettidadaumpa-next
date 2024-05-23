"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Header = ({ isHome }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isHome) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true);
    }
  }, []);

  const handleMenuClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      {/* Text Header */}
      {isHome && (
        <header
          className="w-full h-screen bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/images/banner.gif")',
          }}>
          <div className="flex flex-col items-center justify-center h-full">
            <a className="font-bold text-gray-800 hover:text-gray-700" href="/">
              <Image
                src="/images/logo.png"
                width={300}
                height={300}
                className="hover:scale-110 transition-all duration-500"
              />
            </a>
          </div>
        </header>
      )}

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
                  className="hover:scale-110 transition-all duration-400 mx-4"
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
