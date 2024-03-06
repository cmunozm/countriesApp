import Header from './components/header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense, useContext } from 'react';
import { themeContext } from './infrastructure/themeContext';

const Country = lazy(() => import('./pages/country/Country'));
const HomePage = lazy(() => import('./pages/HomePage'));

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
