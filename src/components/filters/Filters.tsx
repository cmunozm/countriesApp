import Dropdown from '../dropdown/Dropdown';
import Search from '../search/Search';

type FiltersProps = {
  regions: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Filters = ({ regions, onChange }: FiltersProps) => {
  return (
    <section className='filters'>
      <Search />
      <Dropdown
        options={regions}
        firstOption='Filter by Region'
        onChange={onChange}
      />
    </section>
  );
};

export default Filters;
