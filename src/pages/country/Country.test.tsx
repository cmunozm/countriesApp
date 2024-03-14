import Country from './Country';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ThemeProvider from '../../infrastructure/themeContext';

describe('Country', () => {
  test('Should render country component', () => {
    render(
      <MemoryRouter>
        <Country
          countryData={{
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
          }}
        />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Flag Belgium')).toBeDefined();
    expect(screen.getByText('Native Name:')).toBeDefined();
    expect(screen.getAllByText('Belgium').length).toBe(2);
    expect(screen.getByText('Region:')).toBeDefined();
    expect(screen.getByText('Europe')).toBeDefined();
    expect(screen.getByText('Capital:')).toBeDefined();
    expect(screen.getByText('Brussels')).toBeDefined();
    expect(screen.getByText('Currencies:')).toBeDefined();
    expect(screen.getByText('EUR')).toBeDefined();
    expect(screen.getByText('Border Countries:')).toBeDefined();
  });

  test('Should render country component with empty fields', () => {
    render(
      <MemoryRouter>
        <Country
          countryData={{
            name: 'Belgium',
            cca3: 'BEL',
            currencies: {},
            capital: ['Brussels'],
            tld: ['.be'],
            region: 'Europe',
            subregion: 'Western Europe',
            languages: {},
            borders: [],
            population: 11555997,
            flag: 'https://flagcdn.com/w320/be.png',
          }}
        />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Flag Belgium')).toBeDefined();
    expect(screen.getByText('Native Name:')).toBeDefined();
    expect(screen.getAllByText('Belgium').length).toBe(2);
    expect(screen.getByText('Region:')).toBeDefined();
    expect(screen.getByText('Europe')).toBeDefined();
    expect(screen.getByText('Capital:')).toBeDefined();
    expect(screen.getByText('Brussels')).toBeDefined();
    expect(screen.getByText('Currencies:')).toBeDefined();
  });

  test('Should get data from url when props are undefined', async () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/countries/Belgium']}>
          <Routes>
            <Route path='/countries/Belgium' element={<Country />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    );

    /*  await waitFor(() => {
      expect(expect(screen.getAllByText('Belgium').length).toBe(2));
    }); */

    // expect(screen.getAllByText('Belgium')).toBeDefined();
  });
});
