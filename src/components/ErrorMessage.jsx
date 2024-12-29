// components/ErrorMessage/ErrorMessage.jsx
import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div style={{ color: 'red', fontSize: '38px', fontWeight: 'bold' }}>
          {`Схоже сталася якась помилка. ${message}`}
    </div>
  );
}

export default ErrorMessage;
