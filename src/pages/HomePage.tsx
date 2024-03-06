import { useEffect, useState } from 'react';
import CardList from '../components/cardList/CardList';
import Filters from '../components/filters/Filters';
import Pagination from '../components/pagination/Pagination';
import { CountriesAdapter } from '../infrastructure/apiTypes';
import useCountries from '../infrastructure/useCountries';

function HomePage() {
  const { loading, countries, getRegions, getByRegion, getByCountry } =
    useCountries();
  const regions = getRegions();
  const [cards, setCards] = useState<CountriesAdapter[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const countriesPerPage = 16;

  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;
  const currentCountries = cards.slice(firstIndex, lastIndex);

  const handleChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchPattern = event.target.value;
    if (searchPattern !== '') {
      setCards(getByCountry(searchPattern));
    } else {
      setCards(countries);
    }
  };

  useEffect(() => {
    if (!loading) {
      setCards(countries);
    }
  }, [loading]);

  const handleChangeRegion = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setCards(getByRegion(target.value));
  };

  const handleOnChangePage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Filters
        regions={regions.sort()}
        onChangeRegion={handleChangeRegion}
        onChangeCountry={handleChangeCountry}
      />
      {loading ? (
        <div className='loading'>
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <CardList cards={currentCountries} />
          <Pagination
            totalPages={Math.round(cards.length / countriesPerPage)}
            onChangePage={handleOnChangePage}
          />
        </>
      )}
    </>
  );
}

export default HomePage;
