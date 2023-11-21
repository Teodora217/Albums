import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { LiaImagesSolid } from "react-icons/lia";
import { PiShootingStarLight } from "react-icons/pi";
import "../styles/Navbar.css";

const NavBar = ({ children }) => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">
          <IoHomeOutline className="icon" />
          Home
        </Link>
        <Link to="/albums" className="nav-link">
          <LiaImagesSolid className="icon" />
          Albums
        </Link>
        <Link to="/favorites" className="nav-link">
          <PiShootingStarLight className="icon" />
          Favorites
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default NavBar;
