import React from 'react';
import PropTypes from 'prop-types';

import { Input as InputStyled } from './style';
const Input = ({ value, onChange }) => {
  return <InputStyled value={value} onChange={onChange} />;
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  onChange: () => {},
};

export default Input;
