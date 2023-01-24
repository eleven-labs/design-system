import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PostPreview } from '@/components';

export default {
  title: 'Components/Molecules/PostPreview',
  component: PostPreview,
  args: {
    slug: 'titre-article',
    title: `Titre de l'article`,
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
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof PostPreview>;

const Template: ComponentStory<typeof PostPreview> = (args) => <PostPreview {...args} />;

export const Overview = Template.bind({});

export const PostPreviewHasMask = Template.bind({});
PostPreviewHasMask.args = {
  hasMask: true,
};

export const PostPreviewIsRelated = Template.bind({});
PostPreviewIsRelated.parameters = {
  backgrounds: {
    default: 'grey-ultra-light',
  },
};
PostPreviewIsRelated.args = {
  isRelated: true,
};
