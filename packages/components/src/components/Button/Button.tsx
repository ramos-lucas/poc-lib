import React from 'react';

import * as Styled from './Button.styles';
import { ButtonProps, defaultProps } from './Button.types';

export function Button({
  children,
  variant = defaultProps.variant,
  ...rest
}: ButtonProps) {
  return (
    <Styled.Button variant={variant} {...rest}>
      {children}
    </Styled.Button>
  );
}
