import { useRef, useEffect } from "react";
import { register } from 'swiper/element/bundle';

register();

export const MerchCarousel = ({ images, onApparelChange }) => {
  const swiperElRef = useRef(null);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
      loop="true"
      autoplay-delay="5000"
      speed="500"
    >
      {
        images.map((img, index) => (
          <swiper-slide key={index}>
            <div className="slide-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center drop-shadow-md text-white">
              <h2 className="font-bold font-dmmono text-3xl">{img.text}</h2>
              <span className="underline hover:bg-black hover:text-white duration-200 ease-in-out" onClick={() => onApparelChange(img.text)}>LEARN MORE</span>
            </div>
            <img className="w-full h-full object-cover" src={img.img}/>
          </swiper-slide>
        ))
      }
    </swiper-container>
  );
};
