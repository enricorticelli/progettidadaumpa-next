import React from "react";
import Image from "next/image";

const Sidebar = () => {
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
          {/* Aggiungi altre immagini di Instagram qui */}
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
          className="w-full bg-gradient-to-r from-polynesian-blue to-telemagenta text-white font-bold text-sm uppercase rounded hover:bg-gradient-to-br flex items-center justify-center px-2 py-3 mt-6">
          <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
