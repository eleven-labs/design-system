import React from 'react';

import type { BreadcrumbProps, ContactCardProps } from '@/components';
import { SummaryCard, type SummaryCardProps } from '@/components';
import { Breadcrumb } from '@/components';
import { Button, Flex } from '@/components';
import { Box } from '@/components';
import { ContactCard, Divider } from '@/components';
import type { ComponentPropsWithoutRef } from '@/types';

import { PostFooter } from './PostFooter';
import { PostHeader } from './PostHeader';
import './PostPageContent.scss';
import { RelatedPostList } from './RelatedPostList';

import type { PostFooterProps } from './PostFooter';
import type { PostHeaderProps } from './PostHeader';
import type { RelatedPostListProps } from './RelatedPostList';

export const postPageVariant = ['article', 'tutorial'] as const;
export type PostPageVariantType = (typeof postPageVariant)[number];

export interface PostPageContentProps {
  variant: PostPageVariantType;
  breadcrumb: BreadcrumbProps;
  summary: SummaryCardProps;
  cover: ComponentPropsWithoutRef<'img'>;
  header: Omit<PostHeaderProps, 'contentType'>;
  children: React.ReactNode;
  footer: PostFooterProps;
  contactCard: ContactCardProps;
  relatedPostList: RelatedPostListProps;
  previousLink?: { label: string } & ComponentPropsWithoutRef<'a'>;
  nextLink?: { label: string } & ComponentPropsWithoutRef<'a'>;
}

export const PostPageContent: React.FC<PostPageContentProps> = ({
  variant = 'article',
  breadcrumb,
  cover,
  summary,
  header,
  children,
  footer,
  relatedPostList,
  contactCard,
  previousLink: { label: previousLinkLabel, ...previousLink } = {},
  nextLink: { label: nextLinkLabel, ...nextLink } = {},
}) => (
  <>
    <Box className="post-page-content">
      <Breadcrumb {...breadcrumb} />
      <img className="post-page-content__cover" {...cover} alt={cover.alt} />
      <PostHeader mt="m" {...header} />
      <Divider mt="m" />
      <SummaryCard mt="l" hiddenAbove="md" variant={variant === 'tutorial' ? 'secondary' : 'primary'} {...summary} />
      <Box mt={{ xs: 'l', md: 'm' }}>{children}</Box>
      {variant === 'tutorial' && (
        <>
          <Flex gap="l">
            {previousLinkLabel && previousLink && (
              <Button as="a" mt="l" variant="secondary" {...previousLink}>
                {previousLinkLabel}
              </Button>
            )}
            {nextLinkLabel && nextLink && (
              <Button as="a" mt="l" {...nextLink}>
                {nextLinkLabel}
              </Button>
            )}
          </Flex>
        </>
      )}
      <PostFooter mt="l" {...footer} />
    </Box>
    <Divider />
    <ContactCard {...contactCard} />
    {relatedPostList.posts.length > 0 && <RelatedPostList {...relatedPostList} />}
  </>
);
