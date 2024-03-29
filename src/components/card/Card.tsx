import { Link } from 'react-router-dom';

export type CardProps = {
  name: string;
  population: number;
  region: string;
  capital: string;
  urlImage: string;
};

const Card = ({ name, population, region, capital, urlImage }: CardProps) => {
  return (
    <div className='card'>
      <Link to={`/countries/${name}`}>
        <img className='card__image' src={urlImage} alt={`Flag ${name}`} />
        <div className='card__content'>
          <h2 className='card__title'>{name}</h2>
          <ul className='card__description'>
            <li>
              <span>Population:</span>
              {population.toLocaleString()}
            </li>
            <li>
              <span>Region:</span>
              {region}
            </li>
            <li>
              <span>Capital:</span>
              {capital}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default Card;
