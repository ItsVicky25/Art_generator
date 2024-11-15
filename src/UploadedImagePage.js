/* eslint-disable no-dupe-keys */
// src/UploadedImage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './UploadedImage.css';

function UploadedImage() {
  const location = useLocation();
  const image = location.state?.image; // Get the image passed from the previous page

  const [zoom, setZoom] = useState(100);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [rotate, setRotate] = useState(0);
  const [isFlippedHorizontal, setIsFlippedHorizontal] = useState(false);
  const [isFlippedVertical, setIsFlippedVertical] = useState(false);
  const [grayscale, setGrayscale] = useState(0);
  const [invert, setInvert] = useState(0);
  const [blur, setBlur] = useState(0);
  const [sepia, setSepia] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const [imageUrl, setImageUrl] = useState(image?.data_url);
  const [isBackgroundRemoved, setIsBackgroundRemoved] = useState(false);

  if (!image) {
    return <p>No image found</p>;
  }

  // Handlers for editing functionalities
  const handleZoomIn = () => setZoom(zoom + 10);
  const handleZoomOut = () => setZoom(zoom - 10);
  const handleFlipHorizontal = () => setIsFlippedHorizontal(!isFlippedHorizontal);
  const handleFlipVertical = () => setIsFlippedVertical(!isFlippedVertical);

  const handleBrightnessChange = (e) => setBrightness(e.target.value);
  const handleContrastChange = (e) => setContrast(e.target.value);
  const handleSaturationChange = (e) => setSaturation(e.target.value);
  const handleGrayscaleChange = (e) => setGrayscale(e.target.value);
  const handleInvertChange = (e) => setInvert(e.target.value);
  const handleBlurChange = (e) => setBlur(e.target.value);
  const handleSepiaChange = (e) => setSepia(e.target.value);
  const handleOpacityChange = (e) => setOpacity(e.target.value);
  const handleRotate = (direction) => setRotate(rotate + (direction === 'left' ? -90 : 90));

  // Function to remove the image background
  const handleRemoveBackground = async () => {
    try {
      const formData = new FormData();
      formData.append("image_file", imageUrl); // For image URL or file, choose accordingly
      formData.append("image_url", imageUrl); // If you want to pass a URL directly

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.removal.ai/3.0/remove", true);
      xhr.setRequestHeader("Rm-Token", "Your Token"); // Replace with your actual API token

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          if (response?.result?.image_url) {
            setImageUrl(response.result.image_url); // Set the image URL from the API response
            setIsBackgroundRemoved(true);
          } else {
            alert("Background removal failed!");
          }
        } else if (xhr.readyState === 4) {
          alert("Error with background removal!");
        }
      };

      xhr.send(formData); // Send the form data to the API
    } catch (error) {
      console.error('Error removing background:', error);
      alert('Error removing background!');
    }
  };

  return (
    <div className="uploaded-image-container">
      {/* Sidebar with Editing Tools */}
      <div className="sidebar">
        <h2>Image Tools</h2>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={() => handleRotate('left')}>Rotate Left</button>
        <button onClick={() => handleRotate('right')}>Rotate Right</button>
        <button onClick={handleFlipHorizontal}>Flip Horizontal</button>
        <button onClick={handleFlipVertical}>Flip Vertical</button>

        {/* Sliders for Adjustments */}
        <div>
          <label>Brightness:</label>
          <input type="range" min="0" max="200" value={brightness} onChange={handleBrightnessChange} />
        </div>
        <div>
          <label>Contrast:</label>
          <input type="range" min="0" max="200" value={contrast} onChange={handleContrastChange} />
        </div>
        <div>
          <label>Saturation:</label>
          <input type="range" min="0" max="200" value={saturation} onChange={handleSaturationChange} />
        </div>
        <div>
          <label>Grayscale:</label>
          <input type="range" min="0" max="100" value={grayscale} onChange={handleGrayscaleChange} />
        </div>
        <div>
          <label>Invert:</label>
          <input type="range" min="0" max="100" value={invert} onChange={handleInvertChange} />
        </div>
        <div>
          <label>Blur:</label>
          <input type="range" min="0" max="10" value={blur} onChange={handleBlurChange} />
        </div>
        <div>
          <label>Sepia:</label>
          <input type="range" min="0" max="100" value={sepia} onChange={handleSepiaChange} />
        </div>
        <div>
          <label>Opacity:</label>
          <input type="range" min="0" max="100" value={opacity} onChange={handleOpacityChange} />
        </div>

        {/* Background Removal Button */}
        <button onClick={handleRemoveBackground}>
          {isBackgroundRemoved ? 'Background Removed' : 'Remove Background'}
        </button>

        <button>Export</button>
      </div>

      {/* Main Content Area */}
      <div className="content-area">
        <div
          className="image-container"
          style={{
            transform: `scale(${zoom / 100}) rotate(${rotate}deg)`,
            filter: `
              brightness(${brightness}%) 
              contrast(${contrast}%) 
              saturate(${saturation}%) 
              grayscale(${grayscale}%) 
              invert(${invert}%) 
              blur(${blur}px) 
              sepia(${sepia}%) 
              opacity(${opacity}%)
            `,
            transform: `
              scale(${zoom / 100}) 
              rotate(${rotate}deg)
              ${isFlippedHorizontal ? 'scaleX(-1)' : ''} 
              ${isFlippedVertical ? 'scaleY(-1)' : ''}
            `,
          }}
        >
          <img src={imageUrl} alt="Uploaded" />
        </div>
      </div>
    </div>
  );
}

export default UploadedImage;
