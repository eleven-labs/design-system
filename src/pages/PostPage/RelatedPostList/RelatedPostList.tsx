import React from 'react';

import type { BoxProps, PostCardProps } from '@/components';
import { PostCard } from '@/components';
import { Box, Heading } from '@/components';

export interface RelatedPostListProps extends BoxProps {
  relatedPostListTitle: string;
  posts: PostCardProps[];
}

export const RelatedPostList: React.FC<RelatedPostListProps> = ({ relatedPostListTitle, posts, ...props }) => (
  <Box {...props}>
    <Heading as="p" mb="m" size="m" color="navy">
      {relatedPostListTitle}
    </Heading>
    {posts.map((post, index) => (
      <PostCard key={post?.slug ?? index} {...post} mt="s" />
    ))}
  </Box>
);
