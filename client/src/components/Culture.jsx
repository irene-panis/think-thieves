import { Header } from "./Header"
import { Image } from "./Image"
import { Subheader } from "./Subheader"

export const Culture = ( ) => {
  return (
    <div className="culture-wrapper flex flex-col gap-10">
      <Header
        header="Our Culture"
      />
      <div className="culture-imgs h-screen grid grid-cols-2 grid-rows-5 gap-5">
        <Image
          src="/gucci.jpeg"
          styles="col-start-1 col-span-2 row-span-2"
        />
        <Image
          src="/trophy.jpeg"
          styles="col-start-2 col-span-1 row-start-4 row-span-1"
        />
        <Image
          src="/jjk.jpeg"
          styles="col-start-4 col-span-1 row-start-3 row-span-1 hidden"
        />
        <Subheader
          content="Our mission is to give every gamer something to be proud of."
          divStyles="col-start-1 col-span-2 row-start-3 row-span-1 items-center uppercase"
          spanStyles="culture-head"
        />
        <Subheader
          content="We believe in the power of community and the thrill of competition."
          divStyles="col-start-1 col-span-1 row-start-4 row-span-1 uppercase items-center"
        />
        <Subheader
          content="With a relentless commitment to winning and a dedication to producing top-tier content, we're making a name for ourselves as leaders in the gaming industry, and we're not stopping now."
          divStyles="col-start-1 col-span-2 row-start-5 row-span-1 uppercase items-center"
        />
      </div>
    </div>
  )
}