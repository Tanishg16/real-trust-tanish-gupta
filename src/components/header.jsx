import React, { useEffect, useState } from "react";
import Logo from '../images/imagesformat/logo.svg';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Navbar Brand */}
        <img src={Logo} alt="My SVG" className="navbar-logo" />
        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navbar Items */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li><a href="#" className="nav-link">Home</a></li>
          <li><a href="#" className="nav-link">Services</a></li>
          <li><a href="#" className="nav-link">About Project</a></li> 
          <li><a href="#" className="nav-link">Project Manual</a></li>
          <li><button className="nav-button">CONTACT</button></li>

        </ul>
      </div>
    </nav>
  );
};

export default Header;