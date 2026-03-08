import type { Decorator } from '@storybook/react';
import React from 'react';

import type { LayoutTemplateProps } from '@/templates/LayoutTemplate';
import { LayoutTemplate } from '@/templates/LayoutTemplate';
import LayoutTemplateStories from '@/templates/LayoutTemplate/LayoutTemplate.stories';

export const LayoutTemplateDecorator: Decorator = (Story): React.ReactElement => (
  <LayoutTemplate {...(LayoutTemplateStories.args as LayoutTemplateProps)}>
    <Story />
  </LayoutTemplate>
);
