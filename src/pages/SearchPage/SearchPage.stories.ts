import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import type { PostCardListProps } from '@/components';
import { PostCardList } from '@/components';
import NewsletterCardStories from '@/components/Molecules/Cards/NewsletterCard/NewsletterCard.stories';
import * as PostCardListStories from '@/components/Organisms/PostCardList/PostCardList.stories';
import type { CategoryPageProps } from '@/pages/CategoryPage';
import { LayoutTemplateDecorator } from '@/storybook/decorators';

import { SearchPage } from './SearchPage';

const meta: Meta<typeof SearchPage> = {
  component: SearchPage,
  args: {
    title: '26 résultats',
    description: 'triés par pertinence',
    postCardList: React.createElement<PostCardListProps>(PostCardList, {
      ...PostCardListStories.default.args,
      ...PostCardListStories.WithPagination.args,
    } as PostCardListProps),
    newsletterCard: NewsletterCardStories.args as CategoryPageProps['newsletterCard'],
    isLoading: false,
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
type Story = StoryObj<typeof SearchPage>;

export const Overview: Story = {};

export const SearchPageIsLoading: Story = {};
SearchPageIsLoading.args = {
  isLoading: true,
  postCardList: React.createElement<PostCardListProps>(PostCardList, {
    posts: Array.from({ length: 6 }),
    isLoading: true,
  } as PostCardListProps),
};

export const SearchPageWithNoResult: Story = {};
SearchPageWithNoResult.args = {
  isLoading: false,
  searchNotFound: {
    title: 'Aucun résultat en vue...',
    description: 'Vérifiez les termes de votre recherche avant de réessayer',
  },
  postCardList: React.createElement<PostCardListProps>(PostCardList, {
    posts: [],
  } as PostCardListProps),
};
