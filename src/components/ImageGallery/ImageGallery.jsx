import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery, GalleryContainer } from './ImageGallery.styled';

export const ImageGallery = ({ images, toggleModal, children }) => {
  return (
    <GalleryContainer>
      <Gallery>
        {images.map(image => (
          <ImageGalleryItem key={image.id}
          id={image.id}
          src={image.webformatURL}
          tags={image.tags}
          imageModal={image.largeImageURL}
          toggleModal={toggleModal}/>
        ))}
      </Gallery>
      {children}
    </GalleryContainer>
  );
};
