/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef } from "react";
import { register } from 'swiper/element/bundle';
import { FeaturedProducts } from "./FeaturedProducts";

register();

export const LAT = () => {
  const swiperElRef = useRef(null);
  const images = [
    '/apparel/lat/one.jpeg',
    '/apparel/lat/two.jpeg',
    '/apparel/lat/three.jpeg',
  ];

  const featured = [
    {
      path: '/apparel/lat/featured1.jpeg',
      hover: '/apparel/lat/featured1b.jpeg',
      name: `OFFICIAL LA THIEVES HOME JERSEY`
    },
    {
      path: '/apparel/lat/featured2.jpeg',
      hover: '/apparel/lat/featured2b.jpeg',
      name: `WARPED HOODIE - RED`
    },
    {
      path: '/apparel/lat/featured3.jpeg',
      hover: '/apparel/lat/featured3b.jpeg',
      name: `ARCH T-SHIRT - BLACK`
    },
    {
      path: '/apparel/lat/featured4.jpeg',
      hover: '/apparel/lat/featured4b.jpeg',
      name: `LA THIEVES SIGNATURE NEW ERA 9FIFTY SNAPBACK`
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
            <div className="font-oswald font-bold text-[#131200] uppercase text-4xl tracking-[0.5em] mr-[-0.5em]">Take what's</div>
            <img className="object-cover h-1/2 lg:h-3/4 w-2/3" src={images[0]} />
            <div className="font-oswald text-[#131200] uppercase text-4xl tracking-[0.5em] mr-[-0.5em] font-bold">Not given</div>
          </swiper-slide>
          <swiper-slide>
            <div className="text-center w-[80%] -translate-y-3">Inspired by the spirit of our LA Thieves roster.</div>
            <img className="object-cover h-1/2 lg:h-3/4 w-2/3" src={images[1]} />
          </swiper-slide>
          <swiper-slide>
            <div className="lowercase">elevated styles //</div>
            <img className="object-cover h-1/2 lg:h-3/4 w-2/3" src={images[2]} />
            <div className="lowercase">// timeless pieces</div>
          </swiper-slide>
        </swiper-container>
      </div>
      <FeaturedProducts productsArray={featured}/>
    </>
  );
}