import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 5000); // Cambia immagine ogni 5 secondi

      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <AnimatePresence>
        {images.length > 0 && (
          <motion.div
            key={images[currentImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
