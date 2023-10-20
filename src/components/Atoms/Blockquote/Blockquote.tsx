import './Blockquote.scss';

import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps } from '@/components';
import { polyRef } from '@/helpers/polyRef';

export interface BlockquoteProps extends BoxProps {}

export const Blockquote = polyRef<'blockquote', BlockquoteProps>(({ as, children, className, ...props }) => (
  <Box {...props} as="blockquote" className={classNames('blockquote', className)}>
    {children}
  </Box>
));
