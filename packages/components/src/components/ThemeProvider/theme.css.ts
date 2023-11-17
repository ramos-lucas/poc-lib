import { createTheme } from '@vanilla-extract/css';

const fonts = {
  heading: 'Barlow, San Francisco, Roboto, Segoe UI, Helvetica, sans-serif',
  paragraph:
    'Work Sans, San Francisco, Roboto, Segoe UI, Helvetica, sans-serif',
};

const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
};

export const [lightTheme, vars] = createTheme({
  color: {
    primary: 'rgb(0, 188, 185)',
    primaryDisabled: 'rgb(155, 255, 253)',
    secondary: 'rgb(0, 121, 188)',
    secondaryDisabled: 'rgb(155, 219, 255)',
    fontColor: 'black',
    backGroundColor: 'rgb(250,250,250)',
  },
  fonts,
  fontWeight,
});

export const darkTheme = createTheme(vars, {
  color: {
    primary: 'rgb(0, 188, 185)',
    primaryDisabled: 'rgb(155, 255, 253)',
    secondary: 'rgb(0, 121, 188)',
    secondaryDisabled: 'rgb(155, 219, 255)',
    fontColor: 'white',
    backGroundColor: '#0e0e10',
  },
  fonts,
  fontWeight,
});
