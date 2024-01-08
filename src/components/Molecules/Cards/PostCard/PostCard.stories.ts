import type { Meta, StoryObj } from '@storybook/react';

import { PostCard } from './PostCard';

const meta: Meta<typeof PostCard> = {
  component: PostCard,
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Overview: Story = {};
Overview.args = {
  contentType: 'article',
  slug: 'slug',
  title: `REX Studio : Intégration de composants React avec Varnish ESI dans un site No Code`,
  date: '09 fév. 2021',
  readingTime: 24,
  authors: [{ username: 'jdoe', name: 'J. Doe' }],
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.',
  link: {
    href: '#',
  },
};

export const WithIsLoading: Story = {};
WithIsLoading.args = {
  isLoading: true,
};

export const WithContentTypeTutorial: Story = {};
WithContentTypeTutorial.args = {
  ...Overview.args,
  contentType: 'tutorial',
  tutorialLabel: 'Tutoriel',
};
