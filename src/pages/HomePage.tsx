import { useEffect, useState } from 'react';
import CardList from '../components/cardList/CardList';
import Filters from '../components/filters/Filters';
import { CountriesAdapter } from '../infrastructure/apiTypes';
import useCountries from '../infrastructure/useCountries';

function HomePage() {
  const { loading, countries, getRegions, getByRegion, getByCountry } =
    useCountries();
  const regions = getRegions();
  const [cards, setCards] = useState<CountriesAdapter[]>([]);

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
        <CardList cards={cards} />
      )}
    </>
  );
}

export default HomePage;
