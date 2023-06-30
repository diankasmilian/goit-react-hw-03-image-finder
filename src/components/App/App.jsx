import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  toggleModal = (largeImage) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImage: largeImage,
    }))
  }

  handleFormSubmit = value => {
    this.setState({ value: value });
  };

  handleLoadMore = (e) => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  searchImage = async (value, page) => {
    this.setState({ status: 'pending' });
    try {
      const data = await API.getImage(value, page);
      const hits = data.hits;
      const total = data.total;

      if (total === 0) {
        return this.setState({
          error: '😥OOPS... undefined image',
          status: 'rejected',
        });
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        total: total,
        status: 'resolved',
      }));
    } catch (error) {
      this.setState({ error: error.message, status: 'rejected' });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      this.searchImage(this.state.value, this.state.page);
    }
  }

  render() {
    const { status, error, images, page, total, showModal, largeImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && ''}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <ErrorTitle message={error} />}
        {status === 'resolved' && (
          <ImageGallery images={images} toggleModal={this.toggleModal}>
            {page < Math.ceil(total / 12) ? (
              <LoadMore handleLoadMore={this.handleLoadMore} />
            ) : (
              ''
            )}
          </ImageGallery>
        )}
        {showModal && <Modal image={largeImage}/>}
        

        <ToastContainer position="top-center" autoClose={2000} />
      </>
    );
  }
}
