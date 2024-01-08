import React from 'react';

import type { PaginationProps, PostCardProps } from '@/components';
import { Flex, Pagination, PostCard } from '@/components';

export interface PostCardListProps {
  posts: Partial<PostCardProps>[];
  pagination?: PaginationProps;
  isLoading?: boolean;
}

export const PostCardList: React.FC<PostCardListProps> = ({ posts, pagination, isLoading = false }) => (
  <>
    <Flex flexDirection="column" gap="m">
      {posts.map((post, index) => (
        <React.Fragment key={post?.slug ?? index}>
          <PostCard {...(post || {})} isLoading={isLoading} />
        </React.Fragment>
      ))}
      {pagination && pagination?.totalPages > 1 && <Pagination {...pagination} />}
    </Flex>
  </>
);
