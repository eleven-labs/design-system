import classNames from 'classnames';
import React from 'react';

import { Flex } from '@/components';
import type { ComponentPropsWithoutRef, MarginSystemProps } from '@/types';

import './LayoutContentWithSidebar.scss';

export interface LayoutContentWithSidebarProps
  extends MarginSystemProps,
    Omit<ComponentPropsWithoutRef<'main'>, 'content'> {
  content: React.ReactNode;
  sidebar: React.ReactNode;
}

export const LayoutContentWithSidebar: React.FC<LayoutContentWithSidebarProps> = ({
  content,
  sidebar,
  className,
  ...props
}) => (
  <Flex
    {...props}
    flexDirection={{ xs: 'column', md: 'row' }}
    gap="xl"
    my="xl"
    mx={{ xs: 's', md: 'auto' }}
    className={classNames('layout-content-with-sidebar', 'container-content', className)}
  >
    <Flex flexDirection="column" as="main" flex="1" gap="xl" className="layout-content-with-sidebar__content">
      {content}
    </Flex>
    <Flex as="aside" flexDirection="column" gap="xl" className="layout-content-with-sidebar__sidebar">
      {sidebar}
    </Flex>
  </Flex>
);
