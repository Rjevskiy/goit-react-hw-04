// components/ErrorMessage/ErrorMessage.jsx
import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div style={{ color: 'red', fontSize: '18px', fontWeight: 'bold' }}>
      {message}
    </div>
  );
}

export default ErrorMessage;
