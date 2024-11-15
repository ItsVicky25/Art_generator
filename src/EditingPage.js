import React from 'react';
import { useLocation } from 'react-router-dom';
import './EditingPage.css';

function EditingPage() {
  const location = useLocation();
  const images = location.state?.images || [];

  return (
    <div className="editing-page">
      <h1>Editing Page</h1>
      {images.length > 0 ? (
        <div className="image-gallery">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image['data_url']} alt={`Uploaded item ${index + 1}`} />

              {/* Add further editing controls or features here */}
            </div>
          ))}
        </div>
      ) : (
        <p>No images to edit. Please go back and upload images.</p>
      )}
    </div>
  );
}

export default EditingPage;
