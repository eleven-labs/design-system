import classNames from 'classnames';
import React from 'react';

import type { BoxProps } from '@/components';
import { Box } from '@/components';
import { polyRef } from '@/helpers/polyRef';

import './Blockquote.scss';

export interface BlockquoteProps extends BoxProps {}

export const Blockquote = polyRef<'blockquote', BlockquoteProps>(
  ({ as = 'blockquote', children, className, ...props }, ref) => (
    <Box {...props} as={as} ref={ref} className={classNames('blockquote', className)}>
      {children}
    </Box>
  )
);
