import type { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { Icon } from '@/components';
import { iconTokenNameList } from '@/constants';
import { marginSystemPropsControls } from '@/constants/storybook';

export default {
  component: Icon,
  argTypes: {
    ...marginSystemPropsControls,
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
    color: 'navy',
    name: 'access-time',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Overview = Template.bind({});
