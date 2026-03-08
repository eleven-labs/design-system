import React, { Fragment } from 'react';

import { Link } from '@/components';
import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export interface BreadcrumbProps extends Omit<ComponentPropsWithoutRef<'ol'>, 'children'> {
  items: ({ label: string } & ComponentPropsWithoutRef<'a'>)[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className, ...props }) => (
  <ol
    {...props}
    itemScope
    itemType="https://schema.org/BreadcrumbList"
    className={cn('m-0 flex list-none gap-xxs-3 p-0 typography-text-s font-semibold', className)}
  >
    {items.map(({ label, ...itemLink }, index) => (
      <Fragment key={index}>
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          {itemLink.href ? (
            <Link itemProp="item" {...itemLink}>
              <span itemProp="name">{label}</span>
            </Link>
          ) : (
            <span itemProp="name" className="font-normal">
              {label}
            </span>
          )}
          <meta itemProp="position" content={(index + 1).toString()} />
        </li>
        {index < items.length - 1 && <span>{'>'}</span>}
      </Fragment>
    ))}
  </ol>
);
