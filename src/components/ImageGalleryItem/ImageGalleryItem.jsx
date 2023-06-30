import { GalleryItems } from "./ImageGalleryItem.styled";
export const ImageGalleryItem = ({images}) => {
  return (
    images.map((image) => (
      <GalleryItems key={image.id}>
        <img src={image.webformatURL} alt={image.tags}/>
      </GalleryItems>
    ))
  );
};
