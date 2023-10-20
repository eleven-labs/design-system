import * as React from 'react';

import { Box, BoxProps } from '@/components';
import { polyRef } from '@/helpers/polyRef';
import { TextSizeType } from '@/types';

export interface TextProps extends BoxProps {
  size?: TextSizeType;
}

export const Text = polyRef<'p', TextProps>(({ as = 'p', size, children, ...props }, ref) => (
  <Box {...props} as={as} ref={ref} textSize={size}>
    {children}
  </Box>
));

Text.displayName = 'Text';
