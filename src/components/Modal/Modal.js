import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, LargeModal } from './Modal.styled';

import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ largeImg, onClose }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <LargeModal>
        <img src={largeImg} alt="" />
      </LargeModal>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  largeImg: PropTypes.string,
};
export default Modal;