import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PostFooter } from './PostFooter';

export default {
  title: 'Components/Molecules/Post/PostFooter',
  component: PostFooter,
  args: {
    title: 'écrit par',
    authors: [
      {
        username: 'jdoe',
        name: 'John Doe',
        avatarImageUrl: 'https://api.dicebear.com/5.x/avataaars/svg?seed=Felix',
        description: 'Astronaute John Doe @ ElevenLabs_\uD83D\uDE80',
      },
      {
        username: 'jdupont',
        name: 'Jeane Dupont',
        avatarImageUrl: 'https://api.dicebear.com/5.x/avataaars/svg?seed=Lola',
        description: 'Astronaute Jeane Dupont @ ElevenLabs_\uD83D\uDE80',
      },
    ],
    authorLinkProps: () => ({}),
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof PostFooter>;

const Template: ComponentStory<typeof PostFooter> = (args) => <PostFooter {...args} />;

export const Overview = Template.bind({});
