import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { SearchField } from '@/components';
import { systemPropsControls } from '@/constants/storybook';

export default {
  component: SearchField,
  argTypes: {
    ...systemPropsControls,
  },
  args: {
    input: {
      placeholder: 'Nom d’article, auteur ...',
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
