export type Theme = {
  color: Color;
  spacing: Spacing;
  borderRadius: BorderRadius;
  boxShadow: BoxShadow;
  fontSize: FontSize;
  fontWeight: FontWeight;
  opacity: Opacity;
};

type Color = {
  primary: ColorVariants;
  secondary: ColorVariants;
  accent: ColorVariants;
  neutral: ColorVariants;
};

type ColorVariants = {
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

type Spacing = {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
};

type BorderRadius = {
  sm: string;
  md: string;
  lg: string;
};

type BoxShadow = {
  sm: string;
  md: string;
  lg: string;
};

type FontSize = {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
};

type FontWeight = {
  normal: string;
  medium: string;
  semibold: string;
  bold: string;
};

type Opacity = {
  'opacity-25': string;
  'opacity-50': string;
  'opacity-75': string;
};
