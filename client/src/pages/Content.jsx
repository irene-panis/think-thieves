import { Creators } from "../components/content/Creators";
import { useState } from "react";
import { creators } from "../../../server/utils/creatorData";
import { CreatorSpotlight } from "../components/content/CreatorSpotlight";
import { Header } from "../components/Header";
import { CreatorFeed } from "../components/content/CreatorFeed";

export const Content = () => {

  const [creator, setCreator] = useState(creators[0]);

  const handleCreatorChange = (newCreator) => {
    setCreator(newCreator);
  } 

  return (
    <div className="content-wrapper w-full flex flex-col gap-20 px-10">
      <div className="creator-container flex flex-col lg:flex-row-reverse lg:justify-between">
        <Creators onCreatorChange={handleCreatorChange} currentCreator={creator}/>
        <CreatorSpotlight creator={creator}/>
      </div>
      <Header header="100 Thieves is proud to be the home to the most popular creators in gaming."/>
      <CreatorFeed/>
    </div>
  )
}