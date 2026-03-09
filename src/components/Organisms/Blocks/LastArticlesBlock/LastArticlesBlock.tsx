import React from 'react';

import type { PostCardProps } from '@/components';
import { Button, PostCard } from '@/components';
import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export interface LastArticlesBlockProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title: React.ReactNode;
  posts: Partial<PostCardProps>[];
  linkSeeMore: { label: string } & ComponentPropsWithoutRef<'a'>;
}

export const LastArticlesBlock: React.FC<LastArticlesBlockProps> = ({
  title,
  posts,
  linkSeeMore: { label: labelLinkSeeMore, ...linkSeeMore },
  className,
  ...props
}) => (
  <div {...props} className={cn('container-content my-xl', className)}>
    <h2 className="typography-heading-m text-primary">{title}</h2>
    <div
      className="
        xl:grid-cols-3
        mt-l grid gap-m
        md:grid-cols-2
      "
    >
      {posts.map((post, index) => (
        <React.Fragment key={post?.slug ?? index}>
          <PostCard
            variant="highlight-light"
            {...(post || {})}
            className={cn(
              index === posts.length - 1 &&
                posts.length >= 3 &&
                `
                  xl:flex
                  md:hidden
                `
            )}
          />
        </React.Fragment>
      ))}
    </div>
    <div className="flex items-center justify-center">
      <Button asChild className="mt-l">
        <a {...linkSeeMore}>{labelLinkSeeMore}</a>
      </Button>
    </div>
  </div>
);
