import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Autocomplete, Flex } from '@/components';
import { systemPropsControls } from '@/constants/storybook';

export default {
  title: 'Components/Molecules/Autocomplete',
  component: Autocomplete,
  argTypes: {
    ...systemPropsControls,
  },
  args: {
    inputProps: {
      placeholder: 'Rechercher par nom d’article ou d’auteur',
    },
    buttonCloseProps: {
      onClick: action('onClearSearch'),
    },
    buttonSearchProps: {
      onClick: action('onSearch'),
    },
    searchNotFoundProps: {
      title: 'Aucun résultat en vue...',
      description: 'Vérifiez les termes de votre recherche avant de réessayer',
    },
    seeAllSearchLinkProps: {
      label: 'Voir tous les résultats',
    },
    items: [
      {
        id: 'react-ssr-fr',
        title: 'React SSR',
        description: 'Lorem ipsum dolor sit react, consectetur adipiscing elit. In nec blandit neque',
      },
      {
        id: 'react-ssg-fr',
        title: 'React SSG',
        description: 'Mauris semper venenatis dolor vel posuere. Fusce imperdiet react purus euismod fermentum',
      },
      {
        id: 'react-astro-fr',
        title: 'React + Astro',
        description: 'Ut velit elit, finibus eu turpis quis, luctus sodales elit',
      },
      {
        id: 'react-nextjs-fr',
        title: 'React + NextJS',
        description: 'Quisque ac consectetur massa. Praesent pellentesque, orci sit amet cursus venenatis',
      },
      {
        id: 'react-apollo-fr',
        title: 'React + Apollo Client',
        description: 'Phasellus ac sodales mi. Ut egestas dui react enim vehicula pulvinar',
      },
      {
        id: 'react-vs-vue-fr',
        title: 'React vs Vue',
        description:
          'Suspendisse potenti. Etiam egestas lacus velit, et tempor metus mollis react. Donec ut vulputate leo',
      },
    ],
  },
  decorators: [
    (Story): JSX.Element => (
      <Flex justifyContent="center">
        <Story />
      </Flex>
    ),
  ],
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
    backgrounds: {
      default: 'grey-ultra-light',
    },
  },
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => <Autocomplete {...args} />;

export const Overview = Template.bind({});

export const OpenSearch = Template.bind({});
OpenSearch.args = {
  isOpen: true,
  inputProps: {
    value: 'React',
  },
};

export const NoResult = Template.bind({});
NoResult.args = {
  isOpen: true,
  items: [],
  inputProps: {
    value: 'Ember',
  },
};
