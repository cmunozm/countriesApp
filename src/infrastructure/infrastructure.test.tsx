import { renderHook } from '@testing-library/react';
import useCountries from './useCountries';
/*
const countriesData = [
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

describe('UseCountries', () => {
  test('Test Fetch', async () => {
    const { result } = renderHook(() => useCountries());

    console.log(result.current);
    // expect(result.current.countries).toBeDefined();
  });
});

/*
  test('test', () => {
    const { result } = renderHook(() => {
      const [name, setName] = React.useState('');
      console.log('name::', name);
  
      React.useEffect(() => {
        setName('Alice');
      }, []);
  
      return name;
    });
  
    console.log('fuera');
    expect(result.current).toBe('Alice');
  }); 
});

*/
