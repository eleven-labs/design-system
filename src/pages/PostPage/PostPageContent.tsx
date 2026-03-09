import React from 'react';

import type { ContactCardProps } from '@/components';
import { SummaryCard, type SummaryCardProps } from '@/components';
import { Button } from '@/components';
import { ContactCard, Divider } from '@/components';
import type { ComponentPropsWithoutRef } from '@/tokens';

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
    <div>
      <PostHeader {...header} />
      <Divider className="mt-m" />
      <SummaryCard
        variant={variant === 'tutorial' ? 'secondary' : 'primary'}
        className="
          mt-l
          md:hidden
        "
        {...summary}
      />
      <div
        className={`
          [&_blockquote]:leading-base
          mt-l
          md:mt-m
          [&_blockquote]:mb-xs [&_blockquote]:px-xxl
          [&_blockquote]:font-[Georgia,var(--font-family-blockquote)]
          [&_blockquote]:typography-text-m [&_blockquote]:italic
          [&_blockquote]:before:-ml-xxl [&_blockquote]:before:block
          [&_blockquote]:before:h-12 [&_blockquote]:before:text-9xl/24
          [&_blockquote]:before:font-medium [&_blockquote]:before:text-primary
          [&_blockquote]:before:content-['“']
          [&_blockquote]:after:-mr-xxl [&_blockquote]:after:block
          [&_blockquote]:after:h-12 [&_blockquote]:after:rotate-180
          [&_blockquote]:after:text-9xl/24 [&_blockquote]:after:font-medium
          [&_blockquote]:after:text-primary [&_blockquote]:after:content-['“']
          [&_figure]:text-center
          [&_h2]:mt-(--typography-heading-markup-base-margin-top)
          [&_h2]:mb-(--typography-heading-markup-xl-margin-bottom)
          [&_h2]:text-(length:--typography-heading-markup-xl-font-size)
          [&_h2]:leading-(--typography-heading-markup-base-line-height)
          [&_h2]:font-(--typography-heading-markup-xl-font-weight)
          [&_h3]:mt-(--typography-heading-markup-base-margin-top)
          [&_h3]:mb-(--typography-heading-markup-l-margin-bottom)
          [&_h3]:text-(length:--typography-heading-markup-l-font-size)
          [&_h3]:leading-(--typography-heading-markup-base-line-height)
          [&_h3]:font-(--typography-heading-markup-l-font-weight)
          [&_h4]:mt-(--typography-heading-markup-base-margin-top)
          [&_h4]:mb-(--typography-heading-markup-m-margin-bottom)
          [&_h4]:text-(length:--typography-heading-markup-m-font-size)
          [&_h4]:leading-(--typography-heading-markup-base-line-height)
          [&_h5]:mt-(--typography-heading-markup-base-margin-top)
          [&_h5]:mb-(--typography-heading-markup-s-margin-bottom)
          [&_h5]:text-(length:--typography-heading-markup-s-font-size)
          [&_h5]:leading-(--typography-heading-markup-base-line-height)
          [&_iframe]:mx-auto [&_iframe]:my-xs [&_iframe]:block
          [&_iframe]:max-w-full
          [&_img]:mx-auto [&_img]:my-xs [&_img]:block [&_img]:max-w-full
          [&_ol]:mb-xs
          [&_p]:mb-xs
          [&_pre]:typography-text-xs
          [&_table]:w-full [&_table]:text-left
          [&_tbody_tr]:bg-white
          [&_tbody_tr:nth-child(even)]:bg-secondary-dark
          [&_td]:border [&_td]:border-primary-very-dark [&_td]:p-xs
          [&_th]:border [&_th]:border-primary-very-dark [&_th]:p-xs
          [&_th]:text-white
          [&_thead]:bg-primary [&_thead]:text-white
          [&_ul]:mb-xs
        `}
      >
        {children}
      </div>
      {variant === 'tutorial' && (
        <>
          <div className="flex gap-l">
            {previousLinkLabel && previousLink && (
              <Button asChild className="mt-l" variant="secondary">
                <a {...previousLink}>{previousLinkLabel}</a>
              </Button>
            )}
            {nextLinkLabel && nextLink && (
              <Button asChild className="mt-l">
                <a {...nextLink}>{nextLinkLabel}</a>
              </Button>
            )}
          </div>
        </>
      )}
      <PostFooter className="mt-l" {...footer} />
    </div>
    <Divider />
    <ContactCard {...contactCard} />
    {relatedPostList.posts.length > 0 && <RelatedPostList {...relatedPostList} />}
  </>
);
