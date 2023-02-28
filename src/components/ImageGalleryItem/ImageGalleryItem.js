import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

import { GalleryItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [largeImg, setLargeImg] = useState('');
  const [onShow, setOnShow] = useState(false);

  const largeImgModal = img => {
    setOnShow(prev => !prev);
    setLargeImg(img);
  };
  console.log(largeImg);
  return (
    <>
      <GalleryItem onClick={() => largeImgModal(largeImageURL)}>
        <Image src={webformatURL} alt="" />
      </GalleryItem>
      {onShow && <Modal onClose={largeImgModal} largeImg={largeImg} />}
    </>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
};

export default ImageGalleryItem;
