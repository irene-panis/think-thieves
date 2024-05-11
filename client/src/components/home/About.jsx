/* eslint-disable react/jsx-key */
import { Header } from "../Header";
import { Image } from "../Image";
import { Subheader } from "../Subheader";

export const About = () => {
  return (
    <div className="about-wrapper flex flex-wrap gap-4 justify-around items-center h-screen p-4">
      <div className="column-one flex flex-col justify-center gap-3">
          <Header
            header={
              <>
                You're in <br/> thief territory now.
              </>
            }
          />
          <Subheader
            content="100 THIEVES is the premium lifestyle brand for the gaming generation."
            styles="justify-end text-md"
          />
      </div>
      <div className="column-two flex justify-center items-center">
        <Image
          src="/home/co-owners.jpeg"
          styles="h-full w-full"
        />
      </div>
    </div>
  )
}