import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { SearchField } from '@/components';
import { systemPropsControls } from '@/constants/storybook';

export default {
  title: 'Components/Molecules/SearchField',
  component: SearchField,
  argTypes: {
    ...systemPropsControls,
  },
  args: {
    input: {
      placeholder: 'Rechercher par nom d’article ou d’auteur',
    },
    buttonClose: {
      onClick: action('onClose'),
    },
    buttonSearch: {
      onClick: action('onSearch'),
    },
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'ultra-light-grey',
    },
  },
} as Meta<typeof SearchField>;

const Template: StoryFn<typeof SearchField> = (args) => <SearchField {...args} />;

export const Overview = Template.bind({});

export const SearchFieldWithValue = Template.bind({});
SearchFieldWithValue.args = {
  input: {
    value: 'Design System',
  },
};