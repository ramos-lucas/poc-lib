import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';

import { Bell } from '@poc-lib/icons';
import theme from '@poc-lib/theme';

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

const style: CSSProperties = {
  appearance: 'none',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  backgroundColor: theme.color.primitive.solid.neutral['neutral-100'].value,
  color: theme.color.primitive.solid.neutral['neutral-0'].value,
};

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} style={style}>
      <Bell />
      {children}
    </button>
  );
}
