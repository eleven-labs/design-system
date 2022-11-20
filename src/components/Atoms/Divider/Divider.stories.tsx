import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '@/constants';

import { Divider } from './Divider';

export default {
  title: 'Components/Atoms/Divider',
  component: Divider,
  argTypes: {
    ...systemPropsControls,
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const Overview = Template.bind({});
