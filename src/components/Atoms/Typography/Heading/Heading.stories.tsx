import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls, typographyPropsControls } from '@/constants/storybook';

import { Heading } from './Heading';

export default {
  title: 'Components/Atoms/Typography/Heading',
  component: Heading,
  argTypes: {
    ...systemPropsControls,
    ...typographyPropsControls,
  },
  args: {
    size: 'm',
    children: 'Example Heading',
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Overview = Template.bind({});
