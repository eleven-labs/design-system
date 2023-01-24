import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Box, HeaderProps } from '@/components';
import * as AutocompleteStories from '@/components/Molecules/Autocomplete/Autocomplete.stories';
import FooterStories from '@/components/Organisms/Footer/Footer.stories';
import HeaderStories from '@/components/Organisms/Header/Header.stories';
import { LayoutTemplate } from '@/templates';

export default {
  title: 'Templates/Layout',
  component: LayoutTemplate,
  args: {
    headerProps: HeaderStories.args,
    footerProps: FooterStories.args,
    children: (
      <Box as="main" className="container-content" pt="xl" pb="xxl-2" textAlign="center">
        content
      </Box>
    ),
  },
  decorators: [
    (Story): JSX.Element => (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: '#root { display: flex; flex-direction: column; height: 100vh; } #root main { flex: 1; }',
          }}
        />
        <Story />
      </>
    ),
  ],
  parameters: {
    layout: 'full',
    viewport: {
      defaultViewport: 'extraSmallScreen',
    },
  },
} as ComponentMeta<typeof LayoutTemplate>;

const Template: ComponentStory<typeof LayoutTemplate> = (args) => <LayoutTemplate {...args} />;

export const Overview = Template.bind({});

export const OpenSearch = Template.bind({});
OpenSearch.args = {
  headerProps: {
    ...HeaderStories.args,
    autocompleteDisplayed: true,
    autocompleteProps: {
      ...AutocompleteStories.default.args,
      ...AutocompleteStories.OpenSearch.args,
    },
  } as HeaderProps,
};
