import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './UploadedImage.css';

function UploadedImage() {
  const location = useLocation();
  const image = location.state?.image;

  const [zoom, setZoom] = useState(100);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [rotate, setRotate] = useState(0);
  const [text, setText] = useState("");
  const [drawingMode, setDrawingMode] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (image) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      // Load image onto canvas
      const img = new Image();
      img.src = image['data_url'];  // Assuming image contains the image URL
      img.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear any existing content
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  }, [image]);

  const handleZoomIn = () => setZoom((prevZoom) => prevZoom + 10);
  const handleZoomOut = () => setZoom((prevZoom) => prevZoom - 10);
  const handleBrightnessChange = (e) => setBrightness(e.target.value);
  const handleContrastChange = (e) => setContrast(e.target.value);
  const handleSaturationChange = (e) => setSaturation(e.target.value);
  const handleRotate = (direction) => setRotate((prevRotate) => prevRotate + (direction === 'left' ? -90 : 90));

  const handleTextChange = (e) => setText(e.target.value);
  const handleToggleDrawing = () => setDrawingMode((prev) => !prev);

  const handleDraw = (e) => {
    if (!drawingMode) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    context.fillStyle = 'red';
    context.fillRect(x, y, 5, 5);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = 'edited_image.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  if (!image) {
    return <p>No image found</p>;
  }

  return (
    <div className="editor-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1>Image Editor Pro</h1>
        <ul>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Help</li>
        </ul>
      </nav>

      {/* Layout with Sidebars and Workspace */}
      <div className="editor-body">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          <h2>Tools</h2>
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
          <button onClick={() => handleRotate('left')}>Rotate Left</button>
          <button onClick={() => handleRotate('right')}>Rotate Right</button>
          <label>
            Brightness:
            <input type="range" min="0" max="200" value={brightness} onChange={handleBrightnessChange} />
          </label>
          <label>
            Contrast:
            <input type="range" min="0" max="200" value={contrast} onChange={handleContrastChange} />
          </label>
          <label>
            Saturation:
            <input type="range" min="0" max="200" value={saturation} onChange={handleSaturationChange} />
          </label>
          <button onClick={handleToggleDrawing}>
            {drawingMode ? 'Stop Drawing' : 'Start Drawing'}
          </button>
          
          {/* Move the Bottom Toolbar buttons here */}
          <button onClick={handleDownload}>Download Image</button>
          <button>Undo</button>
          <button>Redo</button>
          <button>Reset</button>
        </div>

        {/* Central Workspace */}
        <div className="workspace">
          <canvas
            ref={canvasRef}
            className="canvas"
            width="800"
            height="600"
            style={{
              transform: `
                scale(${zoom / 100})
                rotate(${rotate}deg)
              `,
              filter: `
                brightness(${brightness}%)
                contrast(${contrast}%)
                saturate(${saturation}%)
              `,
              border: '1px solid #ddd',
            }}
            onMouseDown={handleDraw}
          />
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          <h2>Advanced Tools</h2>
          <label>
            Add Text:
            <input type="text" value={text} onChange={handleTextChange} />
          </label>
          <button onClick={() => alert("Resize tool coming soon!")}>Resize Tool</button>
          <button onClick={() => alert("Crop tool coming soon!")}>Crop Tool</button>
        </div>
      </div>
    </div>
  );
}

export default UploadedImage;
