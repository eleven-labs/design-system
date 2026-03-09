import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Skeleton } from './Skeleton';

export default {
  component: Skeleton,
  args: {
    isLoading: true,
    children: <p>Hello world !</p>,
  },
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Overview = Template.bind({});
