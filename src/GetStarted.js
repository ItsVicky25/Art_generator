import React, { useState } from 'react';

function GetStarted() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Image file validation
  const validateImage = (file) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      setError('Invalid file type. Only JPG and PNG are allowed.');
      return false;
    }

    if (file.size > maxSize) {
      setError('File size exceeds 5MB.');
      return false;
    }

    setError('');
    return true;
  };

  // Handle file selection through input
  const handleFileChange = (e) => {
    const files = e.target.files;
    const newImages = [];
    let valid = true;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (validateImage(file)) {
        newImages.push(URL.createObjectURL(file)); // Add image preview
      } else {
        valid = false;
      }
    }

    if (valid) {
      setImages([...images, ...newImages]);
    }
  };

  // Handle file drag-and-drop
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const newImages = [];
    let valid = true;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (validateImage(file)) {
        newImages.push(URL.createObjectURL(file)); // Add image preview
      } else {
        valid = false;
      }
    }

    if (valid) {
      setImages([...images, ...newImages]);
    }
  };

  // Handle file drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Remove an image from the preview
  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Upload functionality (simulate progress)
  const handleUpload = () => {
    setUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress === 100) {
        clearInterval(interval);
        setUploading(false);
        alert('Images uploaded successfully!');
        setImages([]); // Clear images after upload
      }
    }, 200);
  };

  return (
    <div className="get-started" style={{ padding: '20px' }}>
      <h1>Upload Personal Photos</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div
        className="upload-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        <p>Drag & Drop your images here or click to select</p>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="fileInput"
        />
        <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
          <button>Browse Files</button>
        </label>
      </div>

      <div className="image-preview" style={{ marginTop: '20px' }}>
        {images.length > 0 && (
          <div>
            <h3>Preview</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {images.map((image, index) => (
                <div key={index} style={{ margin: '10px', position: 'relative' }}>
                  <img
                    src={image}
                    alt={`Uploaded preview ${index}`}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                    }}
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    style={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        {uploading ? (
          <div>
            <p>Uploading...</p>
            <progress max="100" value={uploadProgress} style={{ width: '100%' }}></progress>
          </div>
        ) : (
          <button onClick={handleUpload} disabled={images.length === 0}>
            Upload Images
          </button>
        )}
      </div>
    </div>
  );
}

export default GetStarted;
