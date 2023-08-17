import React, { useContext } from 'react';
import cl from './imageGalleryItem.module.css';
import { Context } from '../../context/imagesContext';

const ImageGalleryItem = () => {
  const { images, setShowModal, setLargeImage } = useContext(Context);

  const handleImageClick = largeImageURL => {
    setLargeImage(largeImageURL);
    setShowModal(true);
  };

  return images.map(({ id, webformatURL, largeImageURL }) => {
    return (
      <li key={id} className={cl.ImageGalleryItem}>
        <img
          className={cl.ImageGalleryItemImage}
          src={webformatURL}
          alt=""
          onClick={() => {
            handleImageClick(largeImageURL);
          }}
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
