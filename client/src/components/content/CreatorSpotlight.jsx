import { Image } from "../Image";
import { SocialIcon } from "../SocialIcon";
import { CreatorCollapse } from "./CreatorCollapse";

export const CreatorSpotlight = ( { creator } ) => {
  return (
    <div className="creator-spotlight mx-4 flex-grow lg:flex-1 flex flex-col gap-2">
      <Image src={creator.img}/>
      <div className="creator-info flex flex-col">
        <div className="creator-simple flex justify-between">
          <span className="uppercase"><b>{creator.name}</b>, {creator.title}</span>
          <div className="creator-socials flex gap-2">
            {creator.socials.map((social, index) => {
              return (
                <span key={index}>
                  <a href={social.link}>
                    <SocialIcon platform={social.platform}/>
                  </a>
                </span>
              )
            })}
          </div>
        </div>
        <CreatorCollapse bio={creator.bio}/>
      </div>
    </div>
  )
}