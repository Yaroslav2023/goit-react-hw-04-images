import React, { Component } from 'react';
import cl from './app.module.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handleChangeSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div className={cl.App}>
        <Searchbar onSubmit={this.handleChangeSearchQuery} />
        <ImageGallery searchQuery={this.state.searchQuery} />
      </div>
    );
  }
}
