// src/App.js - Professional Dark Theme Design

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Import components
import GetStarted from './GetStarted';
import Login from './Login';
import Signup from './Signup';
import UploadedImage from './UploadedImage';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Top Logo Bar */}
                <div className="top-logo-bar">
                  <div className="container">
                    <Link to="/" className="brand-logo-link">
                      <div className="brand-logo-top">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                        </svg>
                        <span>Artify Studio</span>
                      </div>
                    </Link>
                    <div className="top-nav-actions">
                      <Link to="/login" className="top-auth-link">Sign In</Link>
                      <Link to="/signup" className="top-signup-btn">
                        <span>Sign Up</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Hero Section with Dark Professional Design */}
                <section className="hero-section">
                  <div className="hero-background">
                    <div className="hero-grid"></div>
                    <div className="hero-glow"></div>
                  </div>
                  
                  <div className="hero-container">
                    <div className="hero-content">
                      <div className="hero-badge" data-aos="fade-up" data-aos-delay="100">
                        <div className="badge-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                          </svg>
                        </div>
                        <span className="badge-text">AI-Powered Studio</span>
                        <div className="badge-pulse"></div>
                      </div>
                      
                      <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
                        Transform Your Photos Into
                        <span className="gradient-text"> Masterpieces</span>
                      </h1>
                      
                      <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
                        Harness the power of cutting-edge AI to transform ordinary photos into 
                        extraordinary works of art. Professional-grade tools at your fingertips.
                      </p>
                      
                      <div className="hero-actions" data-aos="fade-up" data-aos-delay="400">
                        <Link to="/get-started" className="primary-button hero-cta">
                          <span>Start Creating Now</span>
                          <div className="button-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="button-shine"></div>
                        </Link>
                        
                        <button className="secondary-button">
                          <div className="play-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                              <polygon points="10,8 16,12 10,16" fill="currentColor"/>
                            </svg>
                          </div>
                          <span>Watch Demo</span>
                        </button>
                      </div>
                      
                      {/* Additional CTA for mobile */}
                      <div className="mobile-hero-cta" data-aos="fade-up" data-aos-delay="500">
                        <Link to="/get-started" className="mobile-primary-cta">
                          <span>Transform Your Photos</span>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                          </svg>
                        </Link>
                      </div>
                      
                      
                    </div>
                    
                    <div className="hero-quick-styles" data-aos="fade-left" data-aos-delay="600">
                      <div className="quick-styles-container">
                        <div className="styles-header">
                          <h4>Popular Art Styles</h4>
                          <p>Try these trending transformations</p>
                        </div>
                        
                        <div className="styles-grid">
                          <div className="style-card" data-style="vangogh">
                            <div className="style-preview">
                              <img src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=120&h=120&fit=crop&q=80" alt="Van Gogh Style" />
                              <div className="style-overlay">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                                </svg>
                              </div>
                            </div>
                            <span className="style-name">Van Gogh</span>
                          </div>
                          
                          <div className="style-card" data-style="picasso">
                            <div className="style-preview">
                              <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=120&fit=crop&q=80" alt="Picasso Style" />
                              <div className="style-overlay">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                                </svg>
                              </div>
                            </div>
                            <span className="style-name">Picasso</span>
                          </div>
                          
                          <div className="style-card" data-style="watercolor">
                            <div className="style-preview">
                              <img src="https://images.unsplash.com/photo-1549887534-1541e9326642?w=120&h=120&fit=crop&q=80" alt="Watercolor Style" />
                              <div className="style-overlay">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                                </svg>
                              </div>
                            </div>
                            <span className="style-name">Watercolor</span>
                          </div>
                          
                          <div className="style-card" data-style="abstract">
                            <div className="style-preview">
                              <img src="https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=120&h=120&fit=crop&q=80" alt="Abstract Style" />
                              <div className="style-overlay">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                                </svg>
                              </div>
                            </div>
                            <span className="style-name">Abstract</span>
                          </div>
                          
                          <div className="style-card" data-style="impressionist">
                            <div className="style-preview">
                              <img src="https://images.unsplash.com/photo-1577083300146-ddb58dd93df1?w=120&h=120&fit=crop&q=80" alt="Impressionist Style" />
                              <div className="style-overlay">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                                </svg>
                              </div>
                            </div>
                            <span className="style-name">Impressionist</span>
                          </div>
                          
                          <div className="style-card" data-style="modern">
                            <div className="style-preview">
                              <img src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=120&h=120&fit=crop&q=80" alt="Modern Style" />
                              <div className="style-overlay">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                            <span className="style-name">25+ More</span>
                          </div>
                        </div>
                        
                        <div className="styles-cta">
                          <Link to="/get-started" className="try-styles-btn">
                            <span>Try These Styles</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                   {/* CTA Section */}
                <section className="cta-section">
                  <div className="cta-background">
                    <div className="cta-pattern"></div>
                  </div>
                  <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                      <h2 className="cta-title">
                        Ready to Create
                        <span className="highlight"> Something Amazing?</span>
                      </h2>
                      <p className="cta-description">
                        Join thousands of artists and creators who are already transforming 
                        their photos into masterpieces
                      </p>
                      <div className="cta-actions">
                        <Link to="/get-started" className="cta-primary-btn">
                          <span>Start Your Journey</span>
                          <div className="btn-glow"></div>
                        </Link>
                       
                       
                      </div>
                    </div>
                  </div>
                </section>


