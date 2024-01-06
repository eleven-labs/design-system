import classNames from 'classnames';
import * as React from 'react';

import type { BoxProps } from '@/components';
import { Box } from '@/components';
import { polyRef } from '@/helpers/polyRef';
import { flexBoxSystemClassName } from '@/helpers/systemPropsHelper';
import type { DisplayType, TypeWithMediaQueriesType } from '@/types';

export interface FlexProps extends Omit<BoxProps, 'display'> {
  display?: TypeWithMediaQueriesType<Extract<DisplayType, 'flex' | 'inline-flex'>>;
}

export const Flex = polyRef<'div', FlexProps>(
  ({ as = 'div', display = 'flex', className, children, ...props }, ref) => (
    <Box
      {...props}
      ref={ref}
      as={as}
      display={display}
      className={classNames(flexBoxSystemClassName(props), className)}
    >
      {children}
    </Box>
  )
);
