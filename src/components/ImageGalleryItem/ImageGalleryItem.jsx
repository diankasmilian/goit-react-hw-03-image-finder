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
