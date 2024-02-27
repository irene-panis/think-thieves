export const Collapsible = ( props ) => {

  const closeSiblings = (coll) => {
    const current = coll.innerText;
    const allColls = coll.parentElement.parentElement;
    const esports = allColls.children[0];
    const content = allColls.children[1];
    const apparel = allColls.children[2];
    switch (current) {
      case 'Esports':
        // remove active classes
        content.firstChild.classList.remove("active");
        apparel.firstChild.classList.remove("active");
        // close content and apparel
        content.lastChild.style.maxHeight = null;
        apparel.lastChild.style.maxHeight = null;
        break;
      case 'Content':
        // close esports and apparel
        esports.firstChild.classList.remove("active");
        apparel.firstChild.classList.remove("active");
        esports.lastChild.style.maxHeight = null;
        apparel.lastChild.style.maxHeight = null;
        break;
      case 'Apparel':
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
  }

  return (
    <div>
      <button 
        className="collapsible"
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