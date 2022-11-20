import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { spacingSystemPropsControls } from '../../../constants';
import { Input } from './Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
  argTypes: {
    ...spacingSystemPropsControls
  },
  args: {
    placeholder: 'Rechercher par nom d’article ou d’auteur'
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'grey-ultra-light'
    }
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Overview = Template.bind({});

export const InputSearch = Template.bind({});
InputSearch.args = {
  variant: 'search'
};

export const InputForm = Template.bind({});
InputForm.args = {
  variant: 'form'
};
