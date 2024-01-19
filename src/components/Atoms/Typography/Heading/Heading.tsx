import classNames from 'classnames';
import * as React from 'react';

import type { BoxProps } from '@/components';
import { Box } from '@/components';
import { polyRef } from '@/helpers/polyRef';
import type { HeadingSizeType } from '@/types';

export interface HeadingProps extends Omit<BoxProps, 'textSize'> {
  size?: HeadingSizeType;
}

export const Heading = polyRef<'p', HeadingProps>(({ as = 'p', size, children, className, ...props }, ref) => (
  <Box {...props} as={as} ref={ref} className={classNames({ [`heading-${size}`]: Boolean(size) }, className)}>
    {children}
  </Box>
));

Heading.displayName = 'Heading';
