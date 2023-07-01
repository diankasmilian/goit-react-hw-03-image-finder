import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery, GalleryContainer } from './ImageGallery.styled';

export const ImageGallery = ({ images, openModal, children }) => {
  return (
    <GalleryContainer>
      <Gallery>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            tags={image.tags}
            imageModal={image.largeImageURL}
            openModal={openModal}
          />
        ))}
      </Gallery>
      {children}
    </GalleryContainer>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      pageURL: PropTypes.string,
      type: PropTypes.string,
      previewURL: PropTypes.string,
      previewWidth: PropTypes.number,
      previewHeight: PropTypes.number,
      webformatWidth: PropTypes.number,
      webformatHeight: PropTypes.number,
      fullHDURL: PropTypes.string,
      imageURL: PropTypes.string,
      imageWidth: PropTypes.number,
      imageHeight: PropTypes.number,
      imageSize: PropTypes.number,
      views: PropTypes.number,
      downloads: PropTypes.number,
      collections: PropTypes.number,
      likes: PropTypes.number,
      comments: PropTypes.number,
      user_id: PropTypes.number,
      user: PropTypes.string,
      userImageURL: PropTypes.string,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};
