import React from 'react';
import cl from './button.module.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" className={cl.Button} onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
