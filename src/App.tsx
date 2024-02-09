import { useContext } from 'react';
import { themeContext } from './infrastructure/themeContext';
import Header from './components/header/Header';

function App() {
  const { theme } = useContext(themeContext);

  return (
    <>
      <div className={theme.isDark ? 'dark-mode' : ''}>
        <Header title={'Where in the world?'} />
        <h1>Countries App!</h1>
      </div>
    </>
  );
}

export default App;
