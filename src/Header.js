import React from 'react';
import { Link } from 'react-router-dom';
import logo from './log.png'; // Import the logo image
import { FaSearch } from 'react-icons/fa'; // Using react-icons for the search icon

function Header() {
  return (
    <div className="header">
      {/* Logo and Home link */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="App Logo" className="logo" />
      </Link>

      {/* Search bar with icon */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>

      {/* Authentication and Guide Buttons */}
      <div className="auth-buttons">
        <Link to="/login">
          <button className="auth-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="auth-button">Sign Up</button>
        </Link>
        <Link to="/guide">
          <button className="auth-button guide-button">Guide</button>
        </Link>
      </div>
    </div>
  );
}


export default Header;
