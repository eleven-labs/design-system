import classNames from 'classnames';
import * as React from 'react';

import { Box, BoxProps } from '@/components';
import { flexOrGridItemSystemProps } from '@/constants';
import { classNamesWithModifiers, flexOrGridBoxItemClassName, omitSystemProps } from '@/helpers/systemPropsHelper';
import type { FlexBasisType, FlexOrGridBoxItemSystemProps, TypeWithMediaQueriesType } from '@/types';
import { MediaQueryType } from '@/types';

export type FlexItemProps<C extends React.ElementType = 'div'> = {
  /**
   * Defines a flex basis, auto or number (including breakpoints modifiers)
   */
  basis?: FlexBasisType | TypeWithMediaQueriesType<FlexBasisType>;
} & BoxProps<C> &
  FlexOrGridBoxItemSystemProps;

export const FlexItem = <C extends React.ElementType = 'div'>({
  basis,
  children,
  as,
  ...boxProps
}: FlexItemProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(Box, {
    as: as || 'div',
    ...omitSystemProps({
      props: boxProps,
      systemPropNames: Object.keys(flexOrGridItemSystemProps),
    }),
    className: classNames(
      ...classNamesWithModifiers<MediaQueryType, FlexBasisType>({
        propValue: basis,
        className: 'basis',
      }),
      flexOrGridBoxItemClassName(boxProps),
      boxProps?.className
    ),
    children,
  });
