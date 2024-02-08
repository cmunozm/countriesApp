type CardProps = {
  name: string;
  population: number;
  region: string;
  capital: string;
  urlImage: string;
};

const Card = ({ ...props }: CardProps) => {
  const { name, population, region, capital, urlImage } = props;

  return (
    <div className='card'>
      <img className='card__image' src={urlImage} alt={`Flag ${name}`} />
      <div className='card__content'>
        <h2 className='card__title'>{name}</h2>
        <ul className='card__description'>
          <li>
            <span>Population:</span>
            {population}
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
    </div>
  );
};

export default Card;
