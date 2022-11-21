import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { BackLink } from '@/components/Molecules/BackLink/BackLink';
import { marginSystemProps } from '@/constants';

export default {
  title: 'Components/Molecules/BackLink',
  component: BackLink,
  argTypes: {
    ...marginSystemProps,
  },
  args: {
    label: 'Retour',
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof BackLink>;

const Template: ComponentStory<typeof BackLink> = (args) => <BackLink {...args} />;

export const Overview = Template.bind({});
