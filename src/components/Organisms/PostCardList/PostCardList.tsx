import React from 'react';

import type { PaginationProps, PostCardProps } from '@/components';
import { Pagination, PostCard } from '@/components';

export interface PostCardListProps {
  posts: Partial<PostCardProps>[];
  pagination?: PaginationProps;
  isLoading?: boolean;
}

export const PostCardList: React.FC<PostCardListProps> = ({ posts, pagination, isLoading = false }) => (
  <>
    <div className="flex min-w-0 flex-col gap-m">
      {posts.map((post, index) => (
        <React.Fragment key={post?.slug ?? index}>
          <PostCard {...(post || {})} isLoading={isLoading} />
        </React.Fragment>
      ))}
      {pagination && pagination?.totalPages > 1 && <Pagination className="mx-auto" {...pagination} />}
    </div>
  </>
);
