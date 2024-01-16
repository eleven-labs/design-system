import classNames from 'classnames';
import React from 'react';

import { Box } from '@/components';
import type { ComponentPropsWithoutRef, MarginSystemProps } from '@/types';

import './Blockquote.scss';

export interface BlockquoteProps extends MarginSystemProps, Omit<ComponentPropsWithoutRef<'blockquote'>, 'align'> {}

export const Blockquote: React.FC<BlockquoteProps> = ({ children, className, ...props }) => (
  <Box as="blockquote" {...props} pl="m" italic className={classNames('blockquote', className)}>
    {children}
  </Box>
);
