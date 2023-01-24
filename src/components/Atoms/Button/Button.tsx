import './Button.scss';

import classNames from 'classnames';
import * as React from 'react';

import { Box } from '@/components';
import { MarginSystemProps, PolymorphicProps } from '@/types';

export type ButtonProps<C extends React.ElementType = 'button'> = {
  /**
   * The button variant
   */
  variant?: 'primary' | 'primary-ghost' | 'form';
} & PolymorphicProps<C> &
  MarginSystemProps;

export const Button = <C extends React.ElementType = 'button'>({
  as,
  variant,
  children,
  ...boxProps
}: ButtonProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(
    Box,
    {
      ...boxProps,
      as: as || 'button',
      py: 'xxs',
      px: 'm',
      className: classNames(
        boxProps?.className,
        'button',
        {
          [`button--${variant}`]: variant,
        }
        /*typographySystemClassName({ size: 'xs', })*/
      ),
    },
    children
  );
