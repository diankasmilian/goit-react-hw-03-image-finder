import PropTypes from 'prop-types';
import { GalleryItems } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, tags, imageModal, openModal }) => {
  const onClick = () => {
    openModal(imageModal);
  };

  return (
    <GalleryItems onClick={onClick}>
      <img src={src} alt={tags} />
    </GalleryItems>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  imageModal: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
