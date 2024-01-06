import React from 'react';

import { Flex } from '@/components';
import type { MarginSystemProps } from '@/types';

import './LayoutContentWithSidebar.scss';

export interface LayoutContentWithSidebarProps
  extends MarginSystemProps,
    Omit<React.ComponentPropsWithoutRef<'main'>, 'content'> {
  content: React.ReactNode;
  sidebar: React.ReactNode;
}

export const LayoutContentWithSidebar: React.FC<LayoutContentWithSidebarProps> = ({ content, sidebar, ...props }) => (
  <Flex flexDirection={{ xs: 'column', md: 'row' }} gap="xl" className="layout-content-with-sidebar" {...props}>
    <Flex flexDirection="column" as="main" flex="1" gap="xl" className="layout-content-with-sidebar__content">
      {content}
    </Flex>
    <Flex as="aside" flexDirection="column" gap="xl" className="layout-content-with-sidebar__sidebar">
      {sidebar}
    </Flex>
  </Flex>
);
