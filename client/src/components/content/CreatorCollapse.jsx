import { useState } from "react";

export const CreatorCollapse = ( { bio } ) => {

  const [showBio, setShowBio] = useState(false);

  const handleClick = (e) => {
    const coll = e.target;
    var content = coll.nextElementSibling;
    const newMaxHeight = showBio ? null : "500px";
    setShowBio(!showBio);
    content.style.maxHeight = newMaxHeight;
  }

  return (
    <div className="w-full">
      <button 
        className="lowercase text-black duration-200 ease-in-out"
        onClick={handleClick}
      >
        {
          showBio ? (
            "hide bio"
          ) : (
            "show bio"
          )
        }
      </button>
      <div className="coll-content">
        {bio}
      </div>
    </div>
  )
}