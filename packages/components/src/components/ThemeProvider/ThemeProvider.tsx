import { darkTheme, lightTheme } from './theme.css';

export type ThemeProviderProps = {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
};

export const ThemeProvider = ({
  children,
  theme = 'light',
}: ThemeProviderProps) => {
  return (
    <div className={theme === 'light' ? lightTheme : darkTheme}>{children}</div>
  );
};
