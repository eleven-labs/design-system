import React from 'react';

import { cn } from '@/helpers';

export type NotFoundBlockOptions = {
  title: React.ReactNode;
  description: React.ReactNode;
};

export interface NotFoundBlockProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'>, NotFoundBlockOptions {}

export const NotFoundBlock: React.FC<NotFoundBlockProps> = ({ title, description, className, ...props }) => (
  <div {...props} className={cn('flex flex-col items-center', className)}>
    <div
      className="
        h-[135px] w-full bg-[url('/imgs/not-found.png')] bg-center bg-no-repeat
      "
    />
    <p className="mt-s typography-heading-xl">{title}</p>
    <p className="mt-xxs typography-text-s">{description}</p>
  </div>
);
