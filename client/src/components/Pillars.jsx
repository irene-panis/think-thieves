/* eslint-disable react/jsx-key */
import { Header } from "./Header";
import { Image } from "./Image";
import { Subheader } from "./Subheader";

export const Pillars = () => {
  return (
    <div className="pillars-wrapper flex flex-col items-center h-screen px-20 gap-10">
      <div className="text-section flex justify-end gap-20 border border-black">
        <Subheader
          content="We're dedicated to excelling in esports, gaming, and content creation-- 100 Thieves' foundational pillars."
          divStyles="w-1/2 justify-end items-end"
          spanStyles="w-1/3"
        />
        <Header
          header="Bridging the gap between fashion and gaming."
          divStyles="w-1/2"
        />
      </div>
      <div className="img-section flex gap-10 border border-black">
        <Image
          src="/lcs.jpeg"
        />
        <Image
          src="/content.jpeg"
        />
        <Image
          src="/apparel.jpeg"
        />
      </div>
    </div>
  )
}