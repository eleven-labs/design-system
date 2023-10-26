import classNames from 'classnames';
import * as React from 'react';

import type { BoxProps } from '@/components';
import { Box } from '@/components';
import { polyRef } from '@/helpers/polyRef';
import type { HeadingSizeType, TypographySystemProps } from '@/types';

export interface HeadingProps extends BoxProps, TypographySystemProps {
  size?: HeadingSizeType;
}

export const Heading = polyRef<'h1', HeadingProps>(({ as = 'h1', size, children, className, ...props }, ref) => (
  <Box {...props} as={as} ref={ref} className={classNames({ [`heading-${size}`]: Boolean(size) }, className)}>
    {children}
  </Box>
));

Heading.displayName = 'Heading';
