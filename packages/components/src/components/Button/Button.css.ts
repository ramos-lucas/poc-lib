import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  spacing: '10px',
});
export const container = style({
  padding: vars.spacing,
});
// import styled, { css } from 'styled-components';

// import { createStyles } from '../../utils/createStyles';
// import { ButtonProps } from './Button.types';

// export const Button = styled.button<ButtonProps>(({ theme, variant }) => {
//   return createStyles(
//     { variant, theme },
//     {
//       base: css`
//         border: none;
//         cursor: pointer;
//         transition: all 0.3s ease-in-out;
//         border-radius: ${({ theme }) => theme.borderRadius.sm};
//         padding: ${({ theme }) =>
//           [theme.spacing[2], theme.spacing[4]].join(' ')};
//         font-size: ${({ theme }) => theme.fontSize.base};

//         &:disabled,
//         &:disabled:hover {
//           cursor: not-allowed;
//           background-color: ${({ theme }) => theme.color.neutral[200]};
//           color: ${({ theme }) => theme.color.neutral[500]};
//           border: none;
//         }
//       `,
//       variant: {
//         primary: css`
//           background-color: ${theme.color.primary[500]};
//           color: ${theme.color.neutral[100]};

//           &:hover {
//             background-color: ${theme.color.primary[700]};
//           }
//         `,
//         secondary: css`
//           background-color: ${theme.color.secondary[500]};
//           color: ${theme.color.neutral[100]};

//           &:hover {
//             background-color: ${theme.color.secondary[700]};
//           }
//         `,
//         accent: css`
//           background-color: ${theme.color.accent[500]};
//           color: ${theme.color.neutral[100]};

//           &:hover {
//             background-color: ${theme.color.accent[700]};
//           }
//         `,
//         ghost: css`
//           background-color: ${theme.color.neutral[100]};
//           color: ${theme.color.neutral[500]};
//           border: solid 1px ${theme.color.neutral[500]};

//           &:hover {
//             background-color: ${theme.color.neutral[300]};
//             color: ${theme.color.neutral[700]};
//             border: solid 1px ${theme.color.neutral[700]};
//           }
//         `,
//       },
//     },
//   );
// });
