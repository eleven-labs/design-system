import React from 'react';

import type { BoxProps } from '@/components';
import { Box, Flex, Heading, Link, Text } from '@/components';

import './CategoryIntroBlock.scss';

export interface CategoryIntroBlockProps extends BoxProps {
  name: string;
  title: string;
  description: string;
  homeLink: { label: string } & React.ComponentPropsWithoutRef<'a'>;
}

export const CategoryIntroBlock: React.FC<CategoryIntroBlockProps> = ({
  name,
  title,
  description,
  homeLink: { label: homeLinkLabel, ...homeLink },
  ...props
}) => (
  <Box {...props} className="category-intro-block" color="white">
    <Flex justifyContent="center" alignItems="center" className="category-intro-block__container">
      <Box pt="m" pb="xxl" px="l">
        <Flex gap="xxs-3">
          <Link {...homeLink}>{homeLinkLabel}</Link>
          <Text>{'>'}</Text>
          <Text>{name}</Text>
        </Flex>
        <Heading mt="xl" size="xl" textTransform="uppercase" dangerouslySetInnerHTML={{ __html: title }} />
        <Text mt="l" dangerouslySetInnerHTML={{ __html: description }} />
      </Box>
    </Flex>
  </Box>
);
