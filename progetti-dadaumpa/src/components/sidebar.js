import React, { useState, useEffect } from "react";
import About from "@/components/about";
import Link from "next/link";

const Sidebar = ({ artists }) => {
  const [artistImages, setArtistImages] = useState([]);

  useEffect(() => {
    const images = artists.slice(0, 5).map((artist) => {
      return { image: artist.img1, nome: artist.nome };
    });

    setArtistImages(images);
  }, [artists]);

  return (
    <aside className="w-full md:w-1/3 flex flex-col items-center pl-3 py-6 pr-6">
      <button className="w-full shadow flex flex-col items-center justify-center my-4 p-6 rounded transition-all duration-500 bg-gradient-to-t to-telemagenta from-polynesian-blue bg-size-200 bg-pos-0 hover:bg-pos-100 relative group">
        <div className="flex items-center justify-center transition-transform duration-500">
          <a
            href="https://progettidadaumpa.us4.list-manage.com/subscribe?u=f1f70e82d8b5112a2025a24e4&id=5c31ce5444"
            target="_blank"
            className="text-xl text-white font-semibold text-center transition-transform duration-500 group-hover:translate-x-4 group-hover:scale-110">
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

      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-8">
          Spettacoli in programmazione
        </p>
        <div className="flex flex-col gap-6">
          {artistImages.map((artist, index) => (
            <div
              key={index}
              className="flex flex-row w-full relative opacity-80 hover:opacity-95 cursor-pointer hover:bg-gray-600 hover:bg-opacity-10 p-2">
              <div className="w-1/5 h-auto relative mb-4 md:mb-0">
                <img
                  className="w-full h-full object-cover"
                  src={artist.image}
                  alt={artist.nome}
                />
              </div>
              <div className="w-4/5 flex flex-col justify-center pl-4">
                <p className="text-lg font-semibold">{artist.nome}</p>
                <p className="text-sm text-gray-500">Data: 24 Maggio 2024</p>
                <p className="text-sm text-gray-500">Luogo: Teatro XYZ</p>
                {/* Aggiungi qui altri dettagli dello spettacolo */}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full mt-4">
          <Link href="/articles" legacyBehavior>
            <a className="w-full flex items-center justify-center p-4 rounded transition-all duration-500 relative group">
              <p className="text-telemagenta font-bold text-sm uppercase transition-all duration-500 hover:scale-110 hover:underline hover:text-polynesian-blue">
                Altri spettacoli{" "}
              </p>
            </a>
          </Link>
        </div>
      </div>

      <About />
    </aside>
  );
};

export default Sidebar;
