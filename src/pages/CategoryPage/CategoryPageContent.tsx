import React from 'react';

import { Box, Text } from '@/components';
import type { CategoryEndingBlockProps } from '@/components';
import { CategoryEndingBlock, Divider } from '@/components';

export type CategoryPageContentProps = {
  categoryEndingBlock?: CategoryEndingBlockProps;
  title: React.ReactNode;
  postCardList: React.ReactNode;
};

export const CategoryPageContent: React.FC<CategoryPageContentProps> = ({
  title,
  postCardList,
  categoryEndingBlock,
}) => (
  <Box>
    <Text size="m" mb="l" fontWeight="medium">
      {title}
    </Text>
    {postCardList}
    {categoryEndingBlock && (
      <>
        <Divider mt="m" />
        <CategoryEndingBlock mt="l" {...categoryEndingBlock} />
      </>
    )}
  </Box>
);
