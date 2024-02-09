import { createContext, useState } from 'react';

// ======= Context =======
export type Theme = {
  isDark: boolean;
};

export interface ThemeContextInterface {
  theme: Theme;
  handleTheme: () => void;
}

export const themeContext = createContext<ThemeContextInterface>(
  {} as ThemeContextInterface
);

// ======= Provider =======
type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>({ isDark: false });

  const handleTheme = () => {
    setTheme({ isDark: !theme.isDark });
  };

  return (
    <themeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </themeContext.Provider>
  );
}
