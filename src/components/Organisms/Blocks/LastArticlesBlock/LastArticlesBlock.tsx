import React from 'react';

import type { BoxProps, PostCardProps } from '@/components';
import { Box, Button, Flex, Heading, PostCard } from '@/components';
import type { ComponentPropsWithoutRef } from '@/types';

import './LastArticlesBlock.scss';

export interface LastArticlesBlockProps extends BoxProps {
  title: React.ReactNode;
  posts: Partial<PostCardProps>[];
  linkSeeMore: { label: string } & ComponentPropsWithoutRef<'a'>;
}

export const LastArticlesBlock: React.FC<LastArticlesBlockProps> = ({
  title,
  posts,
  linkSeeMore: { label: labelLinkSeeMore, ...linkSeeMore },
  ...props
}) => (
  <Box {...props} my="xl" mx={{ xs: 's', md: 'm' }} width={{ md: 'full' }} className="last-articles-block">
    <Heading size="m" color="primary">
      {title}
    </Heading>
    <Flex mt="l" gap="m" className="last-articles-block__post-list">
      {posts.map((post, index) => (
        <React.Fragment key={post?.slug ?? index}>
          <PostCard variant="highlight-light" {...(post || {})} />
        </React.Fragment>
      ))}
    </Flex>
    <Flex justifyContent="center" alignItems="center">
      <Button mt="l" as="a" {...linkSeeMore}>
        {labelLinkSeeMore}
      </Button>
    </Flex>
  </Box>
);
