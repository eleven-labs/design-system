import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { systemPropsControls } from '../../../constants';
import { Button } from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    ...systemPropsControls
  },
  args: {
    children: 'Button Label'
  },
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Overview = Template.bind({});

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  variant: 'primary',
  // eslint-disable-next-line prettier/prettier
  children: 'J\'y vais'
};

export const ButtonPrimaryGhost = Template.bind({});
ButtonPrimaryGhost.args = {
  variant: 'primary-ghost',
  children: 'Voir plus'
};

export const ButtonForm = Template.bind({});
ButtonForm.args = {
  variant: 'form',
  children: 'Je découvre'
};
