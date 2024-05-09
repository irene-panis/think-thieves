/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef } from "react";
import { register } from 'swiper/element/bundle';

register();

export const Foundations = () => {
  const swiperElRef = useRef(null);
  const images = [
    '/apparel/lat/one.jpeg',
    '/apparel/lat/two.jpeg',
    '/apparel/lat/three.jpeg',
  ];

  return (
    <>
      <div className="line-carousel h-screen relative flex flex-col justify-center align-center font-oswald">
        <swiper-container
          ref={swiperElRef}
          slides-per-view="1"
          navigation="true"
          loop="true"
          effect="slide"
        >
          <swiper-slide>
            <div className="font-oswald font-bold text-[#131200] uppercase text-4xl tracking-[0.5em] mr-[-0.5em] translate-y-3">Everyday</div>
            <img className="object-cover h-1/2 w-2/3" src={images[0]} />
            <div className="font-oswald text-[#131200] uppercase text-4xl tracking-[0.5em] mr-[-0.5em] font-bold">Styles</div>
          </swiper-slide>
          <swiper-slide>
            <div className="text-center w-[80%] -translate-y-3">Drawing inspiration from classic athleticwear and utilitarian tech wear.</div>
            <img className="object-cover h-1/2 w-2/3" src={images[1]} />
          </swiper-slide>
          <swiper-slide>
            <div className="lowercase">Accessible products //</div>
            <img className="object-cover h-1/2 w-2/3" src={images[2]} />
            <div className="lowercase">// True to heritage</div>
          </swiper-slide>
        </swiper-container>
      </div>
    </>
  );
}