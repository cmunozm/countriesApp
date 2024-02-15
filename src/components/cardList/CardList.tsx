import { CountriesAPI } from '../../infrastructure/apiTypes';
import Card from '../card/Card';

type CardListProps = {
  cards: CountriesAPI[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <section className='card-list'>
      {cards.map((card) => {
        return (
          <Card
            key={card.name?.common}
            name={card.name?.common ?? ''}
            population={card.population!}
            region={card.region!}
            capital={card.capital?.at(0)!}
            urlImage={card.flags?.png!}
          />
        );
      })}
    </section>
  );
};

export default CardList;
