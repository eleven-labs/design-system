import './RelatedPostList.scss';

import React from 'react';

import { Box, BoxProps, Heading, PostPreview, PostPreviewProps } from '@/components';

export interface RelatedPostListProps extends BoxProps {
  relatedPostListTitle: string;
  posts: ({ slug: string } & PostPreviewProps)[];
}

export const RelatedPostList: React.FC<RelatedPostListProps> = ({ relatedPostListTitle, posts, ...boxProps }) => (
  <Box {...boxProps} p={{ xs: 'm' }} className="related-post-list">
    <Heading mb="m" size="m" weight="medium">
      {relatedPostListTitle}
    </Heading>
    {posts.map((post, index) => (
      <PostPreview key={post.slug} isRelated={true} {...post} mt={{ xs: 's' }} />
    ))}
  </Box>
);
