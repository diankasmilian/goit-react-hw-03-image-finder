import PropTypes from 'prop-types';
import { GalleryItems } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  src,
  tags,
  imageModal,
  toggleModal,
}) => {
  const onClick = () => {
    toggleModal(imageModal);
  };

  return (
    <GalleryItems key={id} onClick={onClick}>
      <img src={src} alt={tags} />
    </GalleryItems>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  imageModal: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
