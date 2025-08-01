// src/GetStarted.js - Modern Upload Interface

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStarted.css';

function GetStarted() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [selectedTool, setSelectedTool] = useState('photo-to-art');
  const [user, setUser] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Check authentication on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // If not authenticated, redirect to login
      navigate('/login');
    }
  }, [navigate]);



  const tools = [
    {
      id: 'photo-to-art',
      name: 'Photo to Art',
      description: 'Transform your photos into stunning artwork using AI',
      icon: '🎨',
      popular: true,
      features: ['Multiple art styles', 'High quality output', 'Fast processing']
    },
    {
      id: 'style-transfer',
      name: 'Style Transfer',
      description: 'Apply famous art styles to your images',
      icon: '🖼️',
      popular: true,
      features: ['Van Gogh, Picasso & more', 'Style blending', 'Custom intensity']
    },
    {
      id: 'background-remove',
      name: 'Background Remover',
      description: 'Remove backgrounds with precision',
      icon: '✂️',
      popular: false,
      features: ['Smart edge detection', 'Transparent PNG', 'Batch processing']
    },
    {
      id: 'color-enhance',
      name: 'Color Enhancer',
      description: 'Enhance colors and vibrancy',
      icon: '🌈',
      popular: false,
      features: ['Auto color correction', 'Vibrance boost', 'Shadow/highlight']
    },
    {
      id: 'vintage-filter',
      name: 'Vintage Filter',
      description: 'Add nostalgic vintage effects',
      icon: '📸',
      popular: true,
      features: ['Film grain effects', 'Color grading', 'Retro styles']
    },
    {
      id: 'sketch-maker',
      name: 'Sketch Maker',
      description: 'Convert photos to pencil sketches',
      icon: '✏️',
      popular: false,
      features: ['Pencil textures', 'Line art styles', 'Adjustable details']
    }
  ];

  // Handle file selection
  const handleFileSelect = useCallback((files) => {
    const validFiles = Array.from(files).filter(file => {
      const isValid = file.type.startsWith('image/') && file.size <= 10 * 1024 * 1024; // 10MB limit
      return isValid;
    });

    validFiles.forEach(file => {
      const reader = new FileReader();
      const fileId = Date.now() + Math.random();
      
      // Simulate upload progress
      setUploadProgress(prev => ({ ...prev, [fileId]: 0 }));
      
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          const currentProgress = prev[fileId] || 0;
          if (currentProgress >= 100) {
            clearInterval(progressInterval);
            return prev;
          }
          return { ...prev, [fileId]: Math.min(currentProgress + 10, 100) };
        });
      }, 100);

      reader.onload = (e) => {
        const newImage = {
          id: fileId,
          file,
          data_url: e.target.result,
          name: file.name,
          size: file.size
        };
        
        setImages(prev => [...prev, newImage]);
        
        // Clear progress after upload
        setTimeout(() => {
          setUploadProgress(prev => {
            const newProgress = { ...prev };
            delete newProgress[fileId];
            return newProgress;
          });
        }, 500);
      };
      
      reader.readAsDataURL(file);
    });
  }, []);

  // Handle drag and drop
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFileSelect(files);
  }, [handleFileSelect]);

  // Handle file input change
  const handleInputChange = (e) => {
    handleFileSelect(e.target.files);
  };

  // Remove image
  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  // Navigate to editor
  const handleContinue = () => {
    if (images.length > 0) {
      navigate('/uploaded-image', { 
        state: { 
          image: images[0],
          selectedTool,
          allImages: images
        } 
      });
    }
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Don't render if user is not loaded yet
  if (!user) {
    return null; // Just return null instead of loading message
  }

  return (
    <div className="get-started-container">
      {/* Floating particles for visual appeal */}
      <div className="floating-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
      
      <div className="get-started-content">
        {/* Header */}
        <div className="page-header">
          <button 
            onClick={() => navigate('/')}
            className="back-button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </button>
          
          <div className="header-content">
            <h1 className="page-title">Create Amazing Art</h1>
            <p className="page-description">
              Upload your photos and choose your preferred AI tool to get started
            </p>
          </div>
        </div>

        {/* Tool Selection */}
        <div className="tool-selection-section">
          <h2 className="section-title">Choose Your Tool</h2>
          <div className="tools-grid">
            {tools.map(tool => (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`tool-card ${selectedTool === tool.id ? 'selected' : ''}`}
              >
                {tool.popular && <div className="popular-badge">Popular</div>}
                <div className="tool-icon">{tool.icon}</div>
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>
                
                {/* Tool Features */}
                <div className="tool-features">
                  {tool.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                
                {selectedTool === tool.id && (
                  <div className="selected-indicator">
                    ✓
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Upload Section */}
        <div className="upload-section">
          <h2 className="upload-title">Upload Your Photos</h2>
          <p className="upload-subtitle">Choose your images to transform into amazing artwork</p>
          
          {/* Drop Zone */}
          <div 
            className={`upload-area ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleInputChange}
              style={{ display: 'none' }}
            />
            
            <div className="upload-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="7,10 12,5 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="5" x2="12" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {isDragging ? (
              <div>
                <h3 className="upload-text">Drop your images here!</h3>
                <p className="upload-hint">Release to upload your files</p>
              </div>
            ) : (
              <div>
                <h3 className="upload-text">Drag & drop your images here</h3>
                <p className="upload-hint">or click to browse files</p>
                <button className="browse-button" type="button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Browse Files
                </button>
                <div className="file-formats">
                  <p>Supports: JPG, PNG, WebP • Max size: 10MB</p>
                </div>
              </div>
            )}
          </div>

          {/* Image Preview Grid */}
          {images.length > 0 && (
            <div className="image-grid">
              {images.map(image => (
                <div key={image.id} className="image-item">
                  <img 
                    src={image.data_url} 
                    alt={image.name}
                    className="image-preview"
                  />
                  <div className="image-info">
                    <h4 className="image-name">{image.name}</h4>
                    <p className="image-size">{formatFileSize(image.size)}</p>
                  </div>
                  
                  {uploadProgress[image.id] !== undefined && (
                    <div className="progress-container">
                      <div 
                        className="progress-bar"
                        style={{ width: `${uploadProgress[image.id]}%` }}
                      />
                    </div>
                  )}
                  
                  <button
                    onClick={() => removeImage(image.id)}
                    className="remove-button"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Process Button */}
          <div className="process-section">
            <button
              onClick={handleContinue}
              disabled={images.length === 0}
              className="process-button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {images.length > 0 ? `Transform ${images.length} Image${images.length > 1 ? 's' : ''}` : 'Upload Images First'}
            </button>
            
            {images.length > 0 && (
              <div className="ready-status">
                <div className="status-icon">✨</div>
                <p>Ready to create amazing artwork with <strong>{tools.find(t => t.id === selectedTool)?.name}</strong></p>
                <div className="process-info">
                  <span>⏱️ Estimated time: 30-60 seconds</span>
                  <span>🎯 High quality results guaranteed</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tips Section */}
        <div className="tips-section">
          <p className="tips-inline">
            💡 <strong>Pro Tips:</strong> Use high resolution images (1000px+) with good lighting for best results
          </p>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;