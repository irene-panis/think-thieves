import { useEffect, useState } from "react";
import { register } from 'swiper/element/bundle';

register();

export const MerchCarousel = ({ images, onApparelChange }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const src = windowWidth < 640 ? 'img' : 'img_lg';

  return (
    <div className="merch-carousel">
      <swiper-container
        slides-per-view="1"
        navigation="true"
        pagination="true"
        loop="true"
        autoplay-delay="5000"
        speed="500"
      >
        {images.map((img, index) => (
          <swiper-slide key={index}>
            <div className="slide-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center drop-shadow-md text-white">
              <h2 className="font-bold font-dmmono text-3xl">{img.text}</h2>
              <span
                className="underline hover:bg-black hover:text-white duration-200 ease-in-out clickable"
                onClick={() => onApparelChange(img.text)}
              >
                LEARN MORE
              </span>
            </div>
            <img className={`w-full h-full object-cover ${img.text === '100T x POKEMON' ? 'object-top' : ''}`} src={img[src]} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};
