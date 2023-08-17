import React from 'react';
import cl from './app.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export const App = () => {
  return (
    <div className={cl.App}>
      <Searchbar />
      <ImageGallery />
    </div>
  );
};
