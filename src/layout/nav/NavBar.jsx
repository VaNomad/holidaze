import { navLinks } from "../../constants/constants";
import { FiMenu, FiXCircle  } from "react-icons/fi";
import { vectorList } from "../../constants/constants";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed">
      <div>
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("");
          }}
        >
          <img src={vectorList.holidazeLogoGreen} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-purple-600"
              } hover:text-black cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? FiXCircle : FiMenu}
            alt="menu"
            className="w-[28px] h-[28px] cursor-pointer text-black"
            onClick={() => setToggle(!toggle)}
          />
          {toggle ? null : (
            <span className="ml-2 text-[18px]">Menu</span>
          )}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-black" : "text-red"
                  } text-[16px] cursor-pointer font-medium`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}