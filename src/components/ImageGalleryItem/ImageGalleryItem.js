import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

import { GalleryItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    largeImg: '',
    onShow: false,
  };

  largeImgModal = img => {
    this.setState(state => ({ onShow: !state.onShow }));
    this.setState({ largeImg: img });
  };

  render() {
    const { webformatURL, id, largeImageURL } = this.props;
    return (
      <>
        <GalleryItem key={id} onClick={() => this.largeImgModal(largeImageURL)}>
          <Image src={webformatURL} alt="" />
        </GalleryItem>
        {this.state.onShow && (
          <Modal onClose={this.largeImgModal} largeImg={this.state.largeImg} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onShow: PropTypes.bool,
  largeImg: PropTypes.string,
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
};
