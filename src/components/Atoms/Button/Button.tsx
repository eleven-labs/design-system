import './Button.scss';

import classNames from 'classnames';
import * as React from 'react';

import { Box, BoxElementType } from '@/components';
import { typographySystemClassName } from '@/helpers/systemPropsHelper';
import { MarginSystemProps, PolymorphicProps } from '@/types';

export type ButtonProps<C extends BoxElementType = 'button' | 'a'> = {
  /**
   * The button variant
   */
  variant?: 'primary' | 'primary-ghost' | 'form';
  children?: React.ReactNode;
} & PolymorphicProps<C> &
  MarginSystemProps;

export const Button = <C extends BoxElementType = 'button'>({
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
        },
        typographySystemClassName({
          size: 'xs',
          weight: 'medium',
        })
      ),
    },
    children
  );
