import React from 'react';
import PropTypes from 'prop-types'; 

function ImageCard({ src }) {
  return (
    <div className="image-card">
      <img src={src}  />
    </div>
  );
}

ImageCard.propTypes = {
  src: PropTypes.string.isRequired, };

export default ImageCard;
