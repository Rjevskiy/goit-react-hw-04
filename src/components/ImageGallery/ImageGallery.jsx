import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard'; // Импортируем ImageCard

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
      id: PropTypes.string.isRequired, // ID изображения
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired, // Ссылка на миниатюру
        full: PropTypes.string.isRequired,  // Ссылка на полное изображение
      }).isRequired,
      alt_description: PropTypes.string, // Описание изображения
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired, // Обработчик клика
};

export default ImageGallery;

