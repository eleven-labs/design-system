import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Heading } from '@/components';
import { systemPropsControls } from '@/constants/storybook';

import { Box } from './Box';

export default {
  title: 'Components/Atoms/Layout/Box',
  component: Box,
  args: {
    p: 'm',
    bg: 'azure',
    color: 'white',
    children: <Heading textAlign="center">I'm a div Box ;</Heading>,
  },
  parameters: {
    layout: 'centered',
    controls: { exclude: ['as', 'children'] },
  },
  argTypes: {
    ...systemPropsControls,
  },
} as Meta<typeof Box>;

const Template: StoryFn<typeof Box> = (args) => <Box {...args} />;

export const Overview = Template.bind({});
