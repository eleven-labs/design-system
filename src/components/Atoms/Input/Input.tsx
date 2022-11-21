import './Input.scss';

import classNames from 'classnames';
import * as React from 'react';

import { Box } from '@/components';
import { typographySystemClassName } from '@/helpers/systemPropsHelper';
import { MarginSystemProps, PolymorphicProps } from '@/types';

export type InputProps = {
  /**
   * The input variant
   */
  variant?: 'search' | 'form';
} & Omit<PolymorphicProps<'input'>, 'color'> &
  MarginSystemProps;

export const Input: React.FC<InputProps> = ({ as, variant, children, ...boxProps }) =>
  React.createElement(
    Box,
    {
      ...boxProps,
      as: 'input',
      py: 'xs',
      px: 's',
      className: classNames(
        boxProps?.className,
        'input',
        { [`input--${variant}`]: variant },
        typographySystemClassName({
          size: 'xs',
        })
      ),
    },
    children
  );
