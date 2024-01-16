import React from 'react';

import type { FlexProps, PostCardProps } from '@/components';
import { Flex, PostCard } from '@/components';
import { Box, Button, Heading, Text } from '@/components';
import type { ComponentPropsWithoutRef } from '@/types';

export interface LastTutorialsBlockProps extends FlexProps {
  title: string;
  description: string;
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
  ...props
}) => (
  <Box bg="primary" color="white">
    <Flex
      justifyContent="center"
      alignItems="center"
      {...props}
      py="xl"
      mx={{ xs: 's', md: 'auto' }}
      gap="xl"
      width={{ md: 'content-container' }}
    >
      <Box>
        <Heading as="p" size="m">
          {title}
        </Heading>
        <Text mt="l">{description}</Text>
        <Button mt="l" as="a" {...linkSeeMore}>
          {labelLinkSeeMore}
        </Button>
      </Box>
      <Flex gap="l">
        {posts.map((post, index) => (
          <React.Fragment key={post?.slug ?? index}>
            <PostCard variant="secondary" tutorialLabel={tutorialLabel} {...(post || {})} />
          </React.Fragment>
        ))}
      </Flex>
    </Flex>
  </Box>
);
