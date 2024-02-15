import React from 'react';

type DropdownProps = {
  options: string[];
  firstOption: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Dropdown = ({ options, firstOption, onChange }: DropdownProps) => {
  return (
    <select className='dropdown' onChange={onChange}>
      <option value='all'>{firstOption}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
