import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './style';

const Button = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  children: '',
  onClick: () => {},
};

export default Button;
