import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Box, PostPreviewList } from '@/components';

export default {
  title: 'Components/Organisms/PostPreviewList',
  component: PostPreviewList,
  args: {
    posts: Array.from({ length: 7 }).map((_, index) => ({
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
    onLoadMore: action('onLoadMore'),
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
  decorators: [
    (Story): JSX.Element => (
      <Box px="m" py="xl">
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof PostPreviewList>;

const Template: ComponentStory<typeof PostPreviewList> = (args) => <PostPreviewList {...args} />;

export const Overview = Template.bind({});

export const PostPreviewListWithPagination = Template.bind({});
PostPreviewListWithPagination.args = {
  textNumberOfItems: '6/156 affichés',
  percentageOfItemDisplayed: 26,
  loadMoreButtonLabel: 'Afficher plus',
};
