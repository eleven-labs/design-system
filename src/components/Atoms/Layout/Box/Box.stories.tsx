import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Heading } from '@/components';
import { systemPropsControls } from '@/constants';

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
    controls: { exclude: ['children'] },
  },
  argTypes: {
    ...systemPropsControls,
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Overview = Template.bind({});
