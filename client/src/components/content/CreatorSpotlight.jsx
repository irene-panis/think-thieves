import { Image } from "../Image";

export const CreatorSpotlight = ( { creator } ) => {
  return (
    <div className="creator-spotlight">
      <Image src={creator.img}/>
      <span>{creator.name}</span>
    </div>
  )
}