import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Autocomplete } from './Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete,
  args: {
    placeholder: 'Rechercher par nom d’article ou d’auteur',
    searchLink: {
      label: 'Voir tous les résultats',
      onClick: action('search'),
    },
  },
  parameters: {
    backgrounds: {
      default: 'ultra-light-grey',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Overview: Story = {};

export const WithResult: Story = {};
WithResult.args = {
  defaultValue: 'React',
  items: [
    {
      slug: 'react-ssr',
      title: 'React SSR',
      description: 'Lorem ipsum dolor sit react, consectetur adipiscing elit. In nec blandit neque',
      date: '24 fév. 2021',
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
    },
    {
      slug: 'react-ssg',
      title: 'React SSG',
      description: 'Mauris semper venenatis dolor vel posuere. Fusce imperdiet react purus euismod fermentum',
      date: '22 fév. 2021',
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
    },
    {
      slug: 'react-astro',
      title: 'React + Astro',
      description: 'Ut velit elit, finibus eu turpis quis, luctus sodales elit',
      date: '18 fév. 2021',
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
    },
    {
      slug: 'react-nextjs',
      title: 'React + NextJS',
      description: 'Quisque ac consectetur massa. Praesent pellentesque, orci sit amet cursus venenatis',
      date: '16 fév. 2021',
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
    },
    {
      slug: 'react-apollo-client',
      title: 'React + Apollo Client',
      description: 'Phasellus ac sodales mi. Ut egestas dui react enim vehicula pulvinar',
      date: '12 fév. 2021',
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
    },
    {
      slug: 'react-vs-vue',
      title: 'React vs Vue',
      description:
        'Suspendisse potenti. Etiam egestas lacus velit, et tempor metus mollis react. Donec ut vulputate leo',
      date: '09 fév. 2021',
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
    },
  ],
};

export const WithNoResult: Story = {};
WithNoResult.args = {
  defaultValue: 'React',
  items: [],
  searchNotFound: {
    title: 'Aucun résultat en vue...',
    description: 'Vérifiez les termes de votre recherche avant de réessayer',
  },
};
