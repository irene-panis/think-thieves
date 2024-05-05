import { Image } from "../Image";

export const CreatorSpotlight = ( { creator } ) => {
  return (
    <div className="creator-spotlight mx-4">
      <Image src={creator.img}/>
      <span>{creator.name}</span>
    </div>
  )
}