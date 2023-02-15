import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Button } from '@/components';
import { spacingSystemPropsControls } from '@/constants/storybook';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    ...spacingSystemPropsControls,
  },
  args: {
    variant: 'primary',
    disabled: false,
    children: 'Label',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ButtonWithVariantPrimary = Template.bind({});
ButtonWithVariantPrimary.args = {
  variant: 'primary',
};

export const ButtonWithVariantSecondary = Template.bind({});
ButtonWithVariantSecondary.args = {
  variant: 'secondary',
};

export const ButtonIsChoiceChip = Template.bind({});
ButtonIsChoiceChip.args = {
  isChoiceChip: true,
};
