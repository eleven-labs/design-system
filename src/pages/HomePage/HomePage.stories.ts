import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import type { PostCardListProps } from '@/components';
import { PostCardList } from '@/components';
import HomeIntroBlockStories from '@/components/Molecules/Blocks/HomeIntroBlock/HomeIntroBlock.stories';
import NewsletterCardStories from '@/components/Molecules/Cards/NewsletterCard/NewsletterCard.stories';
import * as PostCardListStories from '@/components/Organisms/PostCardList/PostCardList.stories';
import type { CategoryPageProps } from '@/pages/CategoryPage';
import { LayoutTemplateDecorator } from '@/storybook/decorators';

import { HomePage } from './HomePage';

import type { HomePageProps } from './HomePage';

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  args: {
    homeIntroBlock: HomeIntroBlockStories.args as HomePageProps['homeIntroBlock'],
    title: 'Tous nos articles',
    postCardList: React.createElement<PostCardListProps>(PostCardList, {
      ...PostCardListStories.default.args,
      ...PostCardListStories.WithPagination.args,
    } as PostCardListProps),
    newsletterCard: NewsletterCardStories.args as CategoryPageProps['newsletterCard'],
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
  decorators: [LayoutTemplateDecorator],
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Overview: Story = {};
