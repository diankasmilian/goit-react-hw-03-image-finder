
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery, GalleryContainer } from './ImageGallery.styled';

export const ImageGallery = ({ images, children }) => {
  return (
    <GalleryContainer>
      <Gallery>
        <ImageGalleryItem images={images} />
      </Gallery>
      {children}
    </GalleryContainer>
      
  );
};
