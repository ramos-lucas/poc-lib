import { buttonStyles } from './Button.css';
import { ButtonProps } from './Button.types';

export const Button = ({
  variant = 'primary',
  elevated = false,
  size = 'small',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${buttonStyles({
        variant,
        elevated,
        size,
      })} ${className}`}
      {...props}
    >
      {props.children}
    </button>
  );
};
