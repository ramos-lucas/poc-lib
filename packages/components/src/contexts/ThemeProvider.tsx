import React, { createContext, PropsWithChildren } from 'react';

import defaultTheme from '@poc-lib/tokens/dist/variables.json';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { Theme } from '../theme/theme.type';

const ThemeContext = createContext({} as Required<ThemeProviderProps>);

type ThemeProviderProps = {
  theme?: Theme;
  locale?: 'pt-BR' | 'en-US';
};

export function ThemeProvider({
  children,
  locale = 'pt-BR',
  theme = defaultTheme,
}: PropsWithChildren<ThemeProviderProps>) {
  return (
    <ThemeContext.Provider value={{ locale, theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
