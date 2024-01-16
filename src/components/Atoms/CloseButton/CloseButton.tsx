import classNames from 'classnames';
import React from 'react';

import type { FlexProps } from '@/components';
import { Box, Flex } from '@/components';
import type { ComponentPropsWithoutRef } from '@/types';

import './CloseButton.scss';

export const closeButtonVariant = ['primary', 'secondary'] as const;
export type CloseButtonVariantType = (typeof closeButtonVariant)[number];

export interface CloseButtonProps extends FlexProps, ComponentPropsWithoutRef<'button'> {
  variant?: CloseButtonVariantType;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ variant, ...props }) => (
  <Flex
    as="button"
    {...props}
    flexDirection="column"
    gap="xxs"
    className={classNames('close-button', { [`close-button--${variant}`]: variant })}
  >
    <Box className="close-button__line close-button__line--horizontal" />
    <Box className="close-button__line close-button__line--vertical" />
  </Flex>
);
