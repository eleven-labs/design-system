import React from 'react';

import type { BoxProps, BreadcrumbProps } from '@/components';
import { Breadcrumb } from '@/components';
import { Box, Flex, Heading, Text } from '@/components';

import './CategoryIntroBlock.scss';

export interface CategoryIntroBlockProps extends BoxProps {
  title: React.ReactNode;
  description: React.ReactNode;
  breadcrumb: BreadcrumbProps;
}

export const CategoryIntroBlock: React.FC<CategoryIntroBlockProps> = ({ title, description, breadcrumb, ...props }) => (
  <Box {...props} className="category-intro-block" color="white">
    <Flex
      justifyContent="center"
      alignItems="center"
      px={{ xs: 'l', md: '0' }}
      className="category-intro-block__container"
    >
      <Box width="content-container" pt="m" pb="xxl">
        <Breadcrumb {...breadcrumb} />
        <Heading mt="xl" size="xl">
          {title}
        </Heading>
        <Text mt="l">{description}</Text>
      </Box>
    </Flex>
  </Box>
);
