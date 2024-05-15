import Header from './Header';
import Toggle from '../toggle/Toggle';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  test('Should render Header component', () => {
    render(
      <Header title='Title Header'>
        <Toggle theme={{ isDark: false }} handleClick={() => {}} />
      </Header>
    );

    expect(screen.getByRole('link')).toBeDefined();
    expect(screen.getByText('Title Header')).toBeDefined();
  });
});
