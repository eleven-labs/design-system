import './PostFooter.scss';

import React from 'react';

import { Box, Divider, Flex, Link, LinkProps, Text } from '@/components';

export interface PostFooterProps {
  title: string;
  authors: {
    username: string;
    name: string;
    avatarImageUrl?: string;
    description: string;
  }[];
  authorLinkProps: (username: string) => Omit<LinkProps, 'children'>;
}

export const PostFooter: React.FC<PostFooterProps> = ({ title, authors, authorLinkProps }) => (
  <Box className="post-footer" color="grey-dark" mt={{ xs: 'm' }}>
    <Divider mb={{ xs: 'm' }} />
    <Text mb={{ xs: 'xxs' }} size="xs" weight="bold" textTransform="uppercase">
      {title}
    </Text>
    <Flex direction={{ xs: 'column', md: 'row' }} gapY={{ md: 'xxl' }}>
      {authors.map((author) => (
        <Flex key={author.username} mb={{ xs: 's' }} className="post-footer__author">
          {author.avatarImageUrl && (
            <img src={author.avatarImageUrl} alt={author.name} className="post-footer__avatar_img" />
          )}
          <Box ml={{ xs: 'xxs' }}>
            <Link weight="medium" {...authorLinkProps(author.username)}>
              {author.name}
            </Link>
            <Text size="xs" dangerouslySetInnerHTML={{ __html: author.description }} />
          </Box>
        </Flex>
      ))}
    </Flex>
  </Box>
);
