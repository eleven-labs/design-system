import classNames from 'classnames';
import React from 'react';

import type { BoxProps } from '@/components';
import { Box, Heading, Skeleton, Text } from '@/components';
import { PostMetadata } from '@/components';
import type { ComponentPropsWithoutRef } from '@/types';

import './PostCard.scss';

export const postCardVariant = ['primary', 'secondary'] as const;
export type PostCardVariantType = (typeof postCardVariant)[number];

export interface PostCardProps extends BoxProps {
  contentType?: 'article' | 'tutorial';
  variant?: PostCardVariantType;
  slug?: string;
  title?: string;
  excerpt?: string;
  date?: string;
  readingTime?: number;
  authors?: { username: string; name: string }[];
  link?: ComponentPropsWithoutRef<'a'>;
  tutorialLabel?: string;
  isLoading?: boolean;
}

export const PostCard: React.FC<PostCardProps> = ({
  contentType,
  variant = 'primary',
  title,
  excerpt,
  date,
  readingTime,
  authors,
  link = {},
  isLoading = false,
  tutorialLabel,
  ...props
}) => (
  <Box as="article" {...props} p="m" className={classNames('post-preview', `post-preview--${variant}`)}>
    <Skeleton isLoading={isLoading}>
      <Heading as="h2" size="s" className="post-preview__heading">
        <Heading as="a" {...link} size="m" data-internal-link="post" className="post-preview__link">
          {title}
        </Heading>
        {contentType === 'tutorial' && (
          <Text
            size="xs"
            py="xxs-3"
            px="xxs-2"
            color="primary"
            textTransform="uppercase"
            fontWeight="bold"
            className="post-preview__tutoriel-tag"
          >
            {tutorialLabel}
          </Text>
        )}
      </Heading>
    </Skeleton>
    <PostMetadata
      variant="primary"
      mt="xxs"
      date={date}
      readingTime={readingTime}
      authors={authors}
      isLoading={isLoading}
    />
    <Skeleton isLoading={isLoading}>
      <Text mt="xs" size="s" hiddenBelow="md" className="post-preview__excerpt">
        {excerpt}
      </Text>
    </Skeleton>
  </Box>
);