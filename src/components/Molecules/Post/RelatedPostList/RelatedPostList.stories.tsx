import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RelatedPostList } from '@/components';

export default {
  title: 'Components/Molecules/Post/RelatedPostList',
  component: RelatedPostList,
  args: {
    relatedPostListTitle: 'Articles sur le même thème',
    posts: Array.from({ length: 3 }).map((_, index) => ({
      slug: `titre-article-${index}`,
      title: `Titre de l'article ${index}`,
      date: '09 fév. 2021',
      readingTime: '24mn',
      authors: [
        {
          username: 'jdoe',
          nameWithInitial: 'J. Doe',
        },
      ],
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.',
      postLinkProps: {},
    })),
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof RelatedPostList>;

const Template: ComponentStory<typeof RelatedPostList> = (args) => <RelatedPostList {...args} />;

export const Overview = Template.bind({});