{/* Live Processing Demo */}
<section className="live-demo-section">
  <div className="demo-background">
    <div className="demo-pattern"></div>
    <div className="floating-code">
      <div className="code-snippet">AI.transform()</div>
      <div className="code-snippet">style.apply()</div>
      <div className="code-snippet">quality.enhance()</div>
    </div>
  </div>

  <div className="container">
    <div className="demo-content">
      <div className="demo-info" data-aos="fade-right">
        <div className="section-badge">
          <span>Live Demo</span>
          <div className="live-indicator"></div>
        </div>
        <h2 className="demo-title">
          Watch AI Transform
          <span className="highlight"> In Real-Time</span>
        </h2>
        <p className="demo-description">
          Experience the magic of our AI technology as it processes and transforms 
          images with professional precision. No waiting, just instant results.
        </p>
        
        <div className="demo-features">
          <div className="demo-feature">
            <div className="feature-icon">⚡</div>
            <div className="feature-text">
              <strong>Lightning Fast</strong>
              <span>Average processing: 2.3 seconds</span>
            </div>
          </div>
          <div className="demo-feature">
            <div className="feature-icon">🎯</div>
            <div className="feature-text">
              <strong>Pixel Perfect</strong>
              <span>Preserves image quality & details</span>
            </div>
          </div>
          <div className="demo-feature">
            <div className="feature-icon">🔄</div>
            <div className="feature-text">
              <strong>Multiple Styles</strong>
              <span>25+ artistic transformations</span>
            </div>
          </div>
        </div>

        <div className="demo-cta">
          <Link to="/get-started" className="demo-try-btn">
            <span>Try It Yourself</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </Link>
        </div>
      </div>

      <div className="demo-visual" data-aos="fade-left">
        <div className="demo-container">
          <div className="demo-screen">
            <div className="demo-header">
              <div className="demo-controls">
                <div className="control-dot red"></div>
                <div className="control-dot yellow"></div>
                <div className="control-dot green"></div>
              </div>
              <div className="demo-title-bar">Artify Studio - Live Processing</div>
            </div>
            
            <div className="demo-workspace">
              <div className="demo-sidebar">
                <div className="style-selector">
                  <div className="style-option active">Van Gogh</div>
                  <div className="style-option">Picasso</div>
                  <div className="style-option">Watercolor</div>
                  <div className="style-option">Abstract</div>
                </div>
              </div>
              
              <div className="demo-canvas">
                <div className="processing-animation">
                  <div className="image-placeholder">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616c9c6cab8?w=300&h=200&fit=crop" alt="Demo" />
                    <div className="processing-overlay">
                      <div className="processing-grid">
                        {[...Array(16)].map((_, i) => (
                          <div key={i} className={`grid-cell cell-${i}`}></div>
                        ))}
                      </div>
                      <div className="processing-progress">
                        <div className="progress-bar"></div>
                        <div className="progress-text">Processing... 89%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="demo-effects">
            <div className="effect-ring ring-1"></div>
            <div className="effect-ring ring-2"></div>
            <div className="effect-ring ring-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* Features Section */}
                <section className="features-section">
                  <div className="section-background">
                    <div className="floating-elements">
                      <div className="floating-circle"></div>
                      <div className="floating-square"></div>
                      <div className="floating-triangle"></div>
                    </div>
                  </div>
                  
                  <div className="container">
                    <div className="section-header" data-aos="fade-up">
                      <div className="section-badge">
                        <span>Powerful Features</span>
                      </div>
                      <h2 className="section-title">
                        Everything You Need for
                        <span className="highlight"> Professional Results</span>
                      </h2>
                      <p className="section-description">
                        Advanced AI algorithms combined with intuitive design tools 
                        to bring your creative vision to life
                      </p>
                    </div>
                    
                    <div className="features-grid">
                      <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="feature-header">
                          <div className="feature-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <polyline points="7,10 12,5 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <line x1="12" y1="5" x2="12" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="feature-status">New</div>
                        </div>
                        <h3 className="feature-title">Smart Upload</h3>
                        <p className="feature-description">
                          Advanced drag & drop with batch processing support. 
                          Auto-optimization for any image format.
                        </p>
                        <div className="feature-specs">
                          <span>• Batch Processing</span>
                          <span>• Auto Format Detection</span>
                          <span>• Cloud Sync</span>
                        </div>
                      </div>
                      
                      <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="feature-header">
                          <div className="feature-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                            </svg>
                          </div>
                          <div className="feature-status popular">Popular</div>
                        </div>
                        <h3 className="feature-title">AI Art Styles</h3>
                        <p className="feature-description">
                          25+ professional art styles powered by state-of-the-art 
                          neural networks. Real-time preview.
                        </p>
                        <div className="feature-specs">
                          <span>• Van Gogh, Picasso & More</span>
                          <span>• Custom Style Training</span>
                          <span>• Style Intensity Control</span>
                        </div>
                      </div>
                      
                      <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="feature-header">
                          <div className="feature-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                              <path d="M12 1v6M12 17v6" stroke="currentColor" strokeWidth="2"/>
                              <path d="M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24" stroke="currentColor" strokeWidth="2"/>
                              <path d="M1 12h6M17 12h6" stroke="currentColor" strokeWidth="2"/>
                              <path d="M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          </div>
                        </div>
                        <h3 className="feature-title">Pro Adjustments</h3>
                        <p className="feature-description">
                          Professional-grade color grading and enhancement tools. 
                          Non-destructive editing workflow.
                        </p>
                        <div className="feature-specs">
                          <span>• Advanced Color Grading</span>
                          <span>• HDR Processing</span>
                          <span>• Noise Reduction</span>
                        </div>
                      </div>
                      
                      <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
                        <div className="feature-header">
                          <div className="feature-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="2"/>
                              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="2"/>
                              <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" stroke="currentColor" strokeWidth="2"/>
                              <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          </div>
                        </div>
                        <h3 className="feature-title">Style Blending</h3>
                        <p className="feature-description">
                          Combine multiple art styles with precision controls. 
                          Create unique artistic combinations.
                        </p>
                        <div className="feature-specs">
                          <span>• Multi-Style Mixing</span>
                          <span>• Precision Blending</span>
                          <span>• Custom Presets</span>
                        </div>
                      </div>
                      
                      <div className="feature-card" data-aos="fade-up" data-aos-delay="500">
                        <div className="feature-header">
                          <div className="feature-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <h3 className="feature-title">Creative Tools</h3>
                        <p className="feature-description">
                          Complete suite of creative tools including drawing, 
                          text overlay, and advanced masking.
                        </p>
                        <div className="feature-specs">
                          <span>• Vector Drawing Tools</span>
                          <span>• Smart Text Effects</span>
                          <span>• Advanced Masking</span>
                        </div>
                      </div>
                      
                      <div className="feature-card" data-aos="fade-up" data-aos-delay="600">
                        <div className="feature-header">
                          <div className="feature-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                              <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                              <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                              <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          </div>
                        </div>
                        <h3 className="feature-title">Export Studio</h3>
                        <p className="feature-description">
                          Multiple export formats with lossless quality. 
                          Optimized for web, print, and social media.
                        </p>
                        <div className="feature-specs">
                          <span>• 4K/8K Export</span>
                          <span>• Print Optimization</span>
                          <span>• Social Media Formats</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>


             

