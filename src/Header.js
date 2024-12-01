import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import logo from './log.png'; // Import the logo image
import { FaSearch } from 'react-icons/fa'; // Using react-icons for the search icon
import './header.css';
// Sample list of tools - in a real app, this could be dynamic data
const tools = [
  { name: 'Art Tool' },
  { name: 'Design Tool' },
  { name: 'Photo Editor' },
  { name: '3D Modeler' },
  { name: 'Vectorizer' },
  { name: 'Animation Studio' },
  { name: 'Sketch Tool' },
  { name: 'Image Enhancer' },
  { name: 'Drawing Tool' },
  { name: 'Graphic Creator' }
];

function Header() {
  const [searchQuery, setSearchQuery] = useState('');  // State to store search query
  const [filteredTools, setFilteredTools] = useState(tools);  // State to store filtered tools
  const navigate = useNavigate();  // Hook to navigate programmatically

  // Handle input change in the search bar
  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase();  // Get the search query and convert to lowercase
    setSearchQuery(query);

    // Filter tools based on the search query and update filteredTools
    const filtered = tools.filter(tool => tool.name.toLowerCase().includes(query))
                          .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
    setFilteredTools(filtered);
  };

  // Handle search submit (search icon click or Enter key)
  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate('/uploaded-image-page', { state: { searchQuery } });  // Pass the search query to the UploadedImagePage
    }
  };

  // Optional: Trigger search on Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <div className="header">
      {/* Logo and Home link */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="App Logo" className="logo" />
      </Link>

      {/* Search bar with icon */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search tools..." 
          value={searchQuery} 
          onChange={handleInputChange} 
          onKeyDown={handleKeyPress}  // Trigger search on Enter key
        />
        <FaSearch className="search-icon" onClick={handleSearchSubmit} />
      </div>

      {/* Alphabetically sorted and filtered tool recommendations */}
      {searchQuery && filteredTools.length > 0 && (
        <div className="dropdown">
          <ul className="dropdown-list">
            {filteredTools.map((tool, index) => (
              <li key={index} className="dropdown-item">
                <Link to="/uploaded-image-page" className="tool-link">
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

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
