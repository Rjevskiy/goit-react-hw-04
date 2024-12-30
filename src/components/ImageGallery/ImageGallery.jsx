import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard'; 

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="gallery">
      {images.map((image) => (
        <li key={image.id} onClick={() => onImageClick(image.urls.full)}>
          <ImageCard src={image.urls.small} alt={image.alt_description || 'Image'} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired, // миниатюра
        full: PropTypes.string.isRequired,  // полное изображение
      }).isRequired,
      alt_description: PropTypes.string,  
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired, // обработчик клика
};

export default ImageGallery;

