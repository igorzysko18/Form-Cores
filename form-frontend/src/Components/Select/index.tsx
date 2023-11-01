import React, { ChangeEvent } from 'react';
import { SelectCustomizado } from './styles';

interface SelectProps {
  name: string;
  options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ name, options, onChange }) => {
  return (
    <SelectCustomizado name={name} onChange={onChange}>
      <option value="">Selecione a sua cor preferida</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </SelectCustomizado>
  );
}

export default Select;
