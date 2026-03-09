import React from 'react';

import { Button } from '@/components';
import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export interface CategoryEndingBlockProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title: React.ReactNode;
  description: React.ReactNode;
  expertiseLink?: { label: string } & ComponentPropsWithoutRef<'a'>;
}

export const CategoryEndingBlock: React.FC<CategoryEndingBlockProps> = ({
  title,
  description,
  expertiseLink: { label: expertiseLinkLabel, ...expertiseLink } = {},
  className,
  ...props
}) => (
  <div {...props} className={cn(className)}>
    <p className="typography-text-m font-bold">{title}</p>
    <p className="mt-m">{description}</p>
    {expertiseLinkLabel && (
      <Button asChild className="mt-l">
        <a {...expertiseLink}>{expertiseLinkLabel}</a>
      </Button>
    )}
  </div>
);
