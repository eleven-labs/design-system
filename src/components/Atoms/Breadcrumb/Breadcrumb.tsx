import React from 'react';

import { Flex, Link, Text } from '@/components';
import type { ComponentPropsWithoutRef, MarginSystemProps } from '@/types';

export interface BreadcrumbProps extends MarginSystemProps {
  items: ({ label: string } & ComponentPropsWithoutRef<'a'>)[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, ...props }) => (
  <Flex {...props} gap="xxs-3">
    {items.map(({ label, ...itemLink }, index) => (
      <>
        {itemLink.href ? <Link {...itemLink}>{label}</Link> : <Text>{label}</Text>}
        {index < items.length - 1 && <Text>{'>'}</Text>}
      </>
    ))}
  </Flex>
);
