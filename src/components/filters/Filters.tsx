import Dropdown from '../dropdown/Dropdown';
import Search from '../search/Search';

const Filters = () => {
  return (
    <section className='filters'>
      <Search />
      <Dropdown options={[]} />
    </section>
  );
};

export default Filters;
