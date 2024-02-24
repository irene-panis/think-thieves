/* eslint-disable react/jsx-key */
import { Header } from "./Header";
import { Image } from "./Image";
import { Subheader } from "./Subheader";

export const About = () => {
  return (
    <div className="about-wrapper flex justify-center items-center h-screen gap-20 px-20 py-10">
      <div className="column-one w-1/2 h-full flex flex-col gap-3">
        <div className="text flex-grow flex flex-col h-2/3 justify-center gap-3">
          <Header
            header={["You're in ", <br/>, "thief territory now."]}
          />
          <Subheader
            content="The prime destination for esports and gaming content."
            styles="justify-end text-md"
          />
        </div>
        <div className="image-wrapper flex-grow overflow-hidden">
          <Image
            src="/codchamps.jpeg"
            styles="w-full h-full object-cover"
          />
        </div>
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