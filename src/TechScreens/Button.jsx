import React from 'react';
import "./Button.css";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className='button-from-tech-screen'>
      {text}<div></div>
    </button>
  );
};

export default Button;

