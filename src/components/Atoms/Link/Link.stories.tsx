import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import {
  spacingSystemPropsControls,
  typographySystemPropsControls as typographySystemPropsControlsBase,
} from '@/constants/storybook';

import { Link } from './Link';

const { underline, fontWeight, ...typographySystemPropsControls } = typographySystemPropsControlsBase;

export default {
  title: 'Components/Atoms/Link',
  component: Link,
  argTypes: {
    ...typographySystemPropsControls,
    ...spacingSystemPropsControls,
  },
  args: {
    size: 'm',
    children: 'Link Label',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Link>;

const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const LinkWithSizeXS = Template.bind({});
LinkWithSizeXS.args = {
  size: 'xs',
};

export const LinkWithSizeS = Template.bind({});
LinkWithSizeS.args = {
  size: 's',
};

export const LinkWithSizeM = Template.bind({});
LinkWithSizeM.args = {
  size: 'm',
};
