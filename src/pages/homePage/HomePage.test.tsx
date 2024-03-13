import HomePage from './HomePage';
import {
  //fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

/*
const data = [
  {
    name: 'Cyprus',
    population: 1207361,
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: ['Nicosia'],
    tld: ['.cy'],
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    languages: { ell: 'Greek', tur: 'Turkish' },
    borders: [],
    flag: 'https://flagcdn.com/w320/cy.png',
    cca3: 'CYP',
  },
  {
    name: 'Eritrea',
    population: 5352000,
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: ['Asmara'],
    tld: ['.er'],
    currencies: { ERN: { name: 'Eritrean nakfa', symbol: 'Nfk' } },
    languages: { ara: 'Arabic', eng: 'English', tir: 'Tigrinya' },
    borders: ['DJI', 'ETH', 'SDN'],
    flag: 'https://flagcdn.com/w320/er.png',
    cca3: 'ERI',
  },
];
*/

describe('HomePage', () => {
  test('Should render HomePage component', async () => {
    render(<HomePage />);

    //await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    //expect(screen.getByText('Loading...')).toBeUndefined();
  });
  /*
  it('should filter cards to all countries when search pattern is empty', () => {
    render(<HomePage />);

    const searchInput = screen.getByRole('textbox');
    console.log(searchInput);
    fireEvent.change(searchInput, { target: { value: '' } });

    //expect().toHaveBeenCalledWith(countries);
  }); 
  */
});
