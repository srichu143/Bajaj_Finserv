import React from 'react';
import Select from 'react-select';
import './index.css'; // Import the CSS file

const options = [
  { value: 'Alphabets', label: 'Alphabets' },
  { value: 'Numbers', label: 'Numbers' },
  { value: 'Highest Alphabet', label: 'Highest Alphabet' },
];

function Dropdown({ onChange }) {
  const handleChange = (selected) => {
    onChange(selected.map(option => option.value));
  };

  return (
    <Select
      isMulti
      name="options"
      options={options}
      className="dropdown-select"
      classNamePrefix="select"
      onChange={handleChange}
    />
  );
}

export default Dropdown;
