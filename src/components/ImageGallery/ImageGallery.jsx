import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.length === 0 ? (
        <p>Немає зображень для відображення</p>
      ) : (
        <div className="gallery">
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.urls.small} alt={image.alt_description} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
