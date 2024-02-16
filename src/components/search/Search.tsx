import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';

type SearchProps = {
  onChangeCountry: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ onChangeCountry }: SearchProps) => {
  return (
    <span className='search'>
      <Icon className='search__icon' icon={faSearch} />
      <input
        type='text'
        className='search__input'
        placeholder='Search for a country...'
        onChange={onChangeCountry}
      />
    </span>
  );
};

export default Search;
