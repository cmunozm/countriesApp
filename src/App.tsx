import Header from './components/header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Toggle from './components/toggle/Toggle';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { toggleTheme } from './redux/slices/theme.slice';

const Country = lazy(() => import('./pages/country/CountryComponent'));
const HomePage = lazy(() => import('./pages/homePage/HomePage'));

const router = createBrowserRouter([
  {
    path: '/countriesApp/',
    element: <HomePage />,
    errorElement: <div>404 Not Found Page</div>,
  },
  {
    path: '/countries/:country',
    element: <Country />,
  },
]);

const App = () => {
  const theme = useAppSelector((state) => state.themeReducer);
  const dispatch = useAppDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={theme.isDark ? 'main dark-mode' : 'main'}>
      <Header title='Where in the World?'>
        <Toggle theme={theme} handleClick={handleTheme} />
      </Header>
      <Suspense fallback={<div>Loading</div>}>
        <div className='container'>
          <RouterProvider router={router} />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
