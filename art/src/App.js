// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';


import m1 from './m1.jpg';
import m2 from './m2.jpg';

// Import components
import Header from './Header'; // Import Header component
import GetStarted from './GetStarted';
import UploadedImagePage from './components/UploadedImage'; // Import the new page
import Login from './Login'; // Import the login page
import Signup from './Signup'; // Import the signup page

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Show Header only on home page */}
                <Header />

                {/* Hero Section */}
                <section className="hero">
                  <h1>Transform Your Photos into Stunning Art with AI</h1>
                  <p>Create unique artwork in just a few clicks!</p>

                  {/* Gallery Section */}
                  <div className="gallery">
                    <img src={m1} alt="Before transformation" />
                    <img src={m2} alt="After transformation" />
                  </div>

                  <Link to="/get-started">
                    <button className="cta-button">Get Started</button>
                  </Link>
                </section>

                {/* Features Overview */}
                <section className="features-section">
                  <h2>Features</h2>
                  <div className="container">
                    <div className="card">
                      <div className="box">
                        <div className="content">
                          <h3>Image Upload</h3>
                          <p>Upload personal photos in JPG, PNG formats with drag-and-drop or file browser options. Supports single and multiple uploads.</p>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="box">
                        <div className="content">
                          <h3>Diverse Art Styles</h3>
                          <p>Choose from a variety of art styles like Impressionism, Cubism, and Abstract. Preview each style before applying to your image.</p>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="box">
                        <div className="content">
                          <h3>Style Blending</h3>
                          <p>Mix multiple art styles with a blending ratio slider. Real-time preview of the hybrid effect before finalizing.</p>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="box">
                        <div className="content">
                          <h3>Adjustments & Filters</h3>
                          <p>Adjust intensity, brightness, contrast, saturation, and sharpness. See changes in real time.</p>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="box">
                        <div className="content">
                          <h3>Instant Preview & Download</h3>
                          <p>View your artwork instantly and download it in JPG or PNG formats. High-resolution options available for printing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* New Image Gallery Section (Before Footer) */}
                <div className="parent">
                  <img className="general val1" src="https://cdn.pixabay.com/photo/2023/07/11/17/24/ai-generated-8121001_1280.jpg" alt="AI Generated Art 1" />
                  <img className="general val2" src="https://cdn.pixabay.com/photo/2023/08/03/13/49/ai-generated-8167209_640.png" alt="AI Generated Art 2" />
                  <img className="general val3" src="https://cdn.pixabay.com/photo/2022/12/03/16/26/crater-7633035_640.png" alt="AI Generated Art 3" />
                  <img className="general val4" src="https://cdn.pixabay.com/photo/2023/08/04/08/35/ai-generated-8168687_640.jpg" alt="AI Generated Art 4" />
                  <img className="general val5" src="https://cdn.pixabay.com/photo/2023/07/28/12/29/ai-generated-8155175_640.png" alt="AI Generated Art 5" />
                  <img className="general val6" src="https://cdn.pixabay.com/photo/2023/02/20/20/44/ai-generated-7803070_640.jpg" alt="AI Generated Art 6" />
                  <img className="general val7" src="https://cdn.pixabay.com/photo/2023/07/03/09/36/ai-generated-8103801_1280.jpg" alt="AI Generated Art 7" />
                  <img className="general val8" src="https://cdn.pixabay.com/photo/2023/02/17/10/44/ai-generated-7795744_640.jpg" alt="AI Generated Art 8" />
                  <img className="general val9" src="https://cdn.pixabay.com/photo/2023/08/03/11/57/ai-generated-8166964_640.jpg" alt="AI Generated Art 9" />
                </div>

                {/* Footer Section */}
                <footer className="footer">
                  <div className="footer-links">
                    <a href="#terms">Terms of Service</a>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#contact">Contact Us</a>
                  </div>
                  <p className="legal-links">© 2024 Artify Studio. All rights reserved.</p>
                </footer>
              </>
            }
          />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/uploaded-image" element={<UploadedImagePage />} /> {/* New Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
