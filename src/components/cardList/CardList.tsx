import { CountriesAdapter } from '../../infrastructure/apiTypes';
import Card from '../card/Card';

type CardListProps = {
  cards: CountriesAdapter[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <section className='card-list'>
      {cards.map((card) => {
        return (
          <Card
            key={card.name}
            name={card.name || ''}
            population={card.population || 0}
            region={card.region!}
            capital={card.capital?.at(0) || ''}
            urlImage={card.flag || ''}
          />
        );
      })}
    </section>
  );
};

export default CardList;
