import classNames from 'classnames';
import React from 'react';

import { Box, BoxElementType, BoxProps } from '@/components';
import { classNamesWithMediaQueries, omitSystemProps } from '@/helpers/systemPropsHelper';
import { flexOrGridBoxClassName } from '@/helpers/systemPropsHelper';
import type { FlexDirectionType, FlexOrGridBoxSystemProps, FlexWrapType, TypeWithMediaQueriesType } from '@/types';

export type FlexProps<C extends BoxElementType = 'div'> = {
  /**
   * Defines a flex container, inline-flex or flex (including breakpoints modifiers)
   */
  inline?: boolean | TypeWithMediaQueriesType<boolean>;
  /**
   * flex-direction (including breakpoints modifiers)
   */
  direction?: FlexDirectionType | TypeWithMediaQueriesType<FlexDirectionType>;
  /**
   * Can flex items wrap onto multiple lines (including breakpoints modifiers)
   */
  wrap?: FlexWrapType | TypeWithMediaQueriesType<FlexWrapType>;
  children?: React.ReactNode;
} & BoxProps<C> &
  FlexOrGridBoxSystemProps;

export const Flex = <C extends BoxElementType = 'div'>({
  inline = false,
  direction,
  wrap,
  as,
  children,
  ...boxProps
}: FlexProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(
    Box,
    {
      as: as || 'div',
      ...omitSystemProps({ props: boxProps, systemPropNames: Object.keys([]) }),
      className: classNames(
        ...classNamesWithMediaQueries<boolean>({
          propValue: inline,
          className: inline ? 'inline-flex' : 'flex',
        }),
        ...classNamesWithMediaQueries<FlexDirectionType>({
          propValue: direction,
          className: 'flex',
          withSuffixPropValue: true,
        }),
        ...classNamesWithMediaQueries<FlexWrapType>({
          propValue: wrap,
          className: 'flex',
          withSuffixPropValue: true,
        }),
        flexOrGridBoxClassName(boxProps)
      ),
    },
    children
  );
