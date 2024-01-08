import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Flex } from '@/components';
import FooterStories from '@/components/Organisms/Footer/Footer.stories';
import HeaderStories from '@/components/Organisms/Header/Header.stories';

import { LayoutTemplate } from './LayoutTemplate';

export default {
  component: LayoutTemplate,
  args: {
    header: HeaderStories.args,
    footer: FooterStories.args,
    children: (
      <Flex flex="1" justifyContent="center" alignItems="center" p="l">
        Content
      </Flex>
    ),
  },
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as Meta<typeof LayoutTemplate>;

const Template: StoryFn<typeof LayoutTemplate> = (args) => <LayoutTemplate {...args} />;

export const Overview = Template.bind({});
