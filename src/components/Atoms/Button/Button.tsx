import './Button.scss';

import classNames from 'classnames';
import React from 'react';

import { Box } from '@/components';
import { forwardRef } from '@/helpers/systemPropsHelper';
import { As, AsProps, SpacingSystemProps } from '@/types';

export const buttonVariant = ['primary', 'secondary'] as const;
export type ButtonVariantType = (typeof buttonVariant)[number];

export type ButtonOptions = {
  variant?: ButtonVariantType;
  isChoiceChip?: boolean;
};

export type ButtonProps<T extends As = 'button'> = AsProps<T> & SpacingSystemProps & ButtonOptions;

export const Button = forwardRef<ButtonProps, 'button'>(
  ({ as = 'button', variant = 'primary', isChoiceChip = false, children, ...props }, ref) => (
    <Box
      {...(props as AsProps)}
      as={as}
      ref={ref}
      textSize="s"
      className={classNames(
        'button',
        {
          [`button--${variant}`]: variant,
          [`button--choice-chip`]: isChoiceChip,
        },
        props.className
      )}
    >
      {children}
    </Box>
  )
);

Button.displayName = 'Button';
