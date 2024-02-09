import Card, { CardProps } from '../card/Card';

type CardListProps = {
  cards: CardProps[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <section className='card-list'>
      {cards.map((card) => {
        return (
          <Card
            key={card.name}
            name={card.name}
            population={card.population}
            region={card.region}
            capital={card.capital}
            urlImage={card.urlImage}
          />
        );
      })}
    </section>
  );
};

export default CardList;
