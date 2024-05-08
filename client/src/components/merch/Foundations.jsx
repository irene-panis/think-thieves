import { useRef } from "react";
import { register } from 'swiper/element/bundle';

register();

export const Foundations = () => {
  const swiperElRef = useRef(null);
  const images = [
    '/apparel/foundations/one.jpeg',
    '/apparel/foundations/two.jpeg',
    '/apparel/foundations/three.jpeg',
  ];

  return (
    <>
      <div className="line-carousel h-screen relative flex flex-col justify-center align-center font-oswald font-bold">
        <swiper-container
          ref={swiperElRef}
          slides-per-view="1"
          navigation="true"
          loop="true"
        >
          <swiper-slide>
            <div className="font-oswald text-[#131200] uppercase text-4xl tracking-[0.5em] mr-[-0.5em] translate-y-3">Everyday</div>
            <img className="object-cover h-1/2 w-2/3" src={images[0]} />
            <div className="font-oswald text-[#131200] uppercase text-4xl tracking-[0.5em] mr-[-0.5em]">Styles</div>
          </swiper-slide>
          <swiper-slide>
            <img className="object-cover h-1/2 w-2/3" src={images[1]} />
          </swiper-slide>
          <swiper-slide>
            <img className="object-cover h-1/2 w-2/3" src={images[2]} />
          </swiper-slide>
        </swiper-container>
      </div>
    </>
  );
}