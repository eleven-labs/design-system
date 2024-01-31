import React from 'react';

import type {
  HomeIntroBlockProps,
  LastArticlesBlockProps,
  LastTutorialsBlockProps,
  NewsletterCardProps,
} from '@/components';
import { Box, HomeIntroBlock, LastArticlesBlock, LastTutorialsBlock, NewsletterCard } from '@/components';

export type HomePageProps = {
  homeIntroBlock: HomeIntroBlockProps;
  lastArticlesBlock: LastArticlesBlockProps;
  lastTutorialsBlock?: LastTutorialsBlockProps;
  newsletterCard: NewsletterCardProps;
};

export const HomePage: React.FC<HomePageProps> = ({
  homeIntroBlock,
  lastArticlesBlock,
  lastTutorialsBlock,
  newsletterCard,
}) => (
  <>
    <HomeIntroBlock py={{ xs: '0', md: 'xl' }} {...homeIntroBlock} />
    <LastArticlesBlock {...lastArticlesBlock} />
    {lastTutorialsBlock && <LastTutorialsBlock {...lastTutorialsBlock} />}
    <Box my="xl" mx={{ xs: 's', md: 'auto' }} width={{ md: 'content-container' }}>
      <NewsletterCard variant="horizontal" {...newsletterCard} />
    </Box>
  </>
);
