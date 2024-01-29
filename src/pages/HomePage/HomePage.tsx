import React from 'react';

import type { HomeIntroBlockProps } from '@/components';
import { Box } from '@/components';
import { HomeIntroBlock } from '@/components';
import { NewsletterCard, type NewsletterCardProps } from '@/components/Molecules/Cards/NewsletterCard';
import type { LastArticlesBlockProps } from '@/components/Organisms/Blocks/LastArticlesBlock/LastArticlesBlock';
import { LastArticlesBlock } from '@/components/Organisms/Blocks/LastArticlesBlock/LastArticlesBlock';
import type { LastTutorialsBlockProps } from '@/components/Organisms/Blocks/LastTutorialsBlock/LastTutorialsBlock';
import { LastTutorialsBlock } from '@/components/Organisms/Blocks/LastTutorialsBlock/LastTutorialsBlock';

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
    <HomeIntroBlock {...homeIntroBlock} />
    <LastArticlesBlock {...lastArticlesBlock} />
    {lastTutorialsBlock && <LastTutorialsBlock {...lastTutorialsBlock} />}
    <Box my="xl" mx={{ xs: 's', md: 'auto' }} width={{ md: 'content-container' }}>
      <NewsletterCard variant="horizontal" {...newsletterCard} />
    </Box>
  </>
);
