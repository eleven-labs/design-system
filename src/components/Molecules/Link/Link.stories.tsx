import type { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { Link } from './Link';

export default {
  component: Link,
  args: {
    children: 'Link Label',
    href: 'https://eleven-labs.com/',
    target: '_blank',
  },
} as Meta<typeof Link>;

const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const LinkWithText = Template.bind({});
LinkWithText.args = {
  className: 'typography-text-m',
  children: 'Link Label',
};

export const LinkWithHeading = Template.bind({});
LinkWithHeading.args = {
  className: 'typography-heading-l',
  children: 'Link Label',
};

export const LinkWithIcon = Template.bind({});
LinkWithIcon.args = {
  icon: 'language',
};
