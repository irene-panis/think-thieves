/* eslint-disable react/jsx-key */
import { Header } from "./Header";
import { Image } from "./Image";
import { Subheader } from "./Subheader";

export const Pillars = () => {
  return (
    <div className="pillars-wrapper flex flex-col items-center h-screen px-20 gap-10">
      <div className="text-section flex justify-end gap-20">
        <Subheader
          content="We're dedicated to excelling in esports, gaming, and content creation-- 100 Thieves' foundational pillars."
          divStyles="w-1/2 justify-end items-end text-right"
          spanStyles="w-1/3"
        />
        <Header
          header="Bridging the gap between fashion and gaming."
          divStyles="w-1/2"
        />
      </div>
      <div className="img-section w-full flex justify-evenly gap-10">
        <Image
          src="/redbull.jpeg"
          styles="w-1/3 h-3/4"
          caption="Esports"
        />
        <Image
          src="/content.jpeg"
          styles="w-1/3"
          caption="Content"
        />
        <Image
          src="/hoodie.jpeg"
          styles="w-1/3 h-2/3"
          caption="Apparel"
        />
      </div>
    </div>
  )
}