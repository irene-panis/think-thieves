import { useRef, useEffect } from "react";
import { register } from 'swiper/element/bundle';

register();

export const MerchCarousel = ({ images }) => {
  const swiperElRef = useRef(null);

  const containerHeight = `calc(100vh - 4rem)`;

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
            <img className="w-full h-full object-cover" src={img.img}/>
          </swiper-slide>
        ))
      }
    </swiper-container>
  );
};
