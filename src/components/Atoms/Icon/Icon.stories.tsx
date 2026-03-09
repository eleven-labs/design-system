import type { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { iconTokenNameList } from '@/tokens';

import { Icon } from './Icon';

export default {
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: iconTokenNameList,
    },
    size: {
      control: 'text',
    },
  },
  args: {
    size: '10rem',
    color: 'primary',
    name: 'access-time',
  },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Overview = Template.bind({});
