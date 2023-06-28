import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { Component } from 'react';

export class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
      </>
    );
  }
}
