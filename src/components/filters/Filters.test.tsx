import Filters from './Filters';
import { render, screen } from '@testing-library/react';

describe('Filters', () => {
  test('Should render Filters component', () => {
    render(
      <Filters
        regions={['Americas', 'Asia', 'Europa']}
        onChangeRegion={() => {}}
        onChangeCountry={() => {}}
      />
    );
    const select = screen.getByLabelText('Region');
    expect(select).toBeDefined();
    expect(select.querySelectorAll('option').length).toBe(4);
  });
});