{/* Pricing Plans */}
<section className="pricing-section">
  <div className="pricing-background">
    <div className="pricing-grid"></div>
    <div className="pricing-glow"></div>
  </div>

  <div className="container">
    <div className="section-header" data-aos="fade-up">
      <div className="section-badge">
        <span>🚀 Affordable Pricing Plans</span>
      </div>
      <h2 className="section-title">
        Transform Your Ideas Into
        <span className="highlight"> Stunning Art</span>
      </h2>
      <p className="section-description">
        Premium AI-powered creativity at unbeatable Indian prices. 
        Start your artistic journey today with plans designed for every budget!
      </p>
    </div>

    <div className="pricing-toggle" data-aos="fade-up" data-aos-delay="200">
      <div className="toggle-container">
        <span className="toggle-label">Monthly</span>
        <div className="toggle-switch">
          <input type="checkbox" id="pricing-toggle" />
          <label htmlFor="pricing-toggle" className="toggle-slider"></label>
        </div>
        <span className="toggle-label">
          Annual
          <span className="save-badge">💰 Save 40%</span>
        </span>
      </div>
    </div>

    <div className="pricing-cards" data-aos="fade-up" data-aos-delay="300">
      <div className="pricing-card starter">
        <div className="card-header">
          <div className="plan-badge">🌟 Perfect Start</div>
          <h3 className="plan-name">Basic</h3>
          <div className="plan-price">
            <span className="currency">₹</span>
            <span className="amount">149</span>
            <span className="period">/month</span>
          </div>
          <div className="original-price">
            <span>₹299</span>
            <span className="discount-badge">50% OFF</span>
          </div>
          <p className="plan-description">Perfect for beginners and personal projects</p>
        </div>
        
        <div className="card-features">
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>100 AI transformations/month</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>15+ Premium AI styles</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Full HD quality exports</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>24/7 WhatsApp support</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Commercial usage rights</span>
          </div>
        </div>
        
        <button className="plan-button">
          <span>🎯 Start Creating Now</span>
        </button>
        <div className="popular-choice">⚡ Most Chosen Plan</div>
      </div>

      <div className="pricing-card professional popular">
        <div className="popular-badge">🔥 BEST VALUE</div>
        <div className="card-header">
          <div className="plan-badge">💎 Professional Choice</div>
          <h3 className="plan-name">Pro</h3>
          <div className="plan-price">
            <span className="currency">₹</span>
            <span className="amount">399</span>
            <span className="period">/month</span>
          </div>
          <div className="original-price">
            <span>₹799</span>
            <span className="discount-badge">50% OFF</span>
          </div>
          <p className="plan-description">Unlimited creativity for serious artists & creators</p>
        </div>
        
        <div className="card-features">
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>🚀 UNLIMITED transformations</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>50+ Exclusive AI styles</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>4K & 8K Ultra HD exports</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Bulk processing (up to 50)</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Priority support + Video calls</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Advanced editing tools</span>
          </div>
        </div>
        
        <button className="plan-button">
          <span>🎨 Start 7-Day FREE Trial</span>
          <div className="button-glow"></div>
        </button>
        <div className="trial-note">No credit card required • Cancel anytime</div>
      </div>

      <div className="pricing-card enterprise">
        <div className="card-header">
          <div className="plan-badge">🏢 Enterprise Solution</div>
          <h3 className="plan-name">Business</h3>
          <div className="plan-price">
            <span className="currency">₹</span>
            <span className="amount">999</span>
            <span className="period">/month</span>
          </div>
          <div className="original-price">
            <span>₹1,999</span>
            <span className="discount-badge">50% OFF</span>
          </div>
          <p className="plan-description">Complete solution for teams, agencies & businesses</p>
        </div>
        
        <div className="card-features">
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>✨ Everything in Pro +</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Custom AI model training</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Full API access & integrations</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Team collaboration (up to 10)</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Dedicated account manager</span>
          </div>
          <div className="feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>White-label solutions</span>
          </div>
        </div>
        
        <button className="plan-button">
          <span>💼 Schedule Demo</span>
        </button>
        <div className="custom-note">Custom pricing available for large teams</div>
      </div>
    </div>

    <div className="pricing-footer" data-aos="fade-up" data-aos-delay="500">
      <div className="money-back-guarantee">
        <div className="guarantee-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="guarantee-text">
          <strong>🛡️ 30-Day Money-Back Guarantee</strong>
          <span>Try completely risk-free! Not satisfied? Get 100% refund, no questions asked.</span>
        </div>
      </div>
      
      <div className="additional-benefits">
        <div className="benefit-item">
          <span className="benefit-icon">🎁</span>
          <span>Free bonus templates worth ₹2,000</span>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon">📚</span>
          <span>Exclusive AI art masterclass included</span>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon">🔄</span>
          <span>Upgrade or downgrade anytime</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Testimonials */}
