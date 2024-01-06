import React from 'react';

import { Text } from '@/components';
import type { HomeIntroBlockProps } from '@/components';
import { HomeIntroBlock } from '@/components';
import { NewsletterCard, type NewsletterCardProps } from '@/components/Molecules/Cards/NewsletterCard';
import { LayoutContentWithSidebar } from '@/templates/LayoutContentWithSidebar';

export type HomePageProps = {
  homeIntroBlock: HomeIntroBlockProps;
  title: React.ReactNode;
  postCardList: React.ReactNode;
  newsletterCard: NewsletterCardProps;
};

export const HomePage: React.FC<HomePageProps> = ({ homeIntroBlock, title, postCardList, newsletterCard }) => (
  <>
    <HomeIntroBlock {...homeIntroBlock} />
    <LayoutContentWithSidebar
      content={
        <>
          <Text size="m" mb="l" fontWeight="medium">
            {title}
          </Text>
          {postCardList}
        </>
      }
      sidebar={<NewsletterCard {...newsletterCard} />}
    />
  </>
);
