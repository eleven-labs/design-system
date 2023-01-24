import React from 'react';

import { Box, BoxProps, Heading, Text } from '@/components';

export interface SearchNotFoundProps extends BoxProps {
  title: string;
  description: string;
}

export const SearchNotFound: React.FC<SearchNotFoundProps> = ({ title, description, ...boxProps }) => (
  <Box {...boxProps} textAlign="center">
    <img src="/imgs/search.png" alt="" />
    <Heading size="m" weight="medium" mt={{ xs: 's' }}>
      {title}
    </Heading>
    <Text size="xs" mt={{ xs: 'xxs' }}>
      {description}
    </Text>
  </Box>
);
