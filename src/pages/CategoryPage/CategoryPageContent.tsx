import React from 'react';

import { Box, Heading } from '@/components';
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
    <Heading size="m" mb="l" color="primary">
      {title}
    </Heading>
    {postCardList}
    {categoryEndingBlock && (
      <>
        <Divider mt="m" />
        <CategoryEndingBlock mt="l" {...categoryEndingBlock} />
      </>
    )}
  </Box>
);
