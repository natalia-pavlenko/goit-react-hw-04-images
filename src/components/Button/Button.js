import React from 'react';
import PropTypes from 'prop-types';
import {LoadBtn
} from './Button.styled'
const Button = ({ onClick }) => {
  return (
    <LoadBtn type="submit" onClick={onClick}>
      Load more
    </LoadBtn>
  );
};
export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
