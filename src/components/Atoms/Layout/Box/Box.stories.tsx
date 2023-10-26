import type { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { Heading } from '@/components';
import { Box, Text } from '@/components';
import { systemPropsControls } from '@/constants/storybook';

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

export const HiddenSystemProps = (): React.JSX.Element => (
  <>
    <Box hiddenAbove="md">
      This text hides at the "md" value screen width or{' '}
      <Text as="span" fontWeight="bold">
        greater
      </Text>
    </Box>
    <Box hiddenBelow="sm">
      This text hides at the "sm" value screen width and{' '}
      <Text as="span" fontWeight="bold">
        smaller
      </Text>
    </Box>
  </>
);
