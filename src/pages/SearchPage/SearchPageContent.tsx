import React from 'react';

import { Box, NotFoundBlock, Skeleton, Text } from '@/components';
import type { NotFoundBlockProps } from '@/components';

export type SearchPageContentProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  postCardList: React.ReactNode;
  searchNotFound?: NotFoundBlockProps;
  isLoading?: boolean;
};

export const SearchPageContent: React.FC<SearchPageContentProps> = ({
  title,
  description,
  postCardList,
  searchNotFound,
  isLoading = false,
}) =>
  !isLoading && searchNotFound ? (
    <NotFoundBlock {...searchNotFound} />
  ) : (
    <Box>
      <Skeleton isLoading={isLoading}>
        <Text size="m" fontWeight="medium">
          {title}
        </Text>
      </Skeleton>
      <Skeleton isLoading={isLoading}>
        <Text size="s" mb="l">
          {description}
        </Text>
      </Skeleton>
      {postCardList}
    </Box>
  );
