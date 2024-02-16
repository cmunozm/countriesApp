import Dropdown from '../dropdown/Dropdown';
import Search from '../search/Search';

type FiltersProps = {
  regions: string[];
  onChangeRegion: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeCountry: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Filters = ({
  regions,
  onChangeRegion,
  onChangeCountry,
}: FiltersProps) => {
  return (
    <section className='filters'>
      <Search onChangeCountry={onChangeCountry} />
      <Dropdown
        options={regions}
        firstOption='Filter by Region'
        onChangeRegion={onChangeRegion}
      />
    </section>
  );
};

export default Filters;
