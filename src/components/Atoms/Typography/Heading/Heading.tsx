import classNames from 'classnames';
import * as React from 'react';

import { Box, BoxProps } from '@/components';
import { polyRef } from '@/helpers/polyRef';
import { HeadingSizeType } from '@/types';

export interface HeadingProps extends BoxProps {
  size?: HeadingSizeType;
}

export const Heading = polyRef<'h1', HeadingProps>(({ as = 'h1', size, children, ...props }, ref) => (
  <Box {...props} as={as} ref={ref} className={classNames({ [`heading-${size}`]: Boolean(size) }, props?.className)}>
    {children}
  </Box>
));

Heading.displayName = 'Heading';
