import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TextHighlight } from '@/components';
import { systemPropsControls } from '@/constants/storybook';

export default {
  title: 'Components/Molecules/TextHighlight',
  component: TextHighlight,
  argTypes: {
    ...systemPropsControls,
  },
  args: {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit vel tellus in molestie. Curabitur malesuada sodales consectetur. Aliquam convallis nec lacus in euismod. Vestibulum id eros vitae tellus sodales ultricies eget eu ipsum.`,
    textQuery: 'Lorem ipsum',
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'grey-ultra-light',
    },
  },
} as ComponentMeta<typeof TextHighlight>;

const Template: ComponentStory<typeof TextHighlight> = (args) => <TextHighlight {...args} />;

export const Overview = Template.bind({});
