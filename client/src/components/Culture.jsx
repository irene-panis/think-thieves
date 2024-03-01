import { Header } from "./Header"
import { Image } from "./Image"
import { Subheader } from "./Subheader"

export const Culture = ( ) => {
  return (
    <div className="culture-wrapper flex flex-col gap-10 px-20">
      <Header
        header="Our Culture"
      />
      <div className="culture-imgs h-screen grid grid-cols-4 grid-rows-3 gap-5">
        <Image
          src="/gucci.jpeg"
          styles="col-start-1 col-span-2 row-span-2"
        />
        <Image
          src="/trophy.jpeg"
          styles="col-start-3 col-span-1 row-start-1 row-span-1"
        />
        <Image
          src="/jjk.jpeg"
          styles="col-start-4 col-span-1 row-start-3 row-span-1"
        />
        <Subheader
          content="Our mission is to give every gamer something to be proud of."
          divStyles="col-start-4 row-start-2 items-end uppercase"
          spanStyles="culture-head"
        />
        <Subheader
          content="We believe in the power of community and the thrill of competition. With a relentless commitment to winning and a dedication to producing top-tier content, we're making a name for ourselves as leaders in the gaming industry, and we're not stopping now."
          divStyles="col-start-2 col-span-1 row-start-3 uppercase"
        />
      </div>
    </div>
  )
}