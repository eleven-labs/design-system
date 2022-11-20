import classNames from 'classnames';
import React from 'react';

import { Box } from '@/components';
import { typographySystemProps } from '@/constants';
import { omitSystemProps, typographySystemClassName } from '@/helpers/systemPropsHelper';
import type { HeadingSizeType, TypographySystemProps } from '@/types';

import type { TypographyProps } from '../TypographyProps';

export type HeadingHTMLElementType = keyof Pick<
  JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'div'
>;

export type HeadingProps<C extends HeadingHTMLElementType = 'h1'> = TypographyProps<C, HeadingSizeType>;

export const Heading = <C extends HeadingHTMLElementType = 'h1'>({
  as,
  size = 'l',
  children,
  ...boxProps
}: HeadingProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(Box, {
    ...omitSystemProps({
      props: boxProps,
      systemPropNames: Object.keys(typographySystemProps),
    }),
    as: as || 'h1',
    className: classNames(
      boxProps?.className,
      typographySystemClassName<TypographySystemProps<HeadingSizeType>>({ isHeading: true, size, ...boxProps })
    ),
    children,
  });
