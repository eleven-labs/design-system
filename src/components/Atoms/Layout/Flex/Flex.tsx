import * as React from 'react';

import { Box, BoxProps } from '@/components';
import { forwardRef } from '@/helpers/systemPropsHelper';
import { As, DisplayType, TypeWithMediaQueriesType } from '@/types';

export type FlexProps<T extends As = 'div'> = Omit<BoxProps<T>, 'display'> & {
  display?: TypeWithMediaQueriesType<Extract<DisplayType, 'flex' | 'inline-flex'>>;
};

export const Flex = forwardRef<FlexProps, 'div'>(({ as = 'div', display = 'flex', ...props }, ref) => (
  <Box {...props} ref={ref} as={as} display={display} />
));
