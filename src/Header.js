// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './log.png'; // Import the logo image

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="App Logo" className="logo" />
      </Link>
    </div>
  );
}

export default Header;
