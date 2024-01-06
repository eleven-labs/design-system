import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import type { PostCardListProps } from '@/components';
import { Box } from '@/components';
import PaginationStories from '@/components/Molecules/Pagination/Pagination.stories';

import { PostCardList } from './PostCardList';

const meta: Meta<typeof PostCardList> = {
  component: PostCardList,
  args: {
    posts: Array.from({ length: 7 }).map((_, index) => ({
      contentType: 'article',
      slug: `slug-${index}`,
      title: `Titre de l'article ${index + 1}`,
      date: '09 fév. 2021',
      readingTime: 24,
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.',
    })),
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
