import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '../../../constants';
import { BackLink } from './BackLink';

export default {
  title: 'Components/Molecules/BackLink',
  component: BackLink,
  argTypes: {
    ...systemPropsControls
  },
  args: {
    label: 'Retour'
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen'
    },
    layout: 'centered'
  }
} as ComponentMeta<typeof BackLink>;

const Template: ComponentStory<typeof BackLink> = (args) => (
  <BackLink {...args} />
);

export const Overview = Template.bind({});
