import classNames from 'classnames';
import { forwardRef } from 'react';
import ButtonBase, { ButtonBaseProps } from '../base-button/base-button';

/* eslint-disable-next-line */
export interface IconButtonProps extends ButtonBaseProps {
  size?: 'small' | 'medium' | 'large';
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { size = 'medium', className, ...args } = props;
    return (
      <ButtonBase
        className={classNames(
          'flex items-center justify-center',
          {
            'h-8 w-8 rounded-md text-xl': size === 'small',
            'h-10 w-10 rounded-lg text-2xl': size === 'medium',
            'h-12 w-12 rounded-xl text-3xl': size === 'large',
          },
          className
        )}
        {...args}
        ref={ref}
      />
    );
  }
);

export default IconButton;
