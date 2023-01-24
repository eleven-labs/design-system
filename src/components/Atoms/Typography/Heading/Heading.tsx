import classNames from 'classnames';
import React from 'react';

import { Typography, TypographyProps } from '@/components';
import { HeadingSizeType } from '@/types';

export type HeadingProps<C extends React.ElementType = 'h1'> = TypographyProps<C> & {
  size?: HeadingSizeType;
};

export const Heading = <C extends React.ElementType = 'h1'>({
  as,
  size,
  children,
  ...boxProps
}: HeadingProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(
    Typography,
    {
      as: as || 'h1',
      ...boxProps,
      className: classNames(
        {
          [`heading-${size}`]: Boolean(size),
        },
        boxProps?.className
      ),
    },
    children
  );

Heading.displayName = 'Heading';
