import * as React from 'react';

import { Box, BoxProps } from '@/components';
import { polyRef } from '@/helpers/polyRef';
import { DisplayType, TypeWithMediaQueriesType } from '@/types';

export interface FlexProps extends Omit<BoxProps, 'display'> {
  display?: TypeWithMediaQueriesType<Extract<DisplayType, 'flex' | 'inline-flex'>>;
}

export const Flex = polyRef<'div', FlexProps>(({ as = 'div', display = 'flex', children, ...props }, ref) => (
  <Box {...props} ref={ref} as={as} display={display}>
    {children}
  </Box>
));
