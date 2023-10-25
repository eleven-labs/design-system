import classNames from 'classnames';
import * as React from 'react';

import { Box, BoxProps } from '@/components';
import { polyRef } from '@/helpers/polyRef';
import { TextSizeType, TypographySystemProps } from '@/types';

export interface TextProps extends BoxProps, TypographySystemProps {
  size?: TextSizeType;
}

export const Text = polyRef<'p', TextProps>(({ as = 'p', size, className, children, ...props }, ref) => (
  <Box {...props} as={as} ref={ref} className={classNames({ [`text-${size}`]: Boolean(size) }, className)}>
    {children}
  </Box>
));

Text.displayName = 'Text';
