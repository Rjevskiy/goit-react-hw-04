import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard'; // Импортируем ImageCard

function ImageGallery({ images }) {
  return (
    <ul className="gallery">
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard src={image.urls.small} alt={image.alt_description || 'Image'} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // ID изображения
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired, // Ссылка на изображение
      }).isRequired,
      alt_description: PropTypes.string, // Описание изображения
    })
  ).isRequired,
};

export default ImageGallery;
