import { Link, useParams } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CountriesAPI, Currencies } from '../../infrastructure/apiTypes';
import Icon from '../icon/Icon';
import { useContext } from 'react';
import { themeContext } from '../../infrastructure/themeContext';
import useCountries from '../../infrastructure/useCountries';

const getCurrency = (cur: Currencies | undefined) => {
  let currency: string;
  if (cur) {
    currency = Object.keys(cur).at(0) || '';
  } else {
    currency = '';
  }
  return currency;
};

type CountryProps = {
  countryData?: CountriesAPI;
};

const Country = ({ countryData }: CountryProps) => {
  const params = useParams();
  const { countryList } = useContext(themeContext);
  if (countryList?.length === 0 || !countryList) {
    const { getAllCountries } = useCountries();
    getAllCountries();
  }
  const selectedContry = countryList?.filter(
    (item) => item.name?.common === params.country
  )[0];
  const countryInfo = countryData !== undefined ? countryData : selectedContry;

  if (countryInfo) {
    const currency = getCurrency(countryInfo.currencies);
    const leng: string[] = Object.values(countryInfo.languages || {});

    const getCountryName = (cca3: string) => {
      const border: CountriesAPI | undefined = countryList?.filter(
        (item) => item.cca3 === cca3
      )[0];

      if (border) {
        return border.name?.common;
      } else {
        return '';
      }
    };

    return (
      <div className='country'>
        <Link to='/' className='country__btn'>
          <Icon icon={faArrowLeft} />
          Back
        </Link>
        <section className='country__info'>
          <div className='country__flag'>
            <img
              src={countryInfo.flags?.png}
              alt={`Flag ${countryInfo.name?.common}`}
            />
          </div>
          <div>
            <h2 className='country__name'>{countryInfo.name?.common}</h2>
            <ul className='country__details'>
              <li>
                <>
                  <span>Native Name:</span>
                  {countryInfo.name?.official}
                </>
              </li>
              <li>
                <>
                  <span>Population:</span>
                  {countryInfo.population?.toLocaleString()}
                </>
              </li>
              <li>
                <>
                  <span>Region:</span>
                  {countryInfo.region}
                </>
              </li>
              <li>
                <>
                  <span>Sub Region:</span>
                  {countryInfo.subregion}
                </>
              </li>
              <li>
                <>
                  <span>Capital:</span>
                  {countryInfo.capital}
                </>
              </li>
              <li>
                <>
                  <span>Top Level Domain:</span>
                  {countryInfo.tld?.at(0)}
                </>
              </li>
              <li>
                <>
                  <span>Currencies:</span>
                  {currency}
                </>
              </li>
              <li>
                <>
                  <span>Lenguages</span>
                  {leng.map((item, index) => `${index > 0 ? ',' : ''} ${item}`)}
                </>
              </li>
            </ul>
            <div className='country__borders'>
              {countryInfo.borders && countryInfo.borders?.length > 0 && (
                <label>Border Countries:</label>
              )}
              {countryInfo.borders?.map((item) => (
                <span key={item}>
                  <Link to={`/countries/${getCountryName(item)}`}>
                    {getCountryName(item)}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <h1>Country not found</h1>;
  }
};

export default Country;
