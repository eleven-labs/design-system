import React from 'react';

import { Box, NotFoundBlock, Skeleton, Text } from '@/components';
import type { NotFoundBlockProps } from '@/components';
import { NewsletterCard, type NewsletterCardProps } from '@/components/Molecules/Cards/NewsletterCard';
import { LayoutContentWithSidebar } from '@/templates/LayoutContentWithSidebar';

export type SearchPageProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  postCardList: React.ReactNode;
  newsletterCard: NewsletterCardProps;
  searchNotFound?: NotFoundBlockProps;
  isLoading?: boolean;
};

export const SearchPage: React.FC<SearchPageProps> = ({
  title,
  description,
  postCardList,
  newsletterCard,
  searchNotFound,
  isLoading = false,
}) => (
  <>
    <LayoutContentWithSidebar
      content={
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
        )
      }
      sidebar={<NewsletterCard {...newsletterCard} />}
    />
  </>
);
