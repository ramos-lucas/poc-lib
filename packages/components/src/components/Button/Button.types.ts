import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export const buttonVariants = ['primary', 'secondary'] as const;
type ButtonVariant = (typeof buttonVariants)[number];

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    elevated?: boolean;
    size?: 'small' | 'medium';
  }
>;

export const defaultProps = {
  variant: 'primary',
} as Required<ButtonProps>;
