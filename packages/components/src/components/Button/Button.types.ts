import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export const buttonVariants = [
  'primary',
  'secondary',
  'accent',
  'ghost',
] as const;
type ButtonVariant = (typeof buttonVariants)[number];

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
  }
>;

export const defaultProps = {
  variant: 'primary',
} as Required<ButtonProps>;
