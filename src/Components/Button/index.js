import React from 'react';
import './index.css';

function CustomButton({ children }) {
  return (
    <button className='custom-btn'>
      {children}
    </button>
  );
}

export default CustomButton;
