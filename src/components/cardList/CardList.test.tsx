import CardList from './CardList';
import { render, screen } from '@testing-library/react';
import { CountriesAdapter } from '../../infrastructure/apiTypes';
import { MemoryRouter } from 'react-router-dom';

const data: CountriesAdapter[] = [
  {
    name: 'Belgium',
    cca3: 'BEL',
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    capital: ['Brussels'],
    tld: ['.be'],
    region: 'Europe',
    subregion: 'Western Europe',
    languages: {
      deu: 'German',
      fra: 'French',
      nld: 'Dutch',
    },
    borders: ['FRA', 'DEU', 'LUX', 'NLD'],
    population: 11555997,
    flag: 'https://flagcdn.com/w320/be.png',
  },
  {
    name: 'Brazil',
    cca3: 'BRA',
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    capital: ['Brasilia'],
    tld: ['.be'],
    region: 'Americas',
    subregion: 'Western Europe',
    languages: {
      deu: 'German',
      fra: 'French',
      nld: 'Dutch',
    },
    borders: ['FRA', 'DEU', 'LUX', 'NLD'],
    population: 11555997,
    flag: 'https://flagcdn.com/w320/br.png',
  },
  {
    name: '',
    cca3: 'BRA',
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
    capital: [],
    tld: ['.be'],
    region: 'Americas',
    subregion: 'Western Europe',
    languages: {
      deu: 'German',
      fra: 'French',
      nld: 'Dutch',
    },
    borders: ['FRA', 'DEU', 'LUX', 'NLD'],
    population: 0,
    flag: '',
  },
];

describe('CardList', () => {
  test('Should Render CardList component', () => {
    render(
      <MemoryRouter>
        <CardList cards={data} />
      </MemoryRouter>
    );

    expect(screen.getAllByRole('list').length).toBe(3);
    expect(screen.getAllByRole('img').length).toBe(3);
  });
});
