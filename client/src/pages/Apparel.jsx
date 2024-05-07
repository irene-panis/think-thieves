import { MerchCarousel } from "../components/merch/MerchCarousel"

export const Apparel = () => {
  const carouselImgs = [
    '/apparel/foundations-merch.jpeg',
    '/apparel/vct-merch.jpeg',
    '/apparel/pokemon-merch.jpeg',
    '/apparel/lat-merch.jpg'
  ];
  const containerHeight = `calc(100vh - 4rem)`;
  return (
    <div className="apparel-wrapper w-full" style={{ height: containerHeight }}>
      <MerchCarousel images={carouselImgs}/>
    </div>
  )
}