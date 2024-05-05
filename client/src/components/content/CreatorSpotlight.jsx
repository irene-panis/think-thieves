import { Image } from "../Image";

export const CreatorSpotlight = ( { creator } ) => {
  return (
    <div className="creator-spotlight mx-4 flex-grow">
      <Image src={creator.img}/>
      <span className="uppercase">{creator.name}</span>
    </div>
  )
}