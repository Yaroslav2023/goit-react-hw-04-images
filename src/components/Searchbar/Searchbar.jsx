import React, { useContext } from 'react';
import cl from './searchbar.module.css';
import { Context } from '../../context/imagesContext';

const Searchbar = () => {
  const { setSearchQuery, search, setSearch, setPage, setImages } =
    useContext(Context);

  const handleSubmitForm = e => {
    e.preventDefault();
    setImages([]);
    setPage(1);
    setSearchQuery(search);
  };

  return (
    <header className={cl.Searchbar}>
      <form className={cl.SearchForm} onSubmit={handleSubmitForm}>
        <button type="submit" className={cl.SearchFormButton}>
          <span className={cl.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={cl.SearchFormInput}
          type="text"
          value={search}
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={e => {
            setSearch(e.currentTarget.value);
          }}
        />
      </form>
    </header>
  );
};

export default Searchbar;
