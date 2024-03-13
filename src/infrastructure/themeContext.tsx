/* v8 ignore next  45*/
import { createContext, useState } from 'react';
import { CountriesAPI } from './apiTypes';

// ======= Context =======
export type Theme = {
  isDark: boolean;
};

export interface ThemeContextInterface {
  countryList?: CountriesAPI[];
  theme: Theme;
  handleTheme: () => void;
  handleList: (list: CountriesAPI[]) => void;
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
  const [countryList, setCountryList] = useState<CountriesAPI[]>();

  const handleTheme = () => {
    setTheme({ isDark: !theme.isDark });
  };
  const handleList = (list: CountriesAPI[]) => {
    setCountryList(list);
  };

  return (
    <themeContext.Provider
      value={{ countryList, theme, handleTheme, handleList }}
    >
      {children}
    </themeContext.Provider>
  );
}
