import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Logo } from '@/components';
import { logoTokenNameList } from '@/constants';
import { marginSystemPropsControls } from '@/constants/storybook';

export default {
  title: 'Components/Atoms/Logo',
  component: Logo,
  argTypes: {
    ...marginSystemPropsControls,
    name: {
      control: 'select',
      options: logoTokenNameList,
    },
    size: {
      control: 'text',
    },
  },
  args: {
    name: 'blog',
    color: 'azure',
    width: '35rem',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Logo>;

const Template: StoryFn<typeof Logo> = (args) => <Logo {...args} />;

export const LogoWebsite = Template.bind({});
LogoWebsite.args = {
  name: 'website',
};

export const LogoBlog = Template.bind({});
LogoBlog.args = {
  name: 'blog',
};
