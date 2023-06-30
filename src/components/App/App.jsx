import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css' ; 
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { ErrorTitle } from 'components/ErrorTitle/ErrorTitle';
import imageAPI from '../../services/image-api';

export class App extends Component {
  state = {
    value: null,
    images: null,
    error: null,
    status: 'idle',
  };

  handleFormSubmit = value => {
    this.setState({ value: value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({ status: 'pending' });
      imageAPI
        .fetchImage(this.state.value)
        .then(image =>
          this.setState({
            images: image,
            status: 'resolved',
          })
        )
        .catch(error => this.setState({ error, status: 'rejected' }))
    }
  }

  render() {
    const { status, error, images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && ''}
        {status === 'pending' && <Loader />}
        {status === 'rejected' &&  <ErrorTitle message={error.message}/>}
        {status === 'resolved' && <ImageGallery images={images}/>}

        <ToastContainer
          position="top-center"
          autoClose={2000}
          
        />
      </>
    );
  }
}
