import { Creators } from "../components/content/Creators";
import { useState } from "react";
import { creators } from "../../../server/utils/creatorData";
import { CreatorSpotlight } from "../components/content/CreatorSpotlight";
import { Subheader } from "../components/Subheader";
import { CreatorFeed } from "../components/content/CreatorFeed";

export const Content = () => {

  const [creator, setCreator] = useState(creators[0]);

  const handleCreatorChange = (newCreator) => {
    setCreator(newCreator);
  } 

  const containerHeight = `calc(100vh - 4rem)`;

  return (
    <div className="content-wrapper w-full">
      <div style={{ height: containerHeight }}>
        <Subheader divStyles="uppercase text-center" content="100 Thieves is proud to be the home to the most popular creators in gaming."/>
        <div className="creator-container flex h-full flex-col lg:flex-row-reverse">
          <Creators onCreatorChange={handleCreatorChange} currentCreator={creator}/>
          <CreatorSpotlight creator={creator}/>
        </div>
      </div>
      <CreatorFeed/>
    </div>
  )
}