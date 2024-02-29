import { useRef } from "react";

export const Collapsible = ( props ) => {

  const ref = useRef(null);

  const closeSiblings = (coll) => {
    const current = coll.innerText;
    const allColls = coll.parentElement.parentElement;
    const esports = allColls.children[0];
    const content = allColls.children[1];
    const apparel = allColls.children[2];
    switch (current) {
      case 'ESPORTS':
        // remove active classes
        content.firstChild.classList.remove("active");
        apparel.firstChild.classList.remove("active");
        // close content and apparel
        content.lastChild.style.maxHeight = null;
        apparel.lastChild.style.maxHeight = null;
        break;
      case 'CONTENT':
        // close esports and apparel
        esports.firstChild.classList.remove("active");
        apparel.firstChild.classList.remove("active");
        esports.lastChild.style.maxHeight = null;
        apparel.lastChild.style.maxHeight = null;
        break;
      case 'APPAREL':
        // close esports and content
        esports.firstChild.classList.remove("active");
        content.firstChild.classList.remove("active");
        esports.lastChild.style.maxHeight = null;
        content.lastChild.style.maxHeight = null;
        break;
    }
  }

  const handleClick = (e) => {
    const coll = e.target;
    coll.classList.toggle("active");
    var content = coll.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    closeSiblings(coll);
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="w-full" ref={ref}>
      <button 
        className="collapsible uppercase font-oswald font-bold text-black duration-200 ease-in-out"
        onClick={handleClick}
      >
        {props.header}
      </button>
      <div className="coll-content h-full">
        {props.content}
      </div>
    </div>
  )
}