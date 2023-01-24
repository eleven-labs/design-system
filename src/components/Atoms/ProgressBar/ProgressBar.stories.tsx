import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { marginSystemProps } from '@/constants';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
  argTypes: {
    ...marginSystemProps,
  },
  args: {
    value: 30,
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Overview = Template.bind({});
