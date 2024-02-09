import { useContext } from 'react';
import { themeContext } from './infrastructure/themeContext';

import CardList from './components/cardList/CardList';
import Header from './components/header/Header';
import { useFetch } from './infrastructure/useFetch';

function App() {
  const { theme } = useContext(themeContext);
  const { data, loading } = useFetch('https://restcountries.com/v3.1/all');

  return (
    <>
      <div className={theme.isDark ? 'dark-mode' : ''}>
        <Header title='Where in the World?' />
        {loading ? 'Loading...' : <CardList cards={data} />}
      </div>
    </>
  );
}

export default App;
