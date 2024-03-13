import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Toggle from './Toggle';
import { themeContext } from '../../infrastructure/themeContext';

describe('Toggle', () => {
  test('Should render toggle component', () => {
    render(<Toggle />);

    expect(screen.getByText('Light Mode')).toBeDefined();
    expect(screen.getByRole('checkbox')).toBeDefined();
  });

  test('should render the component with dark theme', () => {
    const mockContextValue = {
      theme: { isDark: true },
      handleTheme: vi.fn(),
      handleList: vi.fn(),
    };
    vi.spyOn(React, 'useContext').mockReturnValue({ mockContextValue });

    render(
      <themeContext.Provider value={mockContextValue}>
        <Toggle />
      </themeContext.Provider>
    );

    expect(screen.getByText('Dark Mode')).toBeDefined();
  });
});
