import { Creators } from "../components/content/Creators";
import { useState } from "react";
import { creators } from "../../../server/utils/creatorData";
import { CreatorSpotlight } from "../components/content/CreatorSpotlight";
import { Subheader } from "../components/Subheader";

export const Content = () => {
  const containerHeight = `calc(100vh - 4rem)`;

  const [creator, setCreator] = useState(creators[0]);

  const handleCreatorChange = (newCreator) => {
    setCreator(newCreator);
  } 


  return (
    <div className="content-wrapper w-full py-10" style={{ height: containerHeight }}>
      <Subheader divStyles="uppercase text-center" content="100 Thieves is proud to be the home to the most popular creators in gaming."/>
      <div className="creator-container flex h-full flex-col">
        <Creators onCreatorChange={handleCreatorChange} currentCreator={creator}/>
        <CreatorSpotlight creator={creator}/>
      </div>
    </div>
  )
}