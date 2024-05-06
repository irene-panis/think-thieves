import { useState } from "react";

export const CreatorCollapse = ( { bio } ) => {

  const [showBio, setShowBio] = useState(false);

  const handleClick = (e) => {
    const coll = e.target;
    var content = coll.nextElementSibling;
    if (content.style.maxHeight) {
      setShowBio(false);
      content.style.maxHeight = null;
    } else {
      setShowBio(true);
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  return (
    <div className="w-full">
      <button 
        className="collapsible lowercase text-black duration-200 ease-in-out"
        onClick={handleClick}
      >
        {
          showBio ? (
            <span>show bio</span>
          ) : (
            <span>hide bio</span>
          )
        }
      </button>
      <div className="coll-content">
        {bio}
      </div>
    </div>
  )
}