import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NewsletterBlock } from './NewsletterBlock';

export default {
  title: 'Components/Molecules/NewsletterBlock',
  component: NewsletterBlock,
  args: {
    title: 'En quête d’un outil de veille ?',
    description: 'Abonne-toi à notre newsletter',
    subscribeButtonProps: {
      label: `Je m'abonne`,
    },
  },
} as ComponentMeta<typeof NewsletterBlock>;

const Template: ComponentStory<typeof NewsletterBlock> = (args) => <NewsletterBlock {...args} />;

export const Overview = Template.bind({});
