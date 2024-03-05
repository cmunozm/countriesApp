import Card from './Card';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Card', () => {
  test('Should render Card componeShould render Card component with all country info', () => {
    render(
      <MemoryRouter>
        <Card
          name='Brazil'
          population={2064653}
          region='Americas'
          capital='Brasilia'
          urlImage='https://flagcdn.com/w320/br.png'
        />
      </MemoryRouter>
    );
    expect(screen.getByAltText('Flag Brazil')).toBeDefined();
    expect(screen.getByText('Brazil')).toBeDefined();
    expect(screen.getByText('Population:')).toBeDefined();
    expect(screen.getByText('2.064.653')).toBeDefined();
    expect(screen.getByText('Region:')).toBeDefined();
    expect(screen.getByText('Americas')).toBeDefined();
    expect(screen.getByText('Capital:')).toBeDefined();
    expect(screen.getByText('Brasilia')).toBeDefined();
  });
});
