import classNames from 'classnames';
import * as React from 'react';

import type { BoxProps } from '@/components';
import { Box } from '@/components';
import { flexOrGridSystemProps, flexSystemProps } from '@/constants';
import { polyRef } from '@/helpers/polyRef';
import { flexOrGridSystemClassName, flexSystemClassName, omitSystemProps } from '@/helpers/systemPropsHelper';
import type { DisplayType, FlexOrGridSystemProps, FlexSystemProps, TypeWithMediaQueriesType } from '@/types';

export interface FlexProps extends Omit<BoxProps, 'display'>, FlexOrGridSystemProps, FlexSystemProps {
  display?: TypeWithMediaQueriesType<Extract<DisplayType, 'flex' | 'inline-flex'>>;
}

export const Flex = polyRef<'div', FlexProps>(
  ({ as = 'div', display = 'flex', className, children, ...props }, ref) => (
    <Box
      {...omitSystemProps({ props, systemPropNames: Object.keys({ ...flexOrGridSystemProps, ...flexSystemProps }) })}
      ref={ref}
      as={as}
      display={display}
      className={classNames(flexOrGridSystemClassName(props), flexSystemClassName(props), className)}
    >
      {children}
    </Box>
  )
);
