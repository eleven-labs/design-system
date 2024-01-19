import React from 'react';

import type { FlexProps } from '@/components';
import { Flex, Heading, Text } from '@/components';

export type NotFoundBlockOptions = {
  title: React.ReactNode;
  description: React.ReactNode;
};

export type NotFoundBlockProps = Omit<FlexProps, 'title'> & NotFoundBlockOptions;

export const NotFoundBlock: React.FC<NotFoundBlockProps> = ({ title, description, ...props }) => (
  <Flex {...props} flexDirection="column" alignItems="center">
    <img src="/imgs/not-found.png" alt="not-found" />
    <Heading size="xl" mt="s">
      {title}
    </Heading>
    <Text size="s" mt="xxs">
      {description}
    </Text>
  </Flex>
);
