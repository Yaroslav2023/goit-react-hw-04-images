import React, { Component } from 'react';
import cl from './searchbar.module.css';
// import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleinput = e => {
    this.setState({ searchQuery: e.target.value });
  };

  searchSubmit = e => {
    e.preventDefault();
    return this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <header className={cl.Searchbar}>
        <form className={cl.SearchForm} onSubmit={this.searchSubmit}>
          <button type="submit" className={cl.SearchFormButton}>
            <span className={cl.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={cl.SearchFormInput}
            type="text"
            value={this.state.searchQuery}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleinput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
