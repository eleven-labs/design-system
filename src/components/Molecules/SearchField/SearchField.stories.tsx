import type { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { fn } from 'storybook/test';

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
      onClick: fn(),
    },
    buttonSearch: {
      onClick: fn(),
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
