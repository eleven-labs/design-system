import classNames from 'classnames';
import * as React from 'react';

import { systemProps } from '@/constants';
import { omitSystemProps, systemClassName } from '@/helpers/systemPropsHelper';
import type { PolymorphicProps, SystemProps } from '@/types';

export type BoxElementType = keyof JSX.IntrinsicElements | React.ForwardRefExoticComponent<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export type BoxProps<C extends BoxElementType = BoxElementType> = {
  children?: React.ReactNode;
} & PolymorphicProps<C> &
  SystemProps;

export const Box = <C extends BoxElementType = 'div'>({
  as,
  children,
  ...nativeProps
}: BoxProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(as || 'div', {
    ...omitSystemProps({
      props: nativeProps,
      systemPropNames: Object.keys(systemProps),
    }),
    className: classNames(nativeProps?.className, systemClassName(nativeProps)),
    children,
  });
