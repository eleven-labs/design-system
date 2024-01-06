import React from 'react';

import type { FlexProps } from '@/components';
import { Box, Flex } from '@/components';

import './BurgerButton.scss';

export interface BurgerButtonProps extends FlexProps, React.ComponentPropsWithoutRef<'button'> {}

export const BurgerButton: React.FC<BurgerButtonProps> = (props) => (
  <Flex as="button" flexDirection="column" gap="xxs" className="burger-button" {...props}>
    <Box className="burger-button__line" />
    <Box className="burger-button__line" />
    <Box className="burger-button__line" />
  </Flex>
);
