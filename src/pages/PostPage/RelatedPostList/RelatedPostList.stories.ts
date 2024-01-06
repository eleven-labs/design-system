import type { Meta, StoryObj } from '@storybook/react';

import { RelatedPostList } from './RelatedPostList';

const meta: Meta<typeof RelatedPostList> = {
  component: RelatedPostList,
  args: {
    relatedPostListTitle: 'Articles sur le même thème',
    posts: Array.from({ length: 3 }).map((_, index) => ({
      slug: `titre-article-${index}`,
      title: `Titre de l'article ${index}`,
      date: '09 fév. 2021',
      readingTime: 24,
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.',
    })),
  },
};

export default meta;
type Story = StoryObj<typeof RelatedPostList>;

export const Overview: Story = {};
