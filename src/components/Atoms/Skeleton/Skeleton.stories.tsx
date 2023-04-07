import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Skeleton, Text } from '@/components';
import { marginSystemPropsControls } from '@/constants/storybook';

export default {
  title: 'Components/Atoms/Skeleton',
  component: Skeleton,
  argTypes: {
    ...marginSystemPropsControls,
  },
  args: {
    isLoading: true,
    children: <Text>Hello world !</Text>,
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Overview = Template.bind({});
