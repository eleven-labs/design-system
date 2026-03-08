import React from 'react';

import type { BreadcrumbProps } from '@/components';
import { Breadcrumb } from '@/components';
import { cn } from '@/helpers';

export interface CategoryIntroBlockProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title: React.ReactNode;
  description: React.ReactNode;
  breadcrumb: BreadcrumbProps;
}

export const CategoryIntroBlock: React.FC<CategoryIntroBlockProps> = ({
  title,
  description,
  breadcrumb,
  className,
  ...props
}) => (
  <div
    {...props}
    className={cn(
      `
        bg-[url('/imgs/category-intro-block-mobile.jpg')] bg-cover bg-bottom
        text-white
        md:bg-[url('/imgs/category-intro-block-desktop.jpg')]
      `,
      className
    )}
  >
    <div
      className="
        flex items-center justify-center bg-primary/90 px-l
        md:px-0
      "
    >
      <div className="container-content pt-m pb-xxl">
        <Breadcrumb {...breadcrumb} className="my-s" />
        <h1 className="typography-heading-xl">{title}</h1>
        <p className="mt-l">{description}</p>
      </div>
    </div>
  </div>
);
