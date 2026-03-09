import classNames from 'classnames';
import React from 'react';

import type { PostCardProps } from '@/components';
import { PostCard } from '@/components';

export interface RelatedPostListProps extends React.ComponentPropsWithoutRef<'div'> {
  relatedPostListTitle: string;
  posts: PostCardProps[];
}

export const RelatedPostList: React.FC<RelatedPostListProps> = ({
  relatedPostListTitle,
  posts,
  className,
  ...props
}) => (
  <div {...props} className={classNames(className)}>
    <h2 className="mb-m typography-heading-m text-primary">{relatedPostListTitle}</h2>
    {posts.map((post, index) => (
      <PostCard key={post?.slug ?? index} {...post} className="mt-s" />
    ))}
  </div>
);
