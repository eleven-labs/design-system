import './PostPreview.scss';

import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps, Link, LinkProps, Text } from '@/components';

export interface PostPreviewProps extends BoxProps {
  title: string;
  excerpt: React.ReactNode;
  date: string;
  readingTime: string;
  authors: {
    username: string;
    nameWithInitial: string;
  }[];
  postLinkProps: Omit<LinkProps, 'children'>;
  hasMask?: boolean;
  isRelated?: boolean;
}

export const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  excerpt,
  date,
  readingTime,
  authors,
  postLinkProps,
  hasMask,
  isRelated,
  ...boxProps
}) => (
  <Box
    as="article"
    className={classNames('post-preview', { 'post-preview--mask': hasMask }, { 'post-preview--related': isRelated })}
    {...boxProps}
  >
    <Text as="h2" color="amaranth" size="m" weight="medium" mb={{ xs: 'xxs-3', md: 'xxs' }}>
      {hasMask ? title : <Link {...postLinkProps}>{title}</Link>}
    </Text>
    <Text size="xs" className="post-preview__excerpt">
      {excerpt}
    </Text>
    <Text className="post-preview__metadata" mt={{ xs: 'xs', md: 's' }} size="xs">
      <Text as="span">{date}</Text>
      <Text as="span">{readingTime}</Text>
      {authors.map((author) => (
        <Text key={author.username} as="span">
          {author.nameWithInitial}
        </Text>
      ))}
    </Text>
  </Box>
);
