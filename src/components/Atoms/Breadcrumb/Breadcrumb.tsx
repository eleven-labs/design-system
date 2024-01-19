import React, { Fragment } from 'react';

import { Flex, Link, Text } from '@/components';
import type { ComponentPropsWithoutRef, MarginSystemProps } from '@/types';

import './Breadcrumb.scss';

export interface BreadcrumbProps extends MarginSystemProps {
  items: ({ label: string } & ComponentPropsWithoutRef<'a'>)[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, ...props }) => (
  <Flex
    {...props}
    as="ol"
    itemScope
    itemType="https://schema.org/BreadcrumbList"
    gap="xxs-3"
    fontWeight="semi-bold"
    className="breadcrumb"
  >
    {items.map(({ label, ...itemLink }, index) => (
      <Fragment key={index}>
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          {itemLink.href ? (
            <Link itemProp="item" {...itemLink}>
              <Text as="span" itemProp="name">
                {label}
              </Text>
            </Link>
          ) : (
            <Text as="span" itemProp="name" fontWeight="regular">
              {label}
            </Text>
          )}
          <meta itemProp="position" content={(index + 1).toString()} />
        </li>
        {index < items.length - 1 && <Text as="span">{'>'}</Text>}
      </Fragment>
    ))}
  </Flex>
);
