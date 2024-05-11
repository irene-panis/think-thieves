import { Header } from "../Header"
import { Image } from "../Image"
import { Subheader } from "../Subheader"

export const Culture = ( ) => {
  return (
    <div className="culture-wrapper flex flex-col">
      <Header
        header="Our Culture"
        divStyles="py-10"
      />
      <Subheader
        content="Our mission is to give every gamer something to be proud of."
        divStyles="items-center uppercase"
        spanStyles="culture-head"
      />
      <img src="/home/gucci.jpeg" className="object-cover"/>
      <div className="culture-text flex flex-col gap-6 max-w-[1000px] pt-10">
        <Subheader
          content="We believe in the power of community and the thrill of competition."
          divStyles="uppercase items-center"
        />
        <Subheader
          content="With a relentless commitment to winning and a dedication to producing top-tier content, we're making a name for ourselves as leaders in the gaming industry, and we're not stopping now."
          divStyles="uppercase items-center"
        />
      </div>
    </div>
  )
}