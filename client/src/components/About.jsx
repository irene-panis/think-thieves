/* eslint-disable react/jsx-key */
import { Header } from "./Header";
import { Image } from "./Image";
import { Subheader } from "./Subheader";

export const About = () => {
  return (
    <div className="about-wrapper flex flex-col justify-center items-center h-screen">
      <div className="column-one h-full flex flex-col gap-3">
        <div className="text flex-grow flex flex-col h-2/3 justify-center items-center gap-3 text-center">
          <Header
            header={["You're in ", <br/>, "thief territory now."]}
          />
          <Subheader
            content="100 THIEVES is the premium lifestyle brand for the gaming generation."
            styles="justify-end text-md"
          />
        </div>
        <div className="image-wrapper flex-grow overflow-hidden hidden">
          <Image
            src="/codchamps.jpeg"
            styles="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="column-two h-full">
        <Image
          src="/co-owners.jpeg"
          styles="h-full w-full"
        />
      </div>
    </div>
  )
}