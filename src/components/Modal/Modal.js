import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { StyledlModal, Overlay } from './Modal.styled';

export const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const onOverlay = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={onOverlay}>
      <StyledlModal>
        <img src={image.largeUrl} alt={image.targetAlt} />
      </StyledlModal>
    </Overlay>,
    document.querySelector('#modalRoot')
  );
};

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
