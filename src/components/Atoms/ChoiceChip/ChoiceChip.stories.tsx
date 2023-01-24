import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { marginSystemProps } from '@/constants';

import { ChoiceChip } from './ChoiceChip';

export default {
  title: 'Components/Atoms/ChoiceChip',
  component: ChoiceChip,
  argTypes: {
    ...marginSystemProps,
  },
  args: {
    children: 'Choice Chip Label',
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'primary-light',
    },
  },
} as ComponentMeta<typeof ChoiceChip>;

const Template: ComponentStory<typeof ChoiceChip> = (args) => <ChoiceChip {...args} />;

export const Overview = Template.bind({});

export const ChoiceChipIsActice = Template.bind({});
ChoiceChipIsActice.args = {
  isActive: true,
};
