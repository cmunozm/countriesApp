import { useContext, useEffect, useState } from 'react';
import { themeContext } from '../infrastructure/themeContext';

import CardList from '../components/cardList/CardList';
import Filters from '../components/filters/Filters';
import { CountriesAPI } from '../infrastructure/apiTypes';
import useCountries from '../infrastructure/useCountries';

function HomePage() {
  const { theme } = useContext(themeContext);
  const { loading, countries, getRegions, getByRegion, getByCountry } =
    useCountries();
  const regions = getRegions();
  const [cards, setCards] = useState<CountriesAPI[]>([]);

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
      <div className={theme.isDark ? 'dark-mode' : ''}>
        <Filters
          regions={regions.sort()}
          onChangeRegion={handleChangeRegion}
          onChangeCountry={handleChangeCountry}
        />
        {loading ? 'Loading...' : <CardList cards={cards} />}
      </div>
    </>
  );
}

export default HomePage;