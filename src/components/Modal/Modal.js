import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, LargeModal } from './Modal.styled';

import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
      console.log('закрытие Escape');
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <LargeModal>
          <img src={this.props.largeImg} alt="" />
        </LargeModal>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
};
