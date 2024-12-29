import React from 'react';
import Modal from 'react-modal';

import './ImageModal.css';

// Устанавливаем корневой элемент для модального окна
Modal.setAppElement('#app');

function ImageModal({ isOpen, image, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-container">
        <img src={image} alt="Full size" className="modal-image" />
      </div>
    </Modal>
  );
}

export default ImageModal;


