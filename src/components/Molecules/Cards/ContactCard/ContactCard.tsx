import React from 'react';

import { Button } from '@/components';
import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export interface ContactCardProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title: React.ReactNode;
  description: React.ReactNode;
  link: { label: React.ReactNode } & ComponentPropsWithoutRef<'a'>;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  link: { label: linkLabel, ...link },
  className,
  ...props
}) => (
  <div
    {...props}
    className={cn(
      `
        flex items-center justify-center rounded-xs bg-white
        bg-[url(/imgs/contact-background.png)] bg-contain bg-bottom-right
        bg-no-repeat py-l
      `,
      className
    )}
  >
    <div
      className="
        flex max-w-[560px] flex-col items-center justify-center gap-m px-m
        text-center
      "
    >
      <p className="typography-heading-l text-primary">{title}</p>
      <p className="typography-text-s">{description}</p>
      <Button asChild>
        <a {...link}>{linkLabel}</a>
      </Button>
    </div>
  </div>
);
