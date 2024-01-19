import classNames from 'classnames';
import * as React from 'react';

import type { FlexProps } from '@/components';
import { Flex } from '@/components';
import { Icon } from '@/components';
import { Text } from '@/components';
import { polyRef } from '@/helpers/polyRef';

import './Button.scss';

export const buttonVariant = ['primary', 'secondary', 'accent'] as const;
export type ButtonVariantType = (typeof buttonVariant)[number];

export interface ButtonProps extends FlexProps {
  className?: string;
  variant?: ButtonVariantType;
  isChoiceChip?: boolean;
  children: React.ReactNode;
}

export const Button = polyRef<'button', ButtonProps>(
  ({ as = 'button', variant = 'primary', isChoiceChip = false, className, children, ...props }, ref) => (
    <Flex
      {...props}
      display="inline-flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      as={as}
      ref={ref}
      px="m"
      py="xs"
      size="s"
      fontWeight="bold"
      textTransform="uppercase"
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
      <Text as="span">{children}</Text>
      <Icon name="arrow" />
    </Flex>
  )
);

Button.displayName = 'Button';
