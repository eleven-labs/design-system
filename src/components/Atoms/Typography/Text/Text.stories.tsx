import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls, typographyPropsControls } from '@/constants/storybook';

import { Text } from './Text';

export default {
  title: 'Components/Atoms/Typography/Text',
  component: Text,
  argTypes: {
    ...systemPropsControls,
    ...typographyPropsControls(),
  },
  args: {
    size: 'm',
    children: 'Example Text',
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Overview = Template.bind({});
