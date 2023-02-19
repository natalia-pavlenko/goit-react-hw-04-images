import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled';

const ImageGallery = ({ gallery }) => {
  return (
    <GalleryList>
      {gallery.map(img => (
        <ImageGalleryItem
          webformatURL={img.webformatURL}
          id={img.id}
          largeImageURL={img.largeImageURL}
        />
      ))}
    </GalleryList>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
};
