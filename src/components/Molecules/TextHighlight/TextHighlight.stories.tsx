import type { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { TextHighlight } from './TextHighlight';

export default {
  component: TextHighlight,
  args: {
    text: `Suspendisse potenti. Etiam egestas lacus velit, et tempor metus mollis react. Donec ut vulputate leo ...`,
    textQuery: 'React',
  },
} as Meta<typeof TextHighlight>;

const Template: StoryFn<typeof TextHighlight> = (args) => <TextHighlight {...args} />;

export const Overview = Template.bind({});
