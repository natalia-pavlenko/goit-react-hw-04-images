import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled';

const ImageGallery = ({ gallery }) => {
  return (
    <GalleryList>
      {gallery &&
        gallery.map(img => (
          <ImageGalleryItem
            key={img.id}
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
