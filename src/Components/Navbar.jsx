import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo">EDYODA</div>
          <div className="courses">Courses ▼</div>
          <div className="programs">Programs ▼</div>
        </div>
        <div className="navbar-right">
        {showSearch && (
          <div className="search-box">
            <input type="text" placeholder="Search" />
          </div>
        )}
        <div className="search-icon" onClick={toggleSearch}>
          <FaSearch />
        </div>

        <button className="login-btn">Log In</button>
        <button className="join-now">JOIN NOW</button>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
