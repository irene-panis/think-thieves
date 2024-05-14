import { MerchCarousel } from "../components/merch/MerchCarousel"
import { useState, useRef } from "react";
import { ApparelContainer } from "../components/merch/ApparelContainer";

export const Apparel = () => {
  const apparelContainerRef = useRef(null);
  const carouselImgs = [
    {
      img: '/apparel/foundations-merch.jpeg',
      img_lg: '/apparel/foundations2.jpeg',
      text: `FOUNDATIONS SS'24`
    },
    {
      img: '/apparel/vct-merch.jpeg',
      img_lg: '/apparel/jersey/one.jpeg',
      text: `2024 PRIMARY JERSEY`
    },
    {
      img: '/apparel/pokemon-merch.jpeg',
      img_lg: '/apparel/pokemon2.jpeg',
      text: `100T x POKEMON`
    },
    {
      img: '/apparel/lat-merch.jpg',
      img_lg: '/apparel/lat2.jpg',
      text: `LA THIEVES`
    },
  ];

  const [apparel, setApparel] = useState(`FOUNDATIONS SS'24`);

  const handleApparelChange = (newApparel) => {
    setApparel(newApparel);
    apparelContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="apparel-wrapper w-full">
      <MerchCarousel images={carouselImgs} onApparelChange={handleApparelChange}/>
      <div id="apparel-carousel" ref={apparelContainerRef}>
        <ApparelContainer apparel={apparel}/>
      </div>
    </div>
  )
}