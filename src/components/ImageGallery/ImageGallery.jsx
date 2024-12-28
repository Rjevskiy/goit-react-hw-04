import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    images.length > 0 && ( // перевірка на зображеня
      <ul className="gallery">
        {images.map((image) => (
          <li key={image.id}>
            <div>
              <img src={image.urls.small} alt={image.alt_description} />
            </div>
          </li>
        ))}
      </ul>
    )
  );
};

export default ImageGallery;
