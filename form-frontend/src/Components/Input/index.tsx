import React from 'react';
import { InputCustomizado } from './styles';

interface InputProps {
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  onChange,
  type,
  value
}) => {
  return ( 
    <InputCustomizado
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
}

export default Input;
