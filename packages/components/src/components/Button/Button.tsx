import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from 'react';
import { Bell } from '@poc-lib/icons';
import theme, { css, styled } from '@poc-lib/theme';

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

const ButtonComponent = styled('button', {
  base: {
    appearance: 'none',
    border: '1px solid blue',
    backgroundColor: '#171717',
    padding: '12rem',
    borderRadius: '50%',
  }
})

const Hr = styled('hr', {
  base: {
    border: '1px solid blue',
  }

}
)

// const style: CSSProperties = {
//   appearance: 'none',
//   MozAppearance: 'none',
//   WebkitAppearance: 'none',
//   backgroundColor: theme.color.primitive.solid.neutral['neutral-100'].value,
//   color: theme.color.primitive.solid.neutral['neutral-0'].value,
// };

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <div>
      <Hr />
      <ButtonComponent className={css({ bg: 'red' })} {...rest}>
        <Bell />
        {children}
      </ButtonComponent>
    </div>
  );
}
