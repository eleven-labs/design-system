import React from 'react';

import type {
  HomeIntroBlockProps,
  LastArticlesBlockProps,
  LastTutorialsBlockProps,
  NewsletterCardProps,
} from '@/components';
import { HomeIntroBlock, LastArticlesBlock, LastTutorialsBlock, NewsletterCard } from '@/components';

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
    <NewsletterCard my="xl" variant="horizontal" className="container-content" {...newsletterCard} />
  </>
);
