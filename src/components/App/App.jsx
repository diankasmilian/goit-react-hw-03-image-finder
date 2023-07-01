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
    status: 'idle',
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
    })
  }

  // toggleModal = largeImage => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //     largeImage: largeImage,
  //   }));
  // };

  handleFormSubmit = value => {
    this.setState({ value: value, page: 1, images: [] });
  };

  handleLoadMore = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  searchImage = async (value, page) => {
    this.setState({ status: 'pending' });
    try {
      const { hits, totalHits } = await API.getImage(value, page);

      if (hits.length === 0) {
        return this.setState({
          error: '😥OOPS... undefined image',
          status: 'rejected',
        });
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        total: totalHits,
        status: 'resolved',
      }));
    } catch (error) {
      this.setState({ error: error.message, status: 'rejected' });
    }
  };

  render() {
    const { status, error, images, page, total, showModal, largeImage } =
      this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && ''}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <ErrorTitle message={error} />}
        {status === 'resolved' && (
          <>
            <ImageGallery images={images} openModal={this.onOpenModal} />
            {page < Math.ceil(total / 12) && (
              <LoadMore handleLoadMore={this.handleLoadMore} />
            )}
          </>
        )}
        {showModal && <Modal image={largeImage} onCloseModal={this.onCloseModal} />}

        <ToastContainer position="top-center" autoClose={2000} />
      </Container>
    );
  }
}
