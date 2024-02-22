import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Country from './components/country/country';
import { useContext } from 'react';
import { themeContext } from './infrastructure/themeContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div>404 Not Found Page</div>,
  },
  {
    path: '/countries/:country',
    element: <Country />,
  },
]);

const App = () => {
  const { theme } = useContext(themeContext);
  return (
    <div className={theme.isDark ? 'dark-mode' : ''}>
      <Header title='Where in the World?' />
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
