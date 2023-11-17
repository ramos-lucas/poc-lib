import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../ThemeProvider/theme.css';

export const buttonStyles = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: vars.fonts.paragraph,
    fontWeight: vars.fontWeight.medium,
    boxSizing: 'border-box',
    height: '40px',
    fontSize: '16px',
    padding: '0 16px',
    borderRadius: '24px',
    border: 'none',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.primary,
        ':disabled': {
          backgroundColor: vars.color.primaryDisabled,
        },
      },
      secondary: {
        backgroundColor: vars.color.secondary,
        ':disabled': {
          backgroundColor: vars.color.secondaryDisabled,
        },
      },
    },
    size: {
      small: {
        width: '100px',
      },
      medium: {
        width: '200px',
      },
    },
    elevated: {
      true: {
        boxShadow: '0rem 0.25rem 1rem 0rem rgba(0,0,0,.16)',
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        variant: 'secondary',
        size: 'medium',
      },
      style: {
        fontSize: '24px',
      },
    },
  ],
});
