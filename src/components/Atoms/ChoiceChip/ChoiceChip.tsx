import './ChoiceChip.scss';

import classNames from 'classnames';
import * as React from 'react';

import { Box } from '@/components';
import { MarginSystemProps, PolymorphicProps } from '@/types';

export type ChoiceChipProps<C extends React.ElementType = 'button'> = {
  isActive?: boolean;
} & PolymorphicProps<C> &
  MarginSystemProps;

export const ChoiceChip = <C extends React.ElementType = 'button'>({
  as,
  isActive = false,
  children,
  ...boxProps
}: ChoiceChipProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(
    Box,
    {
      ...boxProps,
      as: as || 'button',
      className: classNames(
        'choice-chip',
        {
          'choice-chip--is-active': isActive,
        },
        boxProps?.className
      ),
    },
    children
  );
