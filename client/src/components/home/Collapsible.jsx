export const Collapsible = ( props ) => {

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
        content.lastChild.classList.remove("expanded");
        apparel.lastChild.classList.remove("expanded");
        break;
      case 'CONTENT':
        // close esports and apparel
        esports.firstChild.classList.remove("active");
        apparel.firstChild.classList.remove("active");
        esports.lastChild.classList.remove("expanded");
        apparel.lastChild.classList.remove("expanded");
        break;
      case 'APPAREL':
        // close esports and content
        esports.firstChild.classList.remove("active");
        content.firstChild.classList.remove("active");
        esports.lastChild.classList.remove("expanded");
        content.lastChild.classList.remove("expanded");
        break;
    }
  }

  const handleClick = (e) => {
    const coll = e.target;
    coll.classList.toggle("active");
    var content = coll.nextElementSibling;
    content.classList.toggle("expanded");
    closeSiblings(coll);
  }

  return (
    <div className="w-full">
      <button 
        className="collapsible uppercase font-oswald font-bold text-black duration-200 ease-in-out"
        onClick={handleClick}
      >
        {props.header}
      </button>
      <div className="coll-content">
        {props.content}
      </div>
    </div>
  )
}