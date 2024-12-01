import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function CropPage() {
  const [cropping, setCropping] = useState(false);
  const [cropArea, setCropArea] = useState(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const handleCropStart = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const startX = e.clientX - rect.left;
    const startY = e.clientY - rect.top;

    setCropping(true);
    setCropArea({ startX, startY, endX: startX, endY: startY });
  };

  const handleCropMove = (e) => {
    if (!cropping) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const endX = e.clientX - rect.left;
    const endY = e.clientY - rect.top;

    setCropArea((prev) => ({ ...prev, endX, endY }));
  };

  const handleCropEnd = () => {
    setCropping(false);
  };

  const handleApplyCrop = () => {
    if (!cropArea) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const { startX, startY, endX, endY } = cropArea;

    const width = Math.abs(endX - startX);
    const height = Math.abs(endY - startY);

    // Get the cropped image data
    const imageData = context.getImageData(
      Math.min(startX, endX),
      Math.min(startY, endY),
      width,
      height
    );

    // Clear canvas and draw the cropped area
    canvas.width = width;
    canvas.height = height;
    context.putImageData(imageData, 0, 0);

    setCropArea(null);
  };

  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Crop Image</h1>
      <canvas
        ref={canvasRef}
        width="800"
        height="600"
        style={{
          border: "1px solid #ddd",
          cursor: cropping ? "crosshair" : "default",
        }}
        onMouseDown={handleCropStart}
        onMouseMove={handleCropMove}
        onMouseUp={handleCropEnd}
      ></canvas>
      {cropArea && (
        <div
          style={{
            position: "absolute",
            border: "2px dashed red",
            pointerEvents: "none",
            left: `${Math.min(cropArea.startX, cropArea.endX)}px`,
            top: `${Math.min(cropArea.startY, cropArea.endY)}px`,
            width: `${Math.abs(cropArea.endX - cropArea.startX)}px`,
            height: `${Math.abs(cropArea.endY - cropArea.startY)}px`,
          }}
        ></div>
      )}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleApplyCrop}>Apply Crop</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default CropPage;
