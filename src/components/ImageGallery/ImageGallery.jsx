import React, { useContext } from 'react';
import cl from './imageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import { getImages } from 'api/search.images';
import Button from '../Button';
import Loader from '../Loader';
import Modal from '../Modal';
import { Context } from '../../context/imagesContext';

const ImageGallery = () => {
  const { isLoading, totalImages, showModal } = useContext(Context);

  return (
    <div>
      <ul className={cl.ImageGallery}>
        <ImageGalleryItem />
      </ul>
      {isLoading && <Loader />}
      {totalImages === 12 && <Button />}
      {showModal && <Modal />}
    </div>
  );
};

export default ImageGallery;
