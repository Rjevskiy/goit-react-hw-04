import React from 'react';
import PropTypes from 'prop-types'; // Для валидации пропсов

function ImageCard({ src, alt }) {
  return (
    <div className="image-card">
      <img src={src} alt={alt} />
    </div>
  );
}

ImageCard.propTypes = {
  src: PropTypes.string.isRequired, // URL изображения (обязательный)
  alt: PropTypes.string.isRequired, // Альтернативный текст (обязательный)
};

export default ImageCard;
