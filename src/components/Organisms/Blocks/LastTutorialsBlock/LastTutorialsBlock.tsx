import React from 'react';

import type { PostCardProps } from '@/components';
import { Icon } from '@/components';
import { Button, PostCard } from '@/components';
import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export interface LastTutorialsBlockProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title: React.ReactNode;
  description: React.ReactNode;
  posts: Partial<PostCardProps>[];
  tutorialLabel: string;
  linkSeeMore: { label: string } & ComponentPropsWithoutRef<'a'>;
}

export const LastTutorialsBlock: React.FC<LastTutorialsBlockProps> = ({
  title,
  description,
  tutorialLabel,
  posts,
  linkSeeMore: { label: labelLinkSeeMore, ...linkSeeMore },
  className,
  ...props
}) => (
  <div className="bg-primary text-white">
    <div
      {...props}
      className={cn(
        `
          container-content mx-s flex flex-col items-center justify-center
          gap-xl py-xl
          md:mx-auto md:flex-row
        `,
        className
      )}
    >
      <div className="flex-1">
        <h2 className="typography-heading-m">{title}</h2>
        <Icon name="underline" color="white" width="56px" />
        <p className="mt-l">{description}</p>
        <Button asChild className="mt-l" variant="accent">
          <a {...linkSeeMore}>{labelLinkSeeMore}</a>
        </Button>
      </div>
      <div
        className="
          grid w-full gap-l
          md:flex-2 md:grid-cols-2
        "
      >
        {posts.map((post, index) => (
          <React.Fragment key={post?.slug ?? index}>
            <PostCard variant="highlight-dark" tutorialLabel={tutorialLabel} {...(post || {})} />
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);
