import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { headingSizeTokenNameList } from '@/constants';
import {
  spacingSystemPropsControls,
  typographySystemPropsControls as typographySystemPropsControlsBase,
} from '@/constants/storybook';

import { Heading } from './Heading';

const { textSize, fontWeight, ...typographySystemPropsControls } = typographySystemPropsControlsBase;

export default {
  title: 'Components/Atoms/Typography/Heading',
  component: Heading,
  argTypes: {
    ...typographySystemPropsControls,
    ...spacingSystemPropsControls,
    size: {
      control: { type: 'radio' },
      options: headingSizeTokenNameList,
    },
  },
  args: {
    size: 'm',
    children: 'Example Heading',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Heading>;

const Template: StoryFn<typeof Heading> = (args) => <Heading {...args} />;

export const HeadingWithSizeS = Template.bind({});
HeadingWithSizeS.args = {
  size: 's',
};

export const HeadingWithSizeM = Template.bind({});
HeadingWithSizeM.args = {
  size: 'm',
};

export const HeadingWithSizeL = Template.bind({});
HeadingWithSizeL.args = {
  size: 'l',
};

export const HeadingWithSizeXL = Template.bind({});
HeadingWithSizeXL.args = {
  size: 'xl',
};
