import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SubHeader } from './SubHeader';

export default {
  title: 'Components/Organisms/SubHeader',
  component: SubHeader,
  args: {
    introBlock: {
      title: 'Ravi de te voir',
      description: 'Explorons de nouveaux savoirs',
    },
    choiceCategoryLabel: 'Quels articles veux-tu lire ?',
    choiceCategories: [
      { name: 'all', label: 'Tous' },
      { name: 'javascript', label: 'Javascript' },
      { name: 'php', label: 'PHP' },
      { name: 'agile', label: 'Agile' },
      { name: 'architecture', label: 'Architecture' },
      { name: 'best-practices', label: 'Bonnes pratiques' },
    ],
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof SubHeader>;

const Template: ComponentStory<typeof SubHeader> = (args) => <SubHeader {...args} />;

export const Overview = Template.bind({});
