import classNames from 'classnames';
import { forwardRef } from 'react';
import { ButtonBaseProps, ButtonBase } from '../base-button/base-button';

/* eslint-disable-next-line */
export interface ButtonProps extends ButtonBaseProps {
  size?: 'small' | 'medium' | 'large';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      leftIcon,
      rightIcon,
      fullWidth,
      className,
      size = 'medium',
      children,
      ...args
    } = props;

    const getIcon = (icon: React.ReactNode) => (
      <span
        className={classNames({
          'text-xl': size === 'small',
          'text-2xl': size === 'medium',
          'text-3xl': size === 'large',
        })}
      >
        {icon}
      </span>
    );
    return (
      <ButtonBase
        className={classNames(
          'flex items-center justify-center',
          {
            'w-full': fullWidth,
            'h-8 gap-2 rounded-md px-2 py-1 text-sm': size === 'small',
            'h-10 gap-3 rounded-lg px-3 py-1': size === 'medium',
            'h-12 gap-4 rounded-lg px-4 py-1 text-lg font-medium':
              size === 'large',
          },
          className
        )}
        {...args}
        ref={ref}
      >
        {leftIcon && getIcon(leftIcon)}
        {children}
        {rightIcon && getIcon(rightIcon)}
      </ButtonBase>
    );
  }
);

export default Button;
