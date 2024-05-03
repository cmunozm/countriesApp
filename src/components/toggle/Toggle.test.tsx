import { render, screen } from '@testing-library/react';
import Toggle from './Toggle';

describe('Toggle', () => {
  test('Should render toggle component', () => {
    render(<Toggle theme={{ isDark: false }} handleClick={() => {}} />);

    expect(screen.getByText('Light Mode')).toBeDefined();
    expect(screen.getByRole('checkbox')).toBeDefined();
  });

  test('should render the component with dark theme', () => {
    render(<Toggle theme={{ isDark: true }} handleClick={() => {}} />);

    expect(screen.getByText('Dark Mode')).toBeDefined();
  });
});
