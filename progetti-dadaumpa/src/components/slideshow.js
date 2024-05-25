import React, { useState, useEffect } from "react";
import SlidershowSkeleton from "@/components/skeletons/slideshow-skeleton";

const Slideshow = ({ artists }) => {
  const [artistImages, setArtistImages] = useState([]);

  useEffect(() => {
    // Genera le immagini casuali una volta sola
    const images = artists.map((artist) => {
      const randomIndex = Math.floor(Math.random() * 4); // Genera un numero casuale tra 0 e 3
      const image = (() => {
        switch (randomIndex) {
          case 0:
            return artist.img1;
          case 1:
            return artist.img2;
          case 2:
            return artist.img3;
          case 3:
            return artist.img4;
          default:
            return artist.img1; // Ritorna img1 come fallback
        }
      })();
      return { image, nome: artist.nome }; // Ritorna un oggetto con immagine e nome
    });

    setArtistImages(images);
  }, [artists]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const increment = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= 3 ? prevIndex : prevIndex + 1
    );
  };

  const decrement = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  if (!artists.length) {
    return <SlidershowSkeleton />;
  }

  return (
    <div className="relative w-full flex items-center md:pb-12 overflow-hidden hidden md:flex">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * (100 / 6)}%)`, // Utilizziamo 3 in base al numero di immagini visibili
        }}>
        {artistImages.map((artist, index) => (
          <div key={index} className="w-80 h-80 relative">
            <img
              className="w-80 h-80 object-cover opacity-90"
              src={artist.image}
              alt={artist.nome}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-90 bg-black bg-opacity-50 text-white text-md font-bold transition-all duration-200 cursor-pointer">
              {artist.nome}
            </div>
          </div>
        ))}
      </div>
      <button
        className={`absolute bg-polynesian-blue hover:bg-telemagenta text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 ml-12 transition-all duration-200 ${
          currentIndex === 0 ? "invisible" : ""
        }`}
        onClick={decrement}
        disabled={currentIndex === 0}>
        &#8592;
      </button>
      <button
        className={`absolute right-0 bg-polynesian-blue hover:bg-telemagenta text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 mr-12 transition-all duration-200 ${
          currentIndex >= 3 ? "invisible" : ""
        }`}
        onClick={increment}
        disabled={currentIndex >= 3}>
        &#8594;
      </button>
    </div>
  );
};

export default Slideshow;
