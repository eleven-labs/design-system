import React from 'react';

import { BoxElementType, Flex, Icons, Text } from '@/components';
import { MarginSystemProps, PolymorphicProps } from '@/types';

export type BackLinkProps<C extends BoxElementType = 'a'> = {
  label: string;
} & Omit<PolymorphicProps<C>, 'color'> &
  MarginSystemProps;

export const BackLink: React.FC<BackLinkProps> = ({ as, label, ...linkProps }) => (
  <Flex as={as || 'a'} alignItems="center" mb="m" color="amaranth" {...linkProps}>
    <Icons.Back width="18px" height="18px" />
    <Text as="span" size="s" ml={{ xs: 'xxs' }} weight="medium" textTransform="capitalize">
      {label}
    </Text>
  </Flex>
);
