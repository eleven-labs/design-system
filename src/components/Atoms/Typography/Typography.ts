import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps } from '@/components';
import { typographySystemProps } from '@/constants';
import { omitSystemProps, typographySystemClassName } from '@/helpers/systemPropsHelper';
import { TypographySystemProps } from '@/types';

export type TypographyProps<C extends React.ElementType = 'p'> = BoxProps<C> & TypographySystemProps;

export const Typography = <C extends React.ElementType = 'p'>({
  as,
  children,
  ...boxProps
}: TypographyProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(
    Box,
    {
      as: as || 'p',
      ...omitSystemProps({
        props: boxProps,
        systemPropNames: Object.keys(typographySystemProps),
      }),
      className: classNames(typographySystemClassName(boxProps), boxProps?.className),
    },
    children
  );

Typography.displayName = 'Typography';
