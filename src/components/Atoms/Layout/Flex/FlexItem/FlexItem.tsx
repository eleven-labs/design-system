import classNames from 'classnames';
import React from 'react';

import { Box, BoxElementType, BoxProps } from '@/components';
import { flexOrGridItemSystemProps } from '@/constants';
import { classNamesWithMediaQueries, flexOrGridBoxItemClassName, omitSystemProps } from '@/helpers/systemPropsHelper';
import type { FlexBasisType, FlexOrGridBoxItemSystemProps, TypeWithMediaQueriesType } from '@/types';

export type FlexItemProps<C extends BoxElementType = 'div'> = {
  /**
   * Defines a flex basis, auto or number (including breakpoints modifiers)
   */
  basis?: FlexBasisType | TypeWithMediaQueriesType<FlexBasisType>;
  children?: React.ReactNode;
} & BoxProps<C> &
  FlexOrGridBoxItemSystemProps;

export const FlexItem = <C extends BoxElementType = 'div'>({
  basis,
  children,
  as,
  ...boxProps
}: FlexItemProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(Box, {
    as: as || 'div',
    ...omitSystemProps({ props: boxProps, systemPropNames: Object.keys(flexOrGridItemSystemProps) }),
    className: classNames(
      ...classNamesWithMediaQueries<FlexBasisType>({
        propValue: basis,
        className: 'basis',
        withSuffixPropValue: true,
      }),
      flexOrGridBoxItemClassName(boxProps)
    ),
    children,
  });
