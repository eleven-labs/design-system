import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PostHeader } from './PostHeader';

export default {
  title: 'Components/Molecules/Post/PostHeader',
  component: PostHeader,
  args: {
    title: 'Refonte du blog',
    date: '08 fév. 2021',
    readingTime: '24mn',
    authors: [
      {
        username: 'jdoe',
        nameWithInitial: 'J. Doe',
      },
      {
        username: 'jdupont',
        nameWithInitial: 'J. Dupont',
      },
    ],
    authorLinkProps: () => ({}),
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof PostHeader>;

const Template: ComponentStory<typeof PostHeader> = (args) => <PostHeader {...args} />;

export const Overview = Template.bind({});
