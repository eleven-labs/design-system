import classNames from 'classnames';
import React from 'react';

import { Box, BoxElementType } from '@/components';
import { typographySystemProps } from '@/constants';
import { omitSystemProps, typographySystemClassName } from '@/helpers/systemPropsHelper';

import { TypographyProps } from '../TypographyProps';

export type TextProps<C extends BoxElementType = 'p'> = TypographyProps<C>;

export const Text = <C extends BoxElementType = 'p'>({
  as,
  size = 'm',
  children,
  ...boxProps
}: TextProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(Box, {
    as: as || 'p',
    ...omitSystemProps({
      props: boxProps,
      systemPropNames: Object.keys(typographySystemProps),
    }),
    className: classNames(boxProps?.className, typographySystemClassName({ size, ...boxProps })),
    children,
  });