<section className="testimonials-section">
  <div className="testimonials-background">
    <div className="testimonial-pattern"></div>
  </div>

  <div className="container">
    <div className="section-header" data-aos="fade-up">
      <div className="section-badge">
        <span>Testimonials</span>
      </div>
      <h2 className="section-title">
        Loved by Creators
        <span className="highlight"> Worldwide</span>
      </h2>
      <p className="section-description">
        See what artists, photographers, and creators are saying about Artify Studio
      </p>
    </div>

    <div className="testimonials-grid" data-aos="fade-up" data-aos-delay="200">
      {[
        {
          text: "Artify Studio has completely transformed my photography workflow. The AI styles are incredibly realistic and save me hours of manual editing. It's like having a master artist as my personal assistant!",
          author: "Sarah Chen",
          role: "Professional Photographer",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616c9c6cab8?w=80&h=80&fit=crop&crop=face",
          rating: 5,
          company: "Chen Photography Studio"
        },
        {
          text: "As a digital artist, I was skeptical about AI tools, but Artify Studio blew me away. The quality is outstanding, and it actually enhances my creativity rather than replacing it. Game changer!",
          author: "Marcus Johnson",
          role: "Digital Artist",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
          rating: 5,
          company: "Freelance Artist"
        },
        {
          text: "The speed and quality are unmatched. I can now offer my clients artistic transformations that would have taken days to create manually. My business has grown 300% since using Artify!",
          author: "Emma Rodriguez",
          role: "Creative Director",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
          rating: 5,
          company: "Visual Arts Agency"
        }
      ].map((testimonial, index) => (
        <div key={index} className="testimonial-card" data-aos="zoom-in" data-aos-delay={300 + index * 100}>
          <div className="testimonial-header">
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FFD700"/>
                </svg>
              ))}
            </div>
            <div className="testimonial-quote">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          
          <p className="testimonial-text">{testimonial.text}</p>
          
          <div className="testimonial-author">
            <div className="author-avatar">
              <img src={testimonial.avatar} alt={testimonial.author} />
            </div>
            <div className="author-info">
              <div className="author-name">{testimonial.author}</div>
              <div className="author-role">{testimonial.role}</div>
              <div className="author-company">{testimonial.company}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

   
  </div>
