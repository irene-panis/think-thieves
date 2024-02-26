/* eslint-disable react/jsx-key */
import { Header } from "./Header";
import { Image } from "./Image";
import { Subheader } from "./Subheader";

export const Pillars = () => {
  return (
    <div className="pillars-wrapper flex flex-col items-center h-screen px-20 gap-10">
      <div className="text-section flex justify-end gap-20">
        <Subheader
          content="What sets 100 Thieves apart from its competition is our dedication to excelling in our mainstay pillars: esports, content, and apparel. We're built by gamers, for gamers."
          divStyles="w-1/2 justify-center items-center text-center"
          spanStyles="w-2/3"
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