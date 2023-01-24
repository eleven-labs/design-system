import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '@/constants/storybook';
import { SearchNotFound } from '@/components';

export default {
  title: 'Components/Molecules/SearchNotFound',
  component: SearchNotFound,
  argTypes: {
    ...systemPropsControls,
  },
  args: {
    title: 'Aucun résultat en vue...',
    description: 'Vérifiez les termes de votre recherche avant de réessayer',
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof SearchNotFound>;

const Template: ComponentStory<typeof SearchNotFound> = (args) => <SearchNotFound {...args} />;

export const Overview = Template.bind({});
