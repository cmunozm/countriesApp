type DropdownProps = {
  options: string[];
};

const Dropdown = ({ options }: DropdownProps) => {
  return (
    <select className='dropdown'>
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
