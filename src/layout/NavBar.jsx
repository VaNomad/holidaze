import { navLinks } from "../assets/constants/constants";
import { FiMenu, FiXCircle  } from "react-icons/fi";
import { vectorList } from "../assets/constants/constants";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed">
      <div>
        <Link to="/" className="flex items-center" onClick={ () => { setActive(""); } }>
          <img src={vectorList.holidazeLogoGreen} alt="logo" />
        </Link>

        {/* Desktop Menu */ }
        <ul className="list-none hidden">
          { navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-purple-600"} hover:text-white cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={ `#${link.id}` }>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
      </div>
    </nav>
  )
}