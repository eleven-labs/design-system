import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PostCard } from './PostCard';

const meta: Meta<typeof PostCard> = {
  component: PostCard,
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Overview: Story = {};
Overview.args = {
  contentType: 'article',
  slug: 'slug',
  cover: {
    img: {
      src: 'https://i.ibb.co/gPtFC17/pexels-matheus-bertelli-1830252.jpg',
      alt: 'cover',
    },
  },
  title: `REX Studio : Intégration de composants React avec Varnish ESI dans un site No Code`,
  date: '09 fév. 2021',
  readingTime: 24,
  authors: [{ username: 'jdoe', name: 'J. Doe' }],
  excerpt:
    'Svelte est en fait un framework et un compilateur, et c’est la principale différence. Svelte est en fait un framework et un compilateur, et c’est la principale différence...',
  link: {
    href: '#',
  },
};

export const WithVariantHighlightLight: Story = {
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '380px' }}>
        <Story />
      </div>
    ),
  ],
};
WithVariantHighlightLight.args = {
  ...Overview.args,
  variant: 'highlight-light',
};

export const WithVariantHighlightDark: Story = {
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
WithVariantHighlightDark.args = {
  ...Overview.args,
  variant: 'highlight-dark',
};

export const WithVariantSideImage: Story = {
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '764px' }}>
        <Story />
      </div>
    ),
  ],
};
WithVariantSideImage.args = {
  ...Overview.args,
  variant: 'side-image',
};
WithVariantHighlightDark.parameters = {
  backgrounds: { default: 'primary' },
};

export const WithContentTypeTutorial: Story = {};
WithContentTypeTutorial.args = {
  ...Overview.args,
  contentType: 'tutorial',
  tutorialLabel: 'Tutoriel',
};

export const WithIsLoading: Story = {};
WithIsLoading.args = {
  isLoading: true,
};
