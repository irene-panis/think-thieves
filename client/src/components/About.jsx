import { Header } from "./Header";
import { Image } from "./Image";
import { Subheader } from "./Subheader";

export const About = () => {
  return (
    <div className="about-wrapper flex justify-center items-center h-screen gap-20 p-20">
      <div className="column-one w-1/2 h-full flex flex-col">
        <div className="text h-1/3 flex flex-col justify-center gap-5">
          <Header
            header="You're in thief territory now."
            divStyles="justify-end text-right"
            textStyles="w-2/3"
          />
          <Subheader
            content="The prime destination for esports and gaming content."
            styles="justify-end text-md"
          />
        </div>
        <Image
          src="/codchamps.jpeg"
          styles="w-full h-2/3 overflow-hidden"
        />
      </div>
      <div className="column-two w-1/2 h-full">
        <Image
          src="/co-owners.jpeg"
          styles="h-full w-full"
        />
      </div>
    </div>
  )
}