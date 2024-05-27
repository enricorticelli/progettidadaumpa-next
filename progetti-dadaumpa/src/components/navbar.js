import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full py-4 fixed top-0 left-0 z-10 transition-all duration-400 ${
        scrolled ? "bg-gray-100 shadow" : "bg-transparent text-gray-100"
      }`}>
      <div className="block sm:hidden">
        <MobileMenu scrolled={scrolled} />
      </div>
      <div className="hidden sm:flex w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
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
    </nav>
  );
};

const MobileMenu = ({ scrolled }) => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        className={`text-base font-bold uppercase flex justify-center items-center ${
          scrolled ? "text-black" : "text-white"
        }`}
        onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} className="ml-4" />
      </button>

      <div
        className={`fixed top-0 left-0 h-screen bg-gray-100 transition-transform duration-300 ${
          open ? "transform translate-x-0" : "transform -translate-x-full"
        } w-3/4`}>
        <button
          className="absolute top-4 right-4 text-black text-base font-bold"
          onClick={handleMenuClick}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="container mx-auto flex flex-col items-center text-sm font-bold uppercase mt-4 px-6 py-2">
          <a
            href="/"
            className="text-black hover:bg-telemagenta rounded py-2 px-4 my-2 transition-all duration-300">
            Home
          </a>
          <a
            href="#"
            className="text-black hover:bg-telemagenta rounded py-2 px-4 my-2 transition-all duration-300">
            Spettacoli
          </a>
          <a
            href="#"
            className="text-black hover:bg-telemagenta rounded py-2 px-4 my-2 transition-all duration-300">
            Artisti
          </a>
          <a
            href="#"
            className="text-black hover:bg-telemagenta rounded py-2 px-4 my-2 transition-all duration-300">
            Chi Siamo
          </a>
          <a
            href="#"
            className="text-black hover:bg-telemagenta rounded py-2 px-4 my-2 transition-all duration-300">
            Contatti
          </a>
          <a
            href="/articles"
            className="text-black hover:bg-telemagenta rounded py-2 px-4 my-2 transition-all duration-300">
            Blog
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
