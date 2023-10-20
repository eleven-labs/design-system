import './Button.scss';

import classNames from 'classnames';
import * as React from 'react';

import { Box } from '@/components';
import { polyRef } from '@/helpers/polyRef';
import { SpacingSystemProps } from '@/types';

export const buttonVariant = ['primary', 'secondary'] as const;
export type ButtonVariantType = (typeof buttonVariant)[number];

export interface ButtonProps extends SpacingSystemProps {
  className?: string;
  variant?: ButtonVariantType;
  isChoiceChip?: boolean;
  children: React.ReactNode;
}

export const Button = polyRef<'button', ButtonProps>(
  ({ as = 'button', variant = 'primary', isChoiceChip = false, className, children, ...props }, ref) => (
    <Box
      {...props}
      as={as}
      ref={ref}
      textSize="s"
      data-text={typeof children === 'string' ? children : ''}
      className={classNames(
        'button',
        {
          [`button--${variant}`]: variant,
          [`button--choice-chip`]: isChoiceChip,
        },
        className
      )}
    >
      {children}
    </Box>
  )
);

Button.displayName = 'Button';
