import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '@/constants/storybook';

import { ChoiceChipGroup } from '@/components';

export default {
  title: 'Components/Molecules/ChoiceChipGroup',
  component: ChoiceChipGroup,
  argTypes: {
    ...systemPropsControls,
  },
  args: {
    choices: [
      { name: 'all', label: 'Tous' },
      { name: 'javascript', label: 'Javascript' },
      { name: 'php', label: 'PHP' },
      { name: 'agile', label: 'Agile' },
      { name: 'architecture', label: 'Architecture' },
      { name: 'best-practices', label: 'Bonnes pratiques' },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
    layout: 'centered',
    backgrounds: {
      default: 'primary-light',
    },
  },
} as ComponentMeta<typeof ChoiceChipGroup>;

const Template: ComponentStory<typeof ChoiceChipGroup> = (args) => <ChoiceChipGroup {...args} />;

export const Overview = Template.bind({});
