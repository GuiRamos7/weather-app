import React from 'react';
import { Input as InputStyled } from './style';
const Input = ({ value, onChange }) => {
  return <InputStyled value={value} onChange={onChange} />;
};

export default Input;
