"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Text Header */}
      <header
        className="w-full container mx-auto bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/banner.gif")',
        }}>
        <div className="flex flex-col items-center py-28">
          <a className="font-bold text-gray-800 hover:text-gray-700" href="/">
            <Image
              src="/images/logo.png"
              width={300}
              height={300}
              className="hover:opacity-75"
            />
          </a>
        </div>
      </header>

      {/* Topic Nav */}
      <nav className="w-full py-4 border-t border-b bg-gray-100">
        <div className="block sm:hidden">
          <a
            href="#"
            className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
            onClick={() => setOpen(!open)}>
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
              href="/"
              className="hover:text-white hover:bg-telemagenta rounded py-2 px-4 mx-2">
              Home
            </a>
            <a
              href="#"
              className="hover:text-white hover:bg-telemagenta rounded py-2 px-4 mx-2">
              Spettacoli
            </a>
            <a
              href="#"
              className="hover:text-white hover:bg-telemagenta rounded py-2 px-4 mx-2">
              Artisti
            </a>
            <a
              href="#"
              className="hover:text-white hover:bg-telemagenta rounded py-2 px-4 mx-2">
              Chi Siamo
            </a>
            <a
              href="#"
              className="hover:text-white hover:bg-telemagenta rounded py-2 px-4 mx-2">
              Contatti
            </a>
            <a
              href="#"
              className="hover:text-white hover:bg-telemagenta rounded py-2 px-4 mx-2">
              News
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
