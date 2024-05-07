import { MerchCarousel } from "../components/merch/MerchCarousel"

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
  const containerHeight = `calc(100vh - 4rem)`;
  return (
    <div className="apparel-wrapper w-full" style={{ height: containerHeight }}>
      <MerchCarousel images={carouselImgs}/>
    </div>
  )
}