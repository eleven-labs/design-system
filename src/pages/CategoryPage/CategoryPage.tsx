import React from 'react';

import { Box, Text } from '@/components';
import type { CategoryEndingBlockProps, CategoryIntroBlockProps } from '@/components';
import { CategoryEndingBlock, CategoryIntroBlock, Divider } from '@/components';
import type { NewsletterCardProps } from '@/components/Molecules/Cards/NewsletterCard';
import { NewsletterCard } from '@/components/Molecules/Cards/NewsletterCard';
import { LayoutContentWithSidebar } from '@/templates/LayoutContentWithSidebar';

export type CategoryPageProps = {
  categoryIntroBlock: CategoryIntroBlockProps;
  categoryEndingBlock: CategoryEndingBlockProps;
  title: React.ReactNode;
  postCardList: React.ReactNode;
  newsletterCard: NewsletterCardProps;
};

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categoryIntroBlock,
  title,
  postCardList,
  categoryEndingBlock,
  newsletterCard,
}) => (
  <>
    <CategoryIntroBlock {...categoryIntroBlock} />
    <LayoutContentWithSidebar
      content={
        <Box>
          <Text size="m" mb="l" fontWeight="medium">
            {title}
          </Text>
          {postCardList}
          <Divider mt="m" />
          <CategoryEndingBlock mt="l" {...categoryEndingBlock} />
        </Box>
      }
      sidebar={<NewsletterCard {...newsletterCard} />}
    />
  </>
);
