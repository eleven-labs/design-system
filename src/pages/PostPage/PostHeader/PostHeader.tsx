import React from 'react';

import { PostMetadata } from '@/components';
import { ShareLinks, type ShareLinksProps } from '@/components/Molecules/ShareLinks';
import type { ComponentPropsWithoutRef } from '@/tokens';

export interface PostHeaderProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title: React.ReactNode;
  date: string;
  readingTime: number;
  authors: {
    username: string;
    name: string;
    link: ComponentPropsWithoutRef<'a'>;
  }[];
  shareLinks: ShareLinksProps;
}

export const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  date,
  readingTime,
  authors,
  shareLinks,
  className,
  ...props
}) => (
  <div {...props} className={className}>
    <h1 className="typography-heading-xl text-primary">{title}</h1>
    <div
      className="
        mt-m flex flex-col gap-xs
        md:flex-row md:justify-between
      "
    >
      <PostMetadata variant="secondary" date={date} readingTime={readingTime} authors={authors} />
      <ShareLinks {...shareLinks} />
    </div>
  </div>
);
