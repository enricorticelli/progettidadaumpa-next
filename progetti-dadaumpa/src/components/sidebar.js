import React, { useState, useEffect } from "react";

const Sidebar = ({ artists }) => {
  const [artistImages, setArtistImages] = useState([]);

  useEffect(() => {
    const images = artists.slice(0, 3).map((artist) => {
      return { image: artist.img1, nome: artist.nome };
    });

    setArtistImages(images);
  }, [artists]);

  return (
    <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
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
        <p className="text-xl font-semibold pb-5">
          Spettacoli in programmazione
        </p>
        <div className="grid grid-cols-1 gap-3">
          {artistImages.map((artist, index) => (
            <div key={index} className="w-full h-80 relative">
              <img
                className="w-full h-80 object-cover"
                src={artist.image}
                alt={artist.nome}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-75 bg-black bg-opacity-50 text-white text-md font-bold transition-all duration-200 cursor-pointer">
                <p className="hover:scale-110">{artist.nome}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full shadow flex flex-col items-center justify-center my-4 p-4 rounded transition-all duration-500 bg-gradient-to-t to-telemagenta from-polynesian-blue bg-size-200 bg-pos-0 hover:bg-pos-100 relative group">
          <p className="w-full text-white font-bold text-sm uppercase transition-all duration-500 hover:scale-110">
            Vedi tutti
          </p>
        </button>
      </div>

      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5">Chi siamo</p>
        <p className="pb-2">
          <p>
            Siamo la <span className="text-dec-2">Progetti DADAUMPA Srl</span>,
            un'impresa teatrale che dal 1984 anima la scena del teatro italiano
            e internazionale.
          </p>
          <p>
            Con una ricca storia di produzione e{" "}
            <span className="text-dec-1">
              distribuzione di spettacoli comici e comico-musicali
            </span>
            , ci dedichiamo con passione e competenza a farvi sorridere e
            riflettere. Fin dai nostri esordi, abbiamo scelto di esplorare la
            comicità in tutte le sue forme e sfumature, crescendo e maturando
            nel tempo.
          </p>
          <p>
            Questo ci ha permesso di ampliare la nostra offerta artistica e di
            avventurarci in nuovi territori dello{" "}
            <span className="text-dec-2">spettacolo d'arte</span>, con la{" "}
            <span className="text-dec-2">danza</span> come ultima aggiunta al
            nostro repertorio.
          </p>
          <p>
            Negli anni, abbiamo collaborato con artisti e compagnie di grande
            rilievo e oggi continuiamo a sviluppare il nostro lavoro con la
            stessa attenzione alla qualità che ci contraddistingue. Siamo pronti
            a offrirvi sempre{" "}
            <span className="text-dec-3">il meglio del teatro</span>, con lo
            stesso entusiasmo di sempre.
          </p>
        </p>
        <button className="w-full shadow flex flex-col items-center justify-center my-4 p-4 rounded transition-all duration-500 bg-gradient-to-t to-telemagenta from-polynesian-blue bg-size-200 bg-pos-0 hover:bg-pos-100 relative group">
          <p className="w-full text-white font-bold text-sm uppercase transition-all duration-500 hover:scale-110">
            Continua a leggere
          </p>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
