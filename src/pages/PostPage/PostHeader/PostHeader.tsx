import React from 'react';

import type { BoxProps } from '@/components';
import { Box, Flex, Heading, PostMetadata } from '@/components';
import { ShareLinks, type ShareLinksProps } from '@/components/Molecules/ShareLinks';
import type { ComponentPropsWithoutRef } from '@/types';

export interface PostHeaderProps extends BoxProps {
  title: React.ReactNode;
  date: string;
  readingTime: number;
  authors: {
    username: string;
    name: string;
    link: ComponentPropsWithoutRef<'a'>;
  }[];
  shareLinks: ShareLinksProps;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ title, date, readingTime, authors, shareLinks, ...props }) => (
  <Box {...props} textSize="xs">
    <Heading as="h1" size="xl">
      {title}
    </Heading>
    <Flex flexDirection={{ xs: 'column', md: 'row' }} justifyContent="between" gap="xs" mt="m">
      <PostMetadata variant="secondary" date={date} readingTime={readingTime} authors={authors} />
      <ShareLinks {...shareLinks} />
    </Flex>
  </Box>
);
