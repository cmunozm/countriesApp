import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CountriesAPI, Currencies } from '../../infrastructure/apiTypes';
import Icon from '../icon/Icon';

// country/colombia
// country/colombia?pop=20&currency=cop

const getCurrency = (cur: Currencies) => {
  const currency = Object.keys(cur).at(0);
  return currency;
};

const Country = (props: CountriesAPI) => {
  const currency = props.currencies ? getCurrency(props.currencies) : '';

  const leng: string[] = Object.values(props.languages || {});

  return (
    <div className='country'>
      <button className='country__btn'>
        <Icon icon={faArrowLeft} />
        Back
      </button>
      <section className='country__info'>
        <div className='country__flag'>
          <img src={props.flags?.png} alt={`Flag ${props.name?.common}`} />
        </div>
        <div>
          <h2 className='country__name'>{props.name?.common}</h2>
          <ul className='country__details'>
            <li>
              <>
                <span>Native Name:</span>
                {props.name?.official}
              </>
            </li>
            <li>
              <>
                <span>Population:</span>
                {props.population?.toLocaleString()}
              </>
            </li>
            <li>
              <>
                <span>Region:</span>
                {props.region}
              </>
            </li>
            <li>
              <>
                <span>Sub Region:</span>
                {props.subregion}
              </>
            </li>
            <li>
              <>
                <span>Capital:</span>
                {props.capital}
              </>
            </li>
            <li>
              <>
                <span>Top Level Domain:</span>
                {props.tld?.at(0)}
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
            <label>Border Countries:</label>
            {props.borders?.map((item) => (
              <span>
                <a href='#'>{item}</a>
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Country;
