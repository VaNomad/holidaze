import { Link } from "react-router-dom"
import {FiLogIn, FiLogOut, FiUser, FiPlus, FiHome} from "react-icons/fi"

export const Nav = () => {
  const handleClick = () => {
    alert("You are now logged out");
  }

  return (
    <nav className="h-screen flex items-center justify-center">
      <ul className="border-[4px] border-purple-700 p-5">
        <li>
          <Link to="/" className="flex items-center">
            <FiHome />
            <h1 className="ms-5">Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/login" className="flex items-center">
            <FiLogIn />
            <h1 className="ms-5">Login</h1>
          </Link>
        </li>
        <li>
          <Link to="/userProfile" className="flex items-center">
            <FiUser />
            <h1 className="ms-5">Profile</h1>
          </Link>
        </li>
        <li>
          <Link to="/addVenue" className="flex items-center">
            <FiPlus />
            <h1 className="ms-5">Add Venue</h1>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex items-center" onClick={handleClick}>
            <FiLogOut />
            <h1 className="ms-5">Logout</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}