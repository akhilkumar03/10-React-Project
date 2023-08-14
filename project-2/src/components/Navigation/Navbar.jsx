import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/Logo1.png" alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
