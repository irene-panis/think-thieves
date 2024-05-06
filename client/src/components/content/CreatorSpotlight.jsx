import { Image } from "../Image";
import { SocialIcon } from "../SocialIcon";

export const CreatorSpotlight = ( { creator } ) => {
  return (
    <div className="creator-spotlight mx-4 flex-grow flex flex-col gap-2">
      <Image src={creator.img}/>
      <div className="creator-info flex justify-between">
        <span className="uppercase">{creator.name}</span>
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
    </div>
  )
}