import { useContext, useEffect, useState } from 'react';
import { themeContext } from './infrastructure/themeContext';

import CardList from './components/cardList/CardList';
import Header from './components/header/Header';
import { useFetch } from './infrastructure/useFetch';
import Filters from './components/filters/Filters';
import { CountriesAPI } from './infrastructure/apiTypes';

function App() {
  const { theme } = useContext(themeContext);
  const { data, loading, fetchData } = useFetch(
    'https://restcountries.com/v3.1/all'
  );

  const [cards, setCards] = useState<CountriesAPI[]>();
  const regions = new Set(data.map((country) => country.region));
  const regionString: string[] = Array.from(regions).map((item) =>
    item?.toString()
  )!;

  const handleChangeRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const region = event.target.value;
    const countriesByRegion = data.filter((country) =>
      region === 'all' ? country.region : country.region === region
    );

    setCards(countriesByRegion);
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    } else {
      setCards(data);
    }
  }, [data]);

  return (
    <>
      <div className={theme.isDark ? 'dark-mode' : ''}>
        <Header title='Where in the World?' />
        <div className='container'>
          <Filters
            regions={regionString.sort()}
            onChange={handleChangeRegion}
          />
          {loading ? 'Loading...' : <CardList cards={cards ?? data} />}
        </div>
      </div>
    </>
  );
}

export default App;
