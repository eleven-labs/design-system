import React from 'react';

import { Link } from '@/components';
import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export interface AuthorCardProps extends React.ComponentPropsWithoutRef<'div'> {
  name: string;
  description: React.ReactNode;
  avatarImageUrl?: string;
  link: { label: string } & ComponentPropsWithoutRef<'a'>;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  avatarImageUrl,
  description,
  link: { label: linkLabel, ...link },
  ...props
}) => (
  <div {...props} className={cn('relative flex items-center gap-s rounded-xs bg-white px-s py-m', props.className)}>
    {avatarImageUrl ? (
      <img src={avatarImageUrl} alt={name} className="size-[72px] rounded-[50px]" />
    ) : (
      <div
        className="
          size-[72px] rounded-[50px] bg-[url('/imgs/astronaut.png')] bg-cover
          bg-no-repeat
        "
      />
    )}
    <div
      className="
        flex min-w-0 flex-1 flex-col items-start justify-between gap-s
        md:flex-row md:items-center
      "
    >
      <div className="min-w-0">
        <p className="typography-text-m font-semibold text-primary">{name}</p>
        <div className="mt-xxs-3 min-w-0 typography-text-xs italic">{description}</div>
      </div>
      <Link
        {...link}
        data-internal-link="author"
        className="
          relative shrink-0 font-heading tracking-[1px] uppercase
          before:absolute before:top-0 before:left-0 before:z-1 before:block
          before:size-full before:content-['']
          md:px-m
        "
      >
        {linkLabel}
      </Link>
    </div>
  </div>
);
