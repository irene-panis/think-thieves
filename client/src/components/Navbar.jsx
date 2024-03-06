import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = (  ) => {

  useEffect(() => {
    var nav = document.querySelector('.nav-items');
    nav.style.display = 'none';
  })

  const toggleNav = () => {
    var nav = document.querySelector('.nav-items');
    if (nav.style.display === 'block') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'block';
    }
  }

  return (
    <nav className={`nav-wrapper bg-white flex flex-col w-full justify-center items-center z-10 shadow-md p-4 h-16`}>
      <div className="nav-icons w-full flex justify-between items-center">
        <img src='/TT_logo.png' height="50" width="50" className=""></img>
        <FontAwesomeIcon 
          icon={faBars} 
          onClick={toggleNav}
        />
      </div>
      <ul className="nav-items text-black uppercase hidden text-center tracking-widest absolute top-0 left-0 w-full mt-16 bg-white py-2">
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