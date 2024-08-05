import React from 'react';
import { PrimeReactContext } from 'primereact/api';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: string;
  handleChangeTheme(newTheme: string): void;
}

interface Props {
  initialTheme?: string;
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ initialTheme = 'light/blue', children }: Props) => {
  const { changeTheme } = useContext(PrimeReactContext);
  const [theme, setTheme] = useState<string>(initialTheme);
  const [themeChanged, setThemeChanged] = useState<boolean>(false); // State to track theme change

  let ranonce = false;
  useEffect(() => {
    if (!ranonce) {
      //Run you code
      const localTheme = localStorage.getItem('theme');
      if (localTheme) {
        handleChangeTheme(localTheme);
        setTheme(localTheme);
      } else {
        handleChangeTheme(initialTheme);
        setTheme(initialTheme);
      }
      ranonce = true;
    }
  }, []);

  const handleChangeTheme = (newTheme: string) => {
    if (!changeTheme) {
      throw new Error('ChangeTheme context not initialized yet.');
    }

    changeTheme(theme, newTheme, 'theme-link', () => {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      setThemeChanged(true); // Set themeChanged to true after theme change
    });
  };

  const value = {
    theme,
    handleChangeTheme,
  };

  // Render children only after theme change
  return <ThemeContext.Provider value={value}>{themeChanged ? children : null}</ThemeContext.Provider>;
};
