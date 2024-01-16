import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import type { HeaderProps } from '@/components';
import { Flex, Header } from '@/components';
import FooterStories from '@/components/Organisms/Footer/Footer.stories';
import HeaderStories from '@/components/Organisms/Header/Header.stories';

import { LayoutTemplate } from './LayoutTemplate';

export default {
  component: LayoutTemplate,
  args: {
    header: React.createElement<HeaderProps>(Header, HeaderStories.args as HeaderProps),
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
