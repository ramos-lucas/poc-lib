import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { Bell } from '@poc-lib/icons';

import styles from './styles.module.css';

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={styles.root}>
      <Bell />
      {children}
    </button>
  );
}
