// src/GetStarted.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import './GetStarted.css';

function GetStarted() {
  const [images, setImages] = useState([]);
  const maxNumber = 5;
  const navigate = useNavigate();

  const onChange = (imageList) => {
    setImages(imageList);

    // Automatically navigate to the next page if an image is uploaded
    if (imageList.length > 0) {
      navigate('/uploaded-image', { state: { image: imageList[0] } });
    }
  };

  return (
    <div className="get-started">
      <h1>Upload Personal Photos</h1>

      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageRemove,
        }) => (
          <div className="upload-section">
            <div className="upload-buttons">
              <button onClick={onImageUpload} className="upload-button">
                <i className="fas fa-upload icon"></i> Upload Image
              </button>
              <button
                onClick={onImageRemoveAll}
                className="remove-all-button"
              >
                Remove All
              </button>
            </div>

            <div className="image-preview">
              {imageList.length > 0 ? (
                imageList.map((image, index) => (
                  <div key={index} className="image-container">
                    <img
                      src={image['data_url']}
                      alt={`Uploaded preview ${index}`}
                    />
                    <button
                      onClick={() => onImageRemove(index)}
                      className="remove-button"
                    >
                      <i className="fas fa-times icon"></i>
                    </button>
                  </div>
                ))
              ) : (
                <p className="no-images-text">No images uploaded yet</p>
              )}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default GetStarted;
