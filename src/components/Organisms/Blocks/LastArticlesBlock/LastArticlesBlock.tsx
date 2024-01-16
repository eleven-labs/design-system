import React from 'react';

import type { BoxProps, PostCardProps } from '@/components';
import { Box, Button, Flex, Heading, PostCard } from '@/components';
import type { ComponentPropsWithoutRef } from '@/types';

import './LastArticlesBlock.scss';

export interface LastArticlesBlockProps extends BoxProps {
  title: string;
  posts: Partial<PostCardProps>[];
  linkSeeMore: { label: string } & ComponentPropsWithoutRef<'a'>;
}

export const LastArticlesBlock: React.FC<LastArticlesBlockProps> = ({
  title,
  posts,
  linkSeeMore: { label: labelLinkSeeMore, ...linkSeeMore },
  ...props
}) => (
  <Box
    {...props}
    my="xl"
    mx={{ xs: 's', md: 'auto' }}
    width={{ md: 'content-container' }}
    className="last-articles-block"
  >
    <Heading as="p" size="m" color="primary">
      {title}
    </Heading>
    <Box mt="l" gap="m" className="last-articles-block__post-list">
      {posts.map((post, index) => (
        <React.Fragment key={post?.slug ?? index}>
          <PostCard {...(post || {})} />
        </React.Fragment>
      ))}
    </Box>
    <Flex justifyContent="center" alignItems="center">
      <Button mt="l" as="a" {...linkSeeMore}>
        {labelLinkSeeMore}
      </Button>
    </Flex>
  </Box>
);
