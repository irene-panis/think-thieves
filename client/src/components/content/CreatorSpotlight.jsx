import { SocialIcon } from "../SocialIcon";
import { CreatorCollapse } from "./CreatorCollapse";
import { useState, useEffect } from "react";
import { Image } from "../Image"

export const CreatorSpotlight = ( { creator } ) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const src = windowWidth < 640 ? creator.img : creator.img_lg;

  return (
    <div className="creator-spotlight mx-4 flex flex-col gap-2 pt-[2rem]">
      <Image src={src}/>
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