import React from 'react';

import { container, themeClass } from './Button.css';
import { ButtonProps, defaultProps } from './Button.types';

export function Button({
  children,
  variant = defaultProps.variant,
  ...rest
}: ButtonProps) {
  return (
    <div className={themeClass}>
      <button className={container} {...rest}>
        {children}
      </button>
    </div>
  );
}
