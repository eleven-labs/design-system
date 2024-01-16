import type { Meta, StoryObj } from '@storybook/react';

import { LastArticlesBlock } from './LastArticlesBlock';

const meta: Meta<typeof LastArticlesBlock> = {
  component: LastArticlesBlock,
  args: {
    title: 'Nos articles récents autour des dernières tendances technologiques',
    posts: Array.from({ length: 4 }).map((_, index) => ({
      contentType: 'article',
      slug: `slug-${index}`,
      title: `Titre de l'article ${index + 1}`,
      date: '09 fév. 2021',
      readingTime: 24,
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.',
    })),
    linkSeeMore: { label: 'Voir tous les articles', href: '#' },
  },
};

export default meta;
type Story = StoryObj<typeof LastArticlesBlock>;

export const Overview: Story = {};
