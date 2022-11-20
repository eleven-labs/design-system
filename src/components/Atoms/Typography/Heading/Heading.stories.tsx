import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { headingSizeTokenNameList, systemPropsControls, typographyPropsControls } from '@/constants';

import { Heading } from './Heading';

export default {
  title: 'Components/Atoms/Typography/Heading',
  component: Heading,
  argTypes: {
    ...systemPropsControls,
    ...typographyPropsControls(headingSizeTokenNameList),
  },
  args: {
    children: 'Example Heading',
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Overview = Template.bind({});
