import React from 'react';
import cl from './imageGalleryItem.module.css';
// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageUrl, onClick }) => {
  return (
    <li className={cl.ImageGalleryItem}>
      <img
        className={cl.ImageGalleryItemImage}
        src={imageUrl}
        alt=""
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
