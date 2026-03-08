import React, { Fragment } from 'react';

import { Icon, Link, Skeleton } from '@/components';
import { cn } from '@/helpers';
import type { ComponentPropsWithoutRef } from '@/tokens';

export const postMetadataVariant = ['primary', 'secondary'] as const;
export type PostMetadataVariantType = (typeof postMetadataVariant)[number];

export interface PostMetadataProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: PostMetadataVariantType;
  date?: string;
  readingTime?: number;
  authors?: {
    username: string;
    name: string;
    link?: ComponentPropsWithoutRef<'a'>;
  }[];
  isLoading?: boolean;
  displayedFields?: ('date' | 'readingTime' | 'authors')[];
}

export const PostMetadata: React.FC<PostMetadataProps> = ({
  variant,
  date,
  readingTime,
  authors,
  isLoading = false,
  displayedFields = ['date', 'readingTime', 'authors'],
  className,
  ...props
}) => {
  const fields = displayedFields.reduce<React.ReactNode[]>((currentFields, displayedField, index) => {
    switch (displayedField) {
      case 'date': {
        currentFields.push(
          <Skeleton
            key={displayedField}
            isLoading={isLoading}
            className="inline-block"
            style={{ minWidth: 60, minHeight: 16 }}
          >
            <div className="flex min-w-max items-center gap-xxs">
              {variant === 'secondary' && <Icon name="calendar" size="24px" color="light-grey" />}
              {date && <span>{date}</span>}
            </div>
          </Skeleton>
        );
        break;
      }
      case 'readingTime': {
        currentFields.push(
          <Skeleton
            key={displayedField}
            isLoading={isLoading}
            className="inline-block"
            style={{ minWidth: 26, minHeight: 16 }}
          >
            <div className="flex items-center gap-xxs">
              {variant === 'secondary' && <Icon name="access-time" size="24px" color="light-grey" />}
              {readingTime && <span>{`${readingTime}mn`}</span>}
            </div>
          </Skeleton>
        );
        break;
      }
      case 'authors': {
        const authorChildren = authors && (
          <>
            {variant === 'secondary' && <Icon name="person" size="24px" color="light-grey" />}
            {authors.map(({ username, name, link }, authorIndex) => (
              <Fragment key={username}>
                {link ? <Link {...link}>{name}</Link> : <span>{name}</span>}
                {authorIndex !== authors.length - 1 && <span>{' & '}</span>}
              </Fragment>
            ))}
          </>
        );
        currentFields.push(
          <Skeleton
            key={displayedField}
            isLoading={isLoading}
            className="inline-block"
            style={{ minWidth: 50, minHeight: 16 }}
          >
            {variant === 'secondary' ? (
              <div className="post-metadata__authors flex items-center gap-xxs">{authorChildren}</div>
            ) : (
              <>{authorChildren}</>
            )}
          </Skeleton>
        );
        break;
      }
    }

    if (variant !== 'secondary' && index !== displayedFields.length - 1) {
      currentFields.push(<span key={`circle-${displayedField}`}>•</span>);
    }

    return currentFields;
  }, []);

  return (
    <div
      {...props}
      className={cn(
        'post-metadata flex flex-wrap items-center typography-text-s',
        variant === 'secondary' ? 'gap-s' : 'gap-xxs',
        variant === 'primary' && 'font-heading font-bold tracking-[0.5px] text-info uppercase',
        variant === 'secondary' && 'font-semibold text-primary',
        className
      )}
    >
      {fields}
    </div>
  );
};
