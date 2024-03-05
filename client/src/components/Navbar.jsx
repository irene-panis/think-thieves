import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {

  const toggleNav = () => {
    var nav = document.querySelector('.nav-items');
    if (nav.style.display === 'block') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'block';
    }
  }

  return (
    <nav className="nav-wrapper bg-white flex flex-col w-full justify-center items-center relative z-10 shadow-md p-4 gap-4">
      <div className="nav-icons w-full flex justify-between items-center">
        <img src='/TT_logo.png' height="50" width="50" className=""></img>
        <FontAwesomeIcon 
          icon={faBars} 
          onClick={toggleNav}
        />
      </div>
      <ul className="nav-items text-black uppercase hidden text-center tracking-widest">
        <li className="px-1 hover:underline hover:bg-black hover:text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="px-1 hover:underline hover:bg-black hover:text-white">
          <Link to="/esports">Esports</Link>
        </li>
        <li className="px-1 hover:underline hover:bg-black hover:text-white">
          <Link to="/content">Content</Link>
        </li>
        <li className="px-1 hover:underline hover:bg-black hover:text-white">
          <Link to="/apparel">Apparel</Link>
        </li>
      </ul>
    </nav>
  )
}