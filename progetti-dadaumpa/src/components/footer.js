import React, { useState, useEffect } from "react";
import FooterSkeleton from "@/components/skeletons/footer-skeleton";

const Footer = ({ artists }) => {
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
    return <FooterSkeleton />;
  }

  return (
    <footer className="w-full border-t bg-white">
      <div className="relative w-full flex items-center md:pb-12 overflow-hidden hidden md:flex">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / 6)}%)`, // Utilizziamo 3 in base al numero di immagini visibili
          }}>
          {artistImages.map((artist, index) => (
            <div key={index} className="w-80 h-80 relative">
              <img
                className="w-80 h-80 object-cover"
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
          className="absolute bg-polynesian-blue hover:bg-telemagenta text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 ml-12 transition-all duration-200"
          onClick={decrement}
          disabled={currentIndex === 0}>
          &#8592;
        </button>
        <button
          className="absolute right-0 bg-polynesian-blue hover:bg-telemagenta text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 mr-12 transition-all duration-200"
          onClick={increment}
          disabled={currentIndex >= 3}>
          &#8594;
        </button>
      </div>
      <div className="w-full container mx-auto flex flex-col items-center pt-8 md:pt-0">
        <div className="flex flex-row text-center py-2 space-y-0 space-x-4">
          <a
            href="#!"
            role="button"
            className="hover:scale-125 transition-all duration-200">
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2] ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
          </a>

          <a
            href="#!"
            role="button"
            className="hover:scale-125 transition-all duration-200">
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </a>

          <a
            href="#!"
            role="button"
            className="hover:scale-125 transition-all duration-200">
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ea4335]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </span>
          </a>

          <a
            href="#!"
            role="button"
            className="hover:scale-125 transition-all duration-200">
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </span>
          </a>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
          <a
            href="#"
            className="px-3 hover:text-telemagenta hover:underline underline-offset-4 hover:scale-110 transition-all duration-200">
            Chi siamo
          </a>
          <a
            href="#"
            className="px-3 hover:text-telemagenta hover:underline underline-offset-4 hover:scale-110 transition-all duration-200">
            Privacy Policy
          </a>
          <a
            href="#"
            className="px-3 hover:text-telemagenta hover:underline underline-offset-4 hover:scale-110 transition-all duration-200">
            Termini & Condizioni
          </a>
          <a
            href="#"
            className="px-3 hover:text-telemagenta hover:underline underline-offset-4 hover:scale-110 transition-all duration-200">
            Contattaci
          </a>
        </div>
        <div className="pb-12 text-xs">
          Sito realizzato da Enrico Corticelli
        </div>
      </div>
    </footer>
  );
};

export default Footer;
