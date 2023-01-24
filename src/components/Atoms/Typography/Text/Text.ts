import classNames from 'classnames';
import React from 'react';

import { Typography, TypographyProps } from '@/components';
import { TextSizeType } from '@/types';

export type TextProps<C extends React.ElementType = 'p'> = TypographyProps<C> & {
  size?: TextSizeType;
};

export const Text = <C extends React.ElementType = 'p'>({
  as,
  size,
  children,
  ...boxProps
}: TextProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(
    Typography,
    {
      as: as || 'p',
      ...boxProps,
      className: classNames(
        {
          [`text-${size}`]: Boolean(size),
        },
        boxProps?.className
      ),
    },
    children
  );

Text.displayName = 'Text';
