import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MerchCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment currentIndex and reset to 0 if it exceeds the maximum index
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);
  
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="carousel flex flex-col items-center h-full relative bg-zinc-900/50">
      <img className="w-full h-full object-cover" key={currentIndex} src={images[currentIndex]} />
      <div className="carousel-indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active-img" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
