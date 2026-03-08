import type { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { fn } from 'storybook/test';

import { SearchField } from './SearchField';

export default {
  component: SearchField,
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
    backgrounds: {
      default: 'ultra-light-grey',
    },
  },
} as Meta<typeof SearchField>;

const Template: StoryFn<typeof SearchField> = (args) => (
  <div className="w-[343px]">
    <SearchField {...args} className="w-full" />
  </div>
);

export const Overview = Template.bind({});

export const SearchFieldWithValue = Template.bind({});
SearchFieldWithValue.args = {
  input: {
    value: 'Design System',
  },
};
