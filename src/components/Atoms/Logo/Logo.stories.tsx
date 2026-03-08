import type { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { Logo, logoName } from './Logo';

export default {
  component: Logo,
  argTypes: {
    name: {
      control: 'select',
      options: logoName,
    },
    size: {
      control: 'text',
    },
  },
  args: {
    name: 'blog',
    className: 'text-primary',
    size: '10em',
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
