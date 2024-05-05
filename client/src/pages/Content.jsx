import { Creators } from "../components/content/Creators";
import { useState } from "react";
import { creators } from "../../../server/utils/creatorData";

export const Content = () => {
  const containerHeight = `calc(100vh - 4rem)`;

  const [creator, setCreator] = useState(creators[0]);

  const handleCreatorChange = (newCreator) => {
    setCreator(newCreator);
  } 


  return (
    <div className="content-wrapper w-full h-full" style={{ height: containerHeight }}>
      <Creators onCreatorChange={handleCreatorChange}/>
    </div>
  )
}