import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';
import { styled } from '../../../styled-system/jsx'
import { css } from '../../../styled-system/css'

import { Bell } from '@poc-lib/icons';
import theme from '@poc-lib/theme';

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
  & {
    variant?: 'default' | 'disabled';
  }>;

const ButtonComponent = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: "1rem",
    bg: "#8db5af",
    borderRadius: "1rem",
    cursor: "pointer",
    "&:hover": {
      color: "#bebf7c",
    },
  },
  variants: {
    variant: {
      default: {},
      disabled: {
        bg: "red",
        color: "white",
        cursor: "not-allowed",
        "&:hover": {
          color: "white",
        },
      },
    },
  },
});

export function Button({ children, variant = 'default', ...rest }: ButtonProps) {
  return (
    <ButtonComponent variant={variant} {...rest}>
      <Bell />
      {children}
    </ButtonComponent>
  );
}