</section>

              



                {/* Footer */}
                <footer className="footer">
                  <div className="footer-background">
                    <div className="footer-grid"></div>
                  </div>
                  <div className="container">
                    <div className="footer-content">
                      <div className="footer-brand">
                        <div className="brand-logo">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                          </svg>
                          <span>Artify Studio</span>
                        </div>
                        <p className="brand-tagline">
                          Transforming creativity through AI-powered artistry
                        </p>
                        <div className="social-links">
                          <a href="#" className="social-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                          <a href="#" className="social-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                              <path d="M8 21l4-7 4 7" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          </a>
                          <a href="#" className="social-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                      
                      <div className="footer-links">
                        <div className="footer-column">
                          <h4>Product</h4>
                          <a href="#features">Features</a>
                          <a href="#pricing">Pricing</a>
                          <a href="#gallery">Gallery</a>
                          <a href="#api">API</a>
                        </div>
                        <div className="footer-column">
                          <h4>Resources</h4>
                          <a href="#tutorials">Tutorials</a>
                          <a href="#blog">Blog</a>
                          <a href="#community">Community</a>
                          <a href="#support">Support</a>
                        </div>
                        <div className="footer-column">
                          <h4>Company</h4>
                          <a href="#about">About Us</a>
                          <a href="#careers">Careers</a>
                          <a href="#press">Press</a>
                          <a href="#contact">Contact</a>
                        </div>
                        <div className="footer-column">
                          <h4>Legal</h4>
                          <a href="#privacy">Privacy Policy</a>
                          <a href="#terms">Terms of Service</a>
                          <a href="#cookies">Cookie Policy</a>
                          <a href="#gdpr">GDPR</a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="footer-bottom">
                      <div className="footer-copyright">
                        <p>&copy; 2024 Artify Studio. All rights reserved.</p>
                      </div>
                      <div className="footer-meta">
                        <span>Made with ❤️ for creators</span>
                      </div>
                    </div>
                  </div>
                </footer>
              </>
            }
          />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/uploaded-image" element={<UploadedImage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;