import type { Meta, StoryObj } from '@storybook/react';

import * as PostCardStories from '@/components/Molecules/Cards/PostCard/PostCard.stories';

import { LastArticlesBlock } from './LastArticlesBlock';

import type { LastArticlesBlockProps } from './LastArticlesBlock';

const meta: Meta<typeof LastArticlesBlock> = {
  component: LastArticlesBlock,
  args: {
    title: 'Nos articles récents autour des dernières tendances technologiques',
    posts: Array.from({ length: 4 }).map((_) => PostCardStories.Overview.args as LastArticlesBlockProps['posts'][0]),
    linkSeeMore: { label: 'Voir tous les articles', href: '#' },
  },
};

export default meta;
type Story = StoryObj<typeof LastArticlesBlock>;

export const Overview: Story = {};
