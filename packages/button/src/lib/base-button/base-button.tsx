import classNames from 'classnames';
import React from 'react';

/* eslint-disable-next-line */
export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  variant?: 'solid' | 'ghost' | 'outline';
  colorScheme?:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info';
}

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (props, ref) => {
    const {
      className,
      isActive,
      variant = 'solid',
      colorScheme = 'primary',
      ...args
    } = props;

    return (
      <button
        ref={ref}
        className={classNames(
          'select-none outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
          {
            // Solid variant
            'bg-indigo-500 text-white ring-indigo-700 hover:bg-indigo-600 dark:bg-indigo-400 dark:text-white dark:ring-indigo-200 dark:hover:bg-indigo-300':
              colorScheme === 'primary' && variant === 'solid',
            'bg-gray-500 text-white ring-gray-700 hover:bg-gray-600 dark:bg-gray-500 dark:text-white dark:ring-gray-200 dark:hover:bg-gray-400':
              colorScheme === 'secondary' && variant === 'solid',
            'bg-yellow-500 text-white ring-yellow-700 hover:bg-yellow-600 dark:bg-yellow-400 dark:text-white dark:ring-yellow-200 dark:hover:bg-yellow-300':
              colorScheme === 'warning' && variant === 'solid',
            'bg-red-500 text-white ring-red-700 hover:bg-red-600 dark:bg-red-400 dark:text-white dark:ring-red-200 dark:hover:bg-red-300':
              colorScheme === 'danger' && variant === 'solid',
            'bg-green-500 text-white ring-green-700 hover:bg-green-600 dark:bg-green-400 dark:text-white dark:ring-green-200 dark:hover:bg-green-300':
              colorScheme === 'success' && variant === 'solid',
            'bg-sky-500 text-white ring-sky-700 hover:bg-sky-600 dark:bg-sky-400 dark:text-white dark:ring-sky-200 dark:hover:bg-sky-300':
              colorScheme === 'info' && variant === 'solid',
            // Ghost variant
            'bg-opacity-0 hover:bg-opacity-10 dark:bg-opacity-0 dark:hover:bg-opacity-20':
              (variant === 'ghost' || variant === 'outline') && !isActive,
            'bg-opacity-10':
              (variant === 'ghost' || variant === 'outline') && isActive,
            'bg-indigo-500 text-indigo-500 ring-indigo-500/50 dark:text-indigo-400':
              colorScheme === 'primary' &&
              (variant === 'ghost' || variant === 'outline'),
            'bg-gray-500 text-gray-700 ring-gray-500/50 dark:text-gray-300':
              colorScheme === 'secondary' &&
              (variant === 'ghost' || variant === 'outline'),
            'bg-green-500 text-green-500 ring-green-500/50':
              colorScheme === 'success' &&
              (variant === 'ghost' || variant === 'outline'),
            'bg-sky-500 text-sky-500 ring-sky-500/50':
              colorScheme === 'info' &&
              (variant === 'ghost' || variant === 'outline'),
            'bg-yellow-500 text-yellow-500 ring-yellow-500/50':
              colorScheme === 'warning' &&
              (variant === 'ghost' || variant === 'outline'),
            'bg-red-500 text-red-500 ring-red-500/50':
              colorScheme === 'danger' &&
              (variant === 'ghost' || variant === 'outline'),
            // Outline variant
            'border border-opacity-40 hover:border-opacity-60':
              variant === 'outline' && !isActive,
            'border border-opacity-60': variant === 'outline' && isActive,
            'border-indigo-500':
              colorScheme === 'primary' && variant === 'outline',
            'border-gray-500':
              colorScheme === 'secondary' && variant === 'outline',
            'border-green-500':
              colorScheme === 'success' && variant === 'outline',
            'border-yellow-500':
              colorScheme === 'warning' && variant === 'outline',
            'border-red-500': colorScheme === 'danger' && variant === 'outline',
            'border-sky-500': colorScheme === 'info' && variant === 'outline',
          },
          className
        )}
        {...args}
      />
    );
  }
);

export default ButtonBase;
