import React from 'react';

import type { BoxProps, BreadcrumbProps } from '@/components';
import { Breadcrumb } from '@/components';
import { Box, Flex, Heading, Text } from '@/components';

import './CategoryIntroBlock.scss';

export interface CategoryIntroBlockProps extends BoxProps {
  title: string;
  description: string;
  breadcrumb: BreadcrumbProps;
}

export const CategoryIntroBlock: React.FC<CategoryIntroBlockProps> = ({ title, description, breadcrumb, ...props }) => (
  <Box {...props} className="category-intro-block" color="white">
    <Flex justifyContent="center" alignItems="center" className="category-intro-block__container">
      <Box width="content-container" pt="m" pb="xxl">
        <Breadcrumb {...breadcrumb} />
        <Heading mt="xl" size="xl" textTransform="uppercase" dangerouslySetInnerHTML={{ __html: title }} />
        <Text mt="l" dangerouslySetInnerHTML={{ __html: description }} />
      </Box>
    </Flex>
  </Box>
);
