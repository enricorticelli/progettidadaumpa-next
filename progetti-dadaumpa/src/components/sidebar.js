import React, { useState, useEffect } from "react";
import About from "@/components/about";
import Image from "next/image";
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
    <aside className="w-full md:w-1/3 flex flex-col items-center mt-4 pl-3 pb-3 pr-3 pt-3 xl:mt-10">
      <div className="w-full bg-white shadow flex flex-col my-4 p-4 lg:p-6">
        <p className="text-xl font-semibold pb-8 pt-2">Prossimi spettacoli</p>
        <div className="flex flex-col gap-6">
          {artistImages.map((artist, index) => (
            <div
              key={index}
              className="flex flex-col xl:flex-row w-full relative opacity-80 hover:opacity-95 cursor-pointer hover:bg-gray-600 hover:bg-opacity-10 p-0 lg:p-2">
              <div className="w-full xl:w-1/5 h-auto relative mb-4 lg:mb-0">
                <img
                  className="w-full max-h-40 xl:h-full object-cover"
                  src={artist.image}
                  alt={artist.nome}
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
              <div className="w-full xl:w-4/5 flex flex-col justify-center pl-2 lg:pl-4">
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
              <p className="text-telemagenta text-center font-bold text-xs uppercase transition-all duration-500 hover:scale-110 hover:text-polynesian-blue">
                Scopri tutti gli spettacoli
              </p>
            </a>
          </Link>
        </div>
      </div>

      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5">Instagram</p>
        <div className="grid grid-cols-3 gap-3">
          <Image
            src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
            width={150}
            height={150}
            className="hover:opacity-75"
          />
          <Image
            src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
            width={150}
            height={150}
            className="hover:opacity-75"
          />
          <Image
            src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
            width={150}
            height={150}
            className="hover:opacity-75"
          />
          <Image
            src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
            width={150}
            height={150}
            className="hover:opacity-75"
          />
          <Image
            src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
            width={150}
            height={150}
            className="hover:opacity-75"
          />
          <Image
            src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
            width={150}
            height={150}
            className="hover:opacity-75"
          />
          <Image
            src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
            width={150}
            height={150}
            className="hover:opacity-75"
          />
          <Image
            src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
            width={150}
            height={150}
            className="hover:opacity-75"
          />
          <Image
            src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
            width={150}
            height={150}
            className="hover:opacity-75"
          />
          {/* Aggiungi altre immagini di Instagram qui */}
        </div>
        <a
          href="#"
          className="w-full bg-gradient-to-r from-polynesian-blue to-telemagenta text-white font-bold text-sm rounded hover:bg-gradient-to-br flex items-center justify-center px-2 py-3 mt-6">
          <i className="fab fa-instagram mr-2"></i> Segui @progettidadaumpa
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
