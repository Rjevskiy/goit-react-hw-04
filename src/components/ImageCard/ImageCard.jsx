import React from 'react';
import PropTypes from 'prop-types';

function ImageCard({ src, alt, onClick }) {
  return (
    <div className="image-card">
      <img
        src={src}
        alt={alt || 'Изображение'} 
        onClick={onClick} 
        style={{ cursor: 'pointer' }} 
      />
    </div>
  );
}

ImageCard.propTypes = {
  src: PropTypes.string.isRequired, 
  alt: PropTypes.string, 
  onClick: PropTypes.func.isRequired, 
};

export default ImageCard;

