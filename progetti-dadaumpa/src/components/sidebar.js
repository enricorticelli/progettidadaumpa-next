import React from "react";
import Image from "next/image";

const Sidebar = ({ artists }) => {
  const artistImages = artists.slice(0, 3).map((artist) => artist.img1);

  return (
    <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5">Iscriviti alla Newsletter!</p>
        <p className="pb-2">
          Iscriviti alla nostra newsletter per essere sempre aggiornato sugli
          spettacoli teatrali più imperdibili della stagione. Unisciti a noi per
          vivere l'arte e la magia del teatro in ogni momento!
        </p>
        <a
          href="#"
          className="w-full bg-gradient-to-r from-polynesian-blue to-telemagenta text-white font-bold text-sm uppercase rounded transition duration-300 ease-in-out hover:bg-gradient-to-br hover:shadow-md flex items-center justify-center px-2 py-3 mt-4">
          Clicca qui
        </a>
      </div>

      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5">Artisti</p>
        <div className="grid grid-cols-1 gap-3">
          {artistImages.map((image, index) => (
            <div key={index} className="w-full h-80 hover:opacity-75">
              <img
                className="w-full h-80 object-cover"
                src={image}
                alt="Artist image"
              />
            </div>
          ))}
        </div>
        <a
          href="#"
          className="w-full bg-gradient-to-r from-polynesian-blue to-telemagenta text-white font-bold text-sm uppercase rounded hover:bg-gradient-to-br flex items-center justify-center px-2 py-3 mt-6">
          Vedi tutti
        </a>
      </div>

      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5">Chi siamo</p>
        <p className="pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In
          hac habitasse platea dictumst.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
