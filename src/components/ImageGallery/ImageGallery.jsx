import React from 'react';
import cl from './imageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import { getImages } from 'api/search.images';
import Button from '../Button';
import Loader from '../Loader';
import Modal from '../Modal';
// import PropTypes from 'prop-types';

class ImageGallery extends React.Component {
  state = {
    images: [],
    page: 1,
    perPage: 12,
    isLoading: false,
    totalImages: 0,
    showModal: false,
    largeImage: '',
  };

  async componentDidMount() {}

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      const data = await getImages({
        searchQuery: this.props.searchQuery,
        page: 1,
        perPage: this.state.perPage,
      });
      this.setState({
        images: data.hits,
        totalImages: data.hits.length,
        page: 1,
      });
    }
  }

  loadMoreImgs = async () => {
    this.setState({ isLoading: true });
    const data = await getImages({
      searchQuery: this.props.searchQuery,
      page: this.state.page + 1,
      perPage: this.state.perPage,
    });
    this.setState(prevState => ({
      images: [...prevState.images, ...data.hits],
      page: prevState.page + 1,
      isLoading: false,
      totalImages: data.hits.length,
    }));
  };

  handleImageClick = largeImageURL => {
    this.setState({ largeImage: largeImageURL, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ largeImage: '', showModal: false });
  };

  render() {
    return (
      <div>
        <ul className={cl.ImageGallery}>
          {this.state.images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              imageUrl={webformatURL}
              onClick={() => this.handleImageClick(largeImageURL)}
            />
          ))}
        </ul>
        {this.state.isLoading && <Loader />}
        {this.state.totalImages === 12 && (
          <Button onClick={this.loadMoreImgs} />
        )}
        {this.state.showModal && (
          <Modal
            largeImageURL={this.state.largeImage}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default ImageGallery;
