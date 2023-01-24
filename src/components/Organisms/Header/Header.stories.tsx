import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import AutocompleteStories from '@/components/Molecules/Autocomplete/Autocomplete.stories';
import { Header } from './Header';

export default {
  title: 'Components/Organisms/Header',
  component: Header,
  args: {
    title: 'Eleven Labs',
    subtitle: 'Le blog',
    onClickOpenSearch: action('onClickOpenSearch'),
    onClickCloseSearch: action('onClickCloseSearch'),
    autocompleteProps: AutocompleteStories.args,
    homeLinkProps: {
      href: '#',
    },
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Overview = Template.bind({});
