import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoadMore } from 'components/Button/Button';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { ErrorTitle } from 'components/ErrorTitle/ErrorTitle';
import * as API from '../../services/image-api';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    value: null,
    images: [],
    total: 0,
    error: null,
    page: 1,
    showModal: false,
    largeImage: '',
    loader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      this.searchImage(this.state.value, this.state.page);
    }
  }

  onOpenModal = largeImage => {
    this.setState({
      showModal: true,
      largeImage: largeImage,
    });
  };

  onCloseModal = () => {
    this.setState({
      showModal: false,
      largeImage: '',
    });
  };

  handleFormSubmit = value => {
    this.setState({ value: value, page: 1, images: [] });
  };

  handleLoadMore = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  searchImage = async (value, page) => {
    this.setState({ loader: true });
    try {
      const { hits, totalHits } = await API.getImage(value, page);

      if (hits.length === 0) {
        return this.setState({
          error: '😥OOPS... undefined image',
          loader: false,
        });
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        total: totalHits,
        error: null,
        loader: false,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { loader, error, images, page, total, showModal, largeImage } =
      this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loader && <Loader />}
        {error && <ErrorTitle message={error} />}
        {images.length !== 0 && (
          <>
            <ImageGallery images={images} openModal={this.onOpenModal} />
            {page < Math.ceil(total / 12) && (
              <LoadMore handleLoadMore={this.handleLoadMore} />
            )}
          </>
        )}
        {showModal && (
          <Modal image={largeImage} onCloseModal={this.onCloseModal} />
        )}

        <ToastContainer position="top-center" autoClose={2000} />
      </Container>
    );
  }
}
