/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef } from "react";
import { register } from 'swiper/element/bundle';
import { FeaturedProducts } from "./FeaturedProducts";

register();

export const Jersey = () => {
  const swiperElRef = useRef(null);
  const images = [
    '/apparel/jersey/one.jpeg',
    '/apparel/jersey/two.jpeg',
    '/apparel/jersey/three.jpeg',
  ];

  const featured = [
    {
      path: '/apparel/jersey/featured1.jpeg',
      hover: `/apparel/jersey/featured1b.jpeg`,
      name: `ADIDAS ORIGINALS X 100 THIEVES 2024 PRIMARY JERSEY`
    }
  ]

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
            <div className="font-oswald font-bold text-[#131200] uppercase text-4xl tracking-[0.5em] mr-[-0.5em]">Game Day</div>
            <img className="object-cover h-1/2 w-2/3" src={images[0]} />
            <div className="font-oswald text-[#131200] uppercase text-4xl tracking-[0.5em] mr-[-0.5em] font-bold">Ready</div>
          </swiper-slide>
          <swiper-slide>
            <div className="text-center w-[80%] -translate-y-3">Official team issued jerseys, from 100T and adidas.</div>
            <img className="object-cover object-[65%] h-1/2 lg:h-3/4 w-2/3" src={images[1]} />
            <div className="text-center w-[80%] translate-y-3">Boxy fit, ribbed collars, embroidered logos, iconic adidas stripes.</div>
          </swiper-slide>
          <swiper-slide>
            <div className="lowercase">Maximum comfort //</div>
            <img className="object-cover object-[90%] h-1/2 lg:h-2/3 w-2/3" src={images[2]} />
            <div className="lowercase">// Meets aesthetic</div>
          </swiper-slide>
        </swiper-container>
      </div>
      <FeaturedProducts productsArray={featured}/>
    </>
  );
}