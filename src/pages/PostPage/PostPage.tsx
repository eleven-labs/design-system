import React from 'react';

import type { ContactCardProps, SummaryCardProps } from '@/components';
import { Button, Flex } from '@/components';
import { SummaryCard } from '@/components';
import { Box } from '@/components';
import { ContactCard, Divider } from '@/components';
import { LayoutContentWithSidebar } from '@/templates/LayoutContentWithSidebar';

import { PostFooter } from './PostFooter';
import { PostHeader } from './PostHeader';
import { RelatedPostList } from './RelatedPostList';

import type { PostFooterProps } from './PostFooter';
import type { PostHeaderProps } from './PostHeader';
import type { RelatedPostListProps } from './RelatedPostList';

export const postPageVariant = ['article', 'tutorial'] as const;
export type PostPageVariantType = (typeof postPageVariant)[number];

export interface PostPageProps {
  variant: PostPageVariantType;
  header: Omit<PostHeaderProps, 'contentType'>;
  children: React.ReactNode;
  footer: PostFooterProps;
  contactCard: ContactCardProps;
  relatedPostList: RelatedPostListProps;
  summary: SummaryCardProps;
  previousLink?: { label: string } & React.ComponentPropsWithoutRef<'a'>;
  nextLink?: { label: string } & React.ComponentPropsWithoutRef<'a'>;
}

export const PostPage: React.FC<PostPageProps> = ({
  variant = 'article',
  header,
  children,
  footer,
  relatedPostList,
  contactCard,
  summary,
  previousLink: { label: previousLinkLabel, ...previousLink } = {},
  nextLink: { label: nextLinkLabel, ...nextLink } = {},
}) => (
  <LayoutContentWithSidebar
    content={
      <>
        <Box>
          <PostHeader {...header} />
          <Divider mt="m" />
          {children}
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
    }
    sidebar={<SummaryCard variant={variant === 'tutorial' ? 'secondary' : 'primary'} {...summary} />}
  />
);
