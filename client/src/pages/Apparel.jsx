import { MerchCarousel } from "../components/merch/MerchCarousel"
import { useState } from "react";
import { Foundations } from "../components/merch/Foundations";

export const Apparel = () => {
  const carouselImgs = [
    {
      img: '/apparel/foundations-merch.jpeg',
      text: `FOUNDATIONS SS'24`
    },
    {
      img: '/apparel/vct-merch.jpeg',
      text: `2024 PRIMARY JERSEY`
    },
    {
      img: '/apparel/pokemon-merch.jpeg',
      text: `100T x POKEMON`
    },
    {
      img: '/apparel/lat-merch.jpg',
      text: `LA THIEVES`
    },
  ];

  const [apparel, setApparel] = useState(`FOUNDATIONS SS'24`);

  const handleApparelChange = (newApparel) => {
    setApparel(newApparel);
  }

  return (
    <div className="apparel-wrapper w-full">
      <MerchCarousel images={carouselImgs} onApparelChange={handleApparelChange}/>
      <Foundations apparel={apparel}/>
    </div>
  )
}