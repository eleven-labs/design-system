import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { Box, Flex } from '@/components';
import { systemPropsControls } from '@/constants/storybook';

export default {
  title: 'Components/Atoms/Layout/Flex',
  component: Flex,
  args: {
    display: 'flex',
    bg: 'ultra-light-grey',
    p: 'xxs',
    gap: 'm',
    justifyContent: 'center',
    children: Array.from({ length: 3 }).map((v, index) => (
      <Box key={index} p="m" bg="azure" color="white">
        {(index + 1).toString().padStart(2, '0')}
      </Box>
    )),
  },
  parameters: {
    layout: 'centered',
    controls: { exclude: ['as', 'children'] },
  },
  argTypes: {
    ...systemPropsControls,
  },
} as Meta<typeof Flex>;

const Template: StoryFn<typeof Flex> = (args) => <Flex {...args} />;

export const Overview = Template.bind({});
