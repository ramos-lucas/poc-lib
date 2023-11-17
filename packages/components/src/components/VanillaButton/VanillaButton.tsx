import { ButtonHTMLAttributes } from 'react';

import { buttonStyles } from './vanillaButton.css';

export interface VanillaButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  elevated?: boolean;
  size?: 'small' | 'medium';
}

export function VanillaButton({
  variant = 'primary',
  elevated = false,
  size = 'small',
  ...props
}: VanillaButtonProps) {
  return (
    <button
      className={`${buttonStyles({
        variant,
        elevated,
        size,
      })}`}
      {...props}
    >
      {props.children}
    </button>
  );
}
