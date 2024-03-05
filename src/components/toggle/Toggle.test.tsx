import Toggle from './Toggle';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Toggle', () => {
  beforeEach(() => {
    render(<Toggle />);
  });

  test('Should render toggle component', () => {
    expect(screen.getByText('Light Mode')).toBeDefined();
    expect(screen.getByRole('checkbox')).toBeDefined();
  });

  /*   test('should change the text when is clicked', () => {
    const input = screen.getByRole('checkbox');
    act(() => {
      fireEvent.click(input);
    });
    expect(screen.getByText('Dark Mode')).toBeDefined();
  }); */
});
