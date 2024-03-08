import classNames from 'classnames';
import React from 'react';

import type { BoxProps, PictureProps } from '@/components';
import { Box, Heading, Picture, Skeleton, Text } from '@/components';
import { PostMetadata } from '@/components';
import type { ComponentPropsWithoutRef } from '@/types';

import './PostCard.scss';

export const postCardVariant = ['highlight-light', 'highlight-dark', 'side-image'] as const;
export type PostCardVariantType = (typeof postCardVariant)[number];

export interface PostCardProps extends BoxProps {
  contentType?: 'article' | 'tutorial';
  variant?: PostCardVariantType;
  cover?: PictureProps;
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
  variant = 'side-image',
  cover = {},
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
  <Box as="article" {...props} className={classNames('post-card', `post-card--${variant}`)}>
    <Skeleton isLoading={isLoading}>
      <Picture {...cover} img={{ className: 'post-card__cover', ...cover?.img }} />
    </Skeleton>
    <Box my={{ xs: 's', md: 'm' }} pl={{ xs: 's', md: 'm' }} pr={{ xs: 'xs', md: 'm' }} flex="1">
      <Skeleton isLoading={isLoading}>
        <Heading as="h2" size="xs" className="post-card__heading">
          <Text as="a" {...link} size="m" data-internal-link="post" className="post-card__link">
            {title}
          </Text>
          {contentType === 'tutorial' && (
            <Text
              size="xs"
              py="xxs-3"
              px="xxs-2"
              color="primary"
              textTransform="uppercase"
              fontWeight="bold"
              className="post-card__tutoriel-tag"
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
      {variant !== 'highlight-dark' && (
        <Skeleton isLoading={isLoading}>
          <Text mt="xs" size="s" hiddenBelow="md" className="post-card__excerpt">
            {excerpt}
          </Text>
        </Skeleton>
      )}
    </Box>
  </Box>
);
