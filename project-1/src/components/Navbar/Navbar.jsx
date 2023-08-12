import React from 'react'

import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="Nike" />
        </div>

        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  );
}

export default Navbar
