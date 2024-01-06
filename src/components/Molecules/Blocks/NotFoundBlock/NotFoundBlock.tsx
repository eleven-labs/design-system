import React from 'react';

import type { FlexProps } from '@/components';
import { Flex, Heading, Text } from '@/components';
import { getCdnAssetsFile } from '@/helpers/getCdnAssetsFile';

export type NotFoundBlockOptions = {
  title: React.ReactNode;
  description: React.ReactNode;
};

export type NotFoundBlockProps = Omit<FlexProps, 'title'> & NotFoundBlockOptions;

export const NotFoundBlock: React.FC<NotFoundBlockProps> = ({ title, description, ...props }) => (
  <Flex {...props} flexDirection="column" alignItems="center">
    <img src={getCdnAssetsFile('/imgs/not-found.png')} alt="not-found" />
    <Heading as="p" size="l" mt="s">
      {title}
    </Heading>
    <Text size="s" mt="xxs">
      {description}
    </Text>
  </Flex>
);
