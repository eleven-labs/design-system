import React from 'react';

import { Box, Flex, Heading, PostMetadata } from '@/components';
import { ShareLinks, type ShareLinksProps } from '@/components/Molecules/ShareLinks';

export interface PostHeaderProps {
  title: React.ReactNode;
  date: string;
  readingTime: number;
  authors: {
    username: string;
    name: string;
    link: React.ComponentPropsWithoutRef<'a'>;
  }[];
  shareLinks: ShareLinksProps;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ title, date, readingTime, authors, shareLinks }) => (
  <Box textSize="xs">
    <Heading as="h1" size="xl">
      {title}
    </Heading>
    <Flex flexDirection={{ xs: 'column', md: 'row' }} justifyContent="between" gap="xs" mt="m">
      <PostMetadata variant="secondary" date={date} readingTime={readingTime} authors={authors} />
      <ShareLinks {...shareLinks} />
    </Flex>
  </Box>
);
