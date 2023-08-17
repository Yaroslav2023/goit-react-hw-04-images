import React, { useContext } from 'react';
import cl from './button.module.css';
import { Context } from '../../context/imagesContext';

const Button = () => {
  const { loadMoreImgs } = useContext(Context);
  return (
    <button type="button" className={cl.Button} onClick={loadMoreImgs}>
      Load more
    </button>
  );
};

export default Button;
