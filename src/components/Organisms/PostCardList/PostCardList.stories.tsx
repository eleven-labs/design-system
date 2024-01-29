import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import type { PostCardListProps } from '@/components';
import { Box } from '@/components';
import * as PostCardStories from '@/components/Molecules/Cards/PostCard/PostCard.stories';
import PaginationStories from '@/components/Molecules/Pagination/Pagination.stories';

import { PostCardList } from './PostCardList';

const meta: Meta<typeof PostCardList> = {
  component: PostCardList,
  args: {
    posts: Array.from({ length: 7 }).map(() => PostCardStories.Overview.args as PostCardListProps['posts'][0]),
    isLoading: false,
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
  decorators: [
    (Story): React.ReactElement => (
      <Box p="s" style={{ maxWidth: '764px', margin: 'var(--spacing-l) auto' }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PostCardList>;

export const Overview: Story = {};

export const WithIsLoading: Story = {};
WithIsLoading.args = {
  isLoading: true,
  posts: Array.from({ length: 6 }),
};

export const WithPagination: Story = {};
WithPagination.args = {
  pagination: PaginationStories.args as PostCardListProps['pagination'],
};
