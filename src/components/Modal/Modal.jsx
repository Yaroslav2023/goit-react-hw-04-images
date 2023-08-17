import React, { useContext, useEffect } from 'react';
import cl from './modal.module.css';
import { Context } from '../../context/imagesContext';

const Modal = () => {
  const { largeImage, setLargeImage, setShowModal } = useContext(Context);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setLargeImage('');
        setShowModal(false);
      }
      return;
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowModal, setLargeImage]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setLargeImage('');
      setShowModal(false);
    }
  };

  return (
    <div className={cl.Overlay} onClick={handleBackdropClick}>
      <div className={cl.Modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};

export default Modal;
