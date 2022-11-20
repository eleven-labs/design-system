import './Divider.scss';

import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps } from '@/components';

export interface DividerProps extends BoxProps<'hr'> {
  size?: 's' | 'm' | 'l';
}

export const Divider: React.FC<DividerProps> = ({ size = 's', bg = 'light-grey', m = '0', ...boxProps }) =>
  React.createElement(Box, {
    as: 'hr',
    bg,
    m,
    className: classNames(boxProps?.className, 'divider', {
      [`divider--size-${size}`]: size,
    }),
    ...boxProps,
  });
