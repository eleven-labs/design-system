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
      date: '24 fév. 2021',
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
      link: {
        href: '#',
      },
    },
    {
      slug: 'react-ssg',
      title: 'React SSG',
      date: '22 fév. 2021',
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
      link: {
        href: '#',
      },
    },
    {
      slug: 'react-astro',
      title: 'React + Astro',
      date: '18 fév. 2021',
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
      link: {
        href: '#',
      },
    },
    {
      slug: 'react-nextjs',
      title: 'React + NextJS',
      date: '16 fév. 2021',
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
      link: {
        href: '#',
      },
    },
    {
      slug: 'react-apollo-client',
      title: 'React + Apollo Client',
      date: '12 fév. 2021',
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
      link: {
        href: '#',
      },
    },
    {
      slug: 'react-vs-vue',
      title: 'React vs Vue',
      date: '09 fév. 2021',
      authors: [{ username: 'jdoe', name: 'J. Doe' }],
      link: {
        href: '#',
      },
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