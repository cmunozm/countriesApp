import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Icon from '../icon/Icon';

const Search = () => {
  const [country, setCountry] = useState('');
  return (
    <span className='search'>
      <Icon className='search__icon' icon={faSearch} />
      <input
        type='text'
        className='search__input'
        value={country}
        placeholder='Search for a country...'
        onChange={(e) => setCountry(e.target.value)}
      />
    </span>
  );
};

export default Search;
