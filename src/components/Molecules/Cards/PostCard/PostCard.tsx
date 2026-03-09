import classNames from 'classnames';
import React from 'react';

import type { PictureProps } from '@/components';
import { Picture, Skeleton } from '@/components';
import { PostMetadata } from '@/components';
import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export const postCardVariant = ['highlight-light', 'highlight-dark', 'side-image'] as const;
export type PostCardVariantType = (typeof postCardVariant)[number];

export interface PostCardProps extends React.ComponentPropsWithoutRef<'article'> {
  slug?: string;
  contentType?: 'article' | 'tutorial';
  variant?: PostCardVariantType;
  cover?: PictureProps;
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
  slug,
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
  <article
    {...props}
    className={cn(
      'relative flex rounded-s bg-white',
      variant === 'highlight-dark' && 'flex-col bg-black/15 text-white',
      variant === 'highlight-light' &&
        `
          flex-row-reverse
          md:flex-col
        `,
      variant === 'side-image' &&
        `
          flex-row-reverse
          md:max-h-[190px] md:flex-row
        `,
      props.className
    )}
  >
    <Skeleton isLoading={isLoading}>
      <Picture
        {...cover}
        img={{
          ...cover?.img,
          className: cn(
            'w-full object-cover',
            variant === 'highlight-dark' &&
              `
                h-[130px]
                md:h-[245px]
              `,
            variant === 'highlight-light' &&
              `
                mt-s mr-s size-[67px] rounded-s
                md:m-0 md:h-[175px] md:w-full md:rounded-none
              `,
            variant === 'side-image' &&
              `
                mt-s mr-s size-[67px] rounded-s
                md:m-0 md:size-[190px] md:rounded-l-s md:rounded-r-none
              `
          ),
          fetchPriority: 'high',
        }}
      />
    </Skeleton>
    <div
      className="
        my-s min-w-0 flex-1 pr-xs pl-s
        md:my-m md:px-m
      "
    >
      <Skeleton isLoading={isLoading}>
        <h2
          className={classNames('min-w-0 typography-heading-xs post-card__heading', 'line-clamp-2', {
            'md:w-[calc(100%-55px)]': variant === 'side-image' && contentType === 'tutorial',
          })}
        >
          <a
            {...link}
            data-internal-link="post"
            className={cn(
              `
                typography-text-m
                before:absolute before:top-0 before:left-0 before:z-1
                before:block before:size-full before:content-['']
              `,
              variant === 'highlight-dark' ? 'text-white' : 'text-black'
            )}
          >
            {title}
          </a>
          {contentType === 'tutorial' && (
            <span
              className="
                absolute top-s right-s rounded-xs bg-accent px-xxs-2 py-xxs-3
                font-heading typography-text-xs font-bold tracking-[0.5px]
                text-primary uppercase
              "
            >
              {tutorialLabel}
            </span>
          )}
        </h2>
      </Skeleton>
      <PostMetadata
        variant="primary"
        className="mt-xxs"
        date={date}
        readingTime={readingTime}
        authors={authors}
        isLoading={isLoading}
      />
      {variant !== 'highlight-dark' && (
        <Skeleton isLoading={isLoading}>
          <p
            className={classNames('post-card__excerpt mt-xs hidden typography-text-s', {
              'min-w-0': true,
              'md:line-clamp-2': true,
            })}
          >
            {excerpt}
          </p>
        </Skeleton>
      )}
    </div>
  </article>
);
