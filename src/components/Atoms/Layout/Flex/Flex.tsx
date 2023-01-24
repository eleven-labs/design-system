import classNames from 'classnames';
import * as React from 'react';

import { Box, BoxProps } from '@/components';
import { flexOrGridBoxSystemProps } from '@/constants';
import { classNamesWithModifiers, flexOrGridBoxClassName, omitSystemProps } from '@/helpers/systemPropsHelper';
import type { FlexDirectionType, FlexOrGridBoxSystemProps, FlexWrapType, TypeWithMediaQueriesType } from '@/types';
import { MediaQueryType } from '@/types';

export type FlexProps<C extends React.ElementType = 'div'> = {
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
} & BoxProps<C> &
  FlexOrGridBoxSystemProps;

export const Flex = <C extends React.ElementType = 'div'>({
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
      ...omitSystemProps({
        props: boxProps,
        systemPropNames: Object.keys(flexOrGridBoxSystemProps),
      }),
      className: classNames(
        ...classNamesWithModifiers<MediaQueryType, boolean>({
          propValue: inline,
          className: inline ? 'inline-flex' : 'flex',
        }),
        ...classNamesWithModifiers<MediaQueryType, FlexDirectionType>({
          propValue: direction,
          className: 'flex',
        }),
        ...classNamesWithModifiers<MediaQueryType, FlexWrapType>({
          propValue: wrap,
          className: 'flex',
        }),
        flexOrGridBoxClassName(boxProps),
        boxProps?.className
      ),
    },
    children
  );
