import { useEffect, useState } from 'react';
import CardList from '../../components/cardList/CardList';
import Filters from '../../components/filters/Filters';
import Pagination from '../../components/pagination/Pagination';
//import { CountriesAdapter } from '../../infrastructure/apiTypes';
import useCountries from '../../infrastructure/useCountries';
import { useAppDispatch } from '../../redux/hooks';
import { useAppSelector } from '../../redux/hooks';
import { saveCountries, getCountries } from '../../redux/slices/country.slice';

function HomePage() {
  const { loading, countries, getRegions, getByRegion, getByCountry } =
    useCountries();
  const cards = useAppSelector((state) => state.countriesReducer.countries);
  const [cardsToShow, SetCardsToShow] = useState(cards);
  const dispatch = useAppDispatch();

  const regions = getRegions();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const countriesPerPage = 16;

  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;
  const currentCountries = cardsToShow.slice(firstIndex, lastIndex);

  const handleChangeCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    const searchPattern = event.target.value;
    if (searchPattern !== '') {
      SetCardsToShow(getByCountry(searchPattern));
    } else {
      dispatch(getCountries());
    }
  };

  useEffect(() => {
    if (!loading) {
      dispatch(saveCountries(countries));
    }
  }, [loading, countries, dispatch]);

  const handleChangeRegion = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(1);
    SetCardsToShow(getByRegion(target.value));
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
            totalPages={Math.round(cardsToShow.length / countriesPerPage)}
            onChangePage={handleOnChangePage}
          />
        </>
      )}
    </>
  );
}

export default HomePage;
