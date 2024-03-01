import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Country from './pages/country/country';
import { Suspense, useContext } from 'react';
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
  console.log('_____App____');
  const { theme } = useContext(themeContext);
  return (
    <div className={theme.isDark ? 'main dark-mode' : 'main'}>
      <Header title='Where in the World?' />
      <Suspense fallback={<div>Loading</div>}>
        <div className='container'>
          <RouterProvider router={router} />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
