import React from 'react';

type DropdownProps = {
  options: string[];
  firstOption: string;
  onChangeRegion: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Dropdown = ({ options, firstOption, onChangeRegion }: DropdownProps) => {
  return (
    <select className='dropdown' onChange={onChangeRegion} aria-label='Region'>
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
