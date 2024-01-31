import React from 'react';

import type { ContactCardProps } from '@/components';
import { SummaryCard, type SummaryCardProps } from '@/components';
import { Button, Flex } from '@/components';
import { Box } from '@/components';
import { ContactCard, Divider } from '@/components';
import type { ComponentPropsWithoutRef } from '@/types';

import { PostFooter } from './PostFooter';
import { PostHeader } from './PostHeader';
import { RelatedPostList } from './RelatedPostList';

import type { PostFooterProps } from './PostFooter';
import type { PostHeaderProps } from './PostHeader';
import type { RelatedPostListProps } from './RelatedPostList';

export const postPageVariant = ['article', 'tutorial'] as const;
export type PostPageVariantType = (typeof postPageVariant)[number];

export interface PostPageContentProps {
  variant: PostPageVariantType;
  summary: SummaryCardProps;
  header: Omit<PostHeaderProps, 'contentType'>;
  children: React.ReactNode;
  footer: PostFooterProps;
  contactCard: ContactCardProps;
  relatedPostList: RelatedPostListProps;
  previousLink?: { label: string } & ComponentPropsWithoutRef<'a'>;
  nextLink?: { label: string } & ComponentPropsWithoutRef<'a'>;
  className?: string;
}

export const PostPageContent: React.FC<PostPageContentProps> = ({
  variant = 'article',

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
    <Box>
      <PostHeader {...header} />
      <Divider mt="m" />
      <SummaryCard mt="l" hiddenAbove="md" variant={variant === 'tutorial' ? 'secondary' : 'primary'} {...summary} />
      <Box mt={{ xs: 'l', md: 'm' }} className="post-page__content">
        {children}
      </Box>
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
