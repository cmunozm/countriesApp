import Dropdown from './Dropdown';
import { render, screen } from '@testing-library/react';

describe('Dropdown', () => {
  test('Should render dropdown component', () => {
    render(
      <Dropdown
        options={['Africa', 'América', 'Asia']}
        firstOption='Select Region'
        onChangeRegion={() => {}}
      />
    );
    const select = screen.getByLabelText('Region');
    expect(select).toBeDefined();
    expect(select.querySelectorAll('option').length).toBe(4);
  });
});
