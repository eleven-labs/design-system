import React from 'react';

import type { PictureProps } from '@/components';
import { Breadcrumb, type BreadcrumbProps, Picture, SummaryCard } from '@/components';
import { LayoutContentWithSidebar } from '@/templates/LayoutContentWithSidebar';

import { PostPageContent } from './PostPageContent';

import type { PostPageContentProps } from './PostPageContent';

export interface PostPageProps extends PostPageContentProps {
  breadcrumb: BreadcrumbProps;
  cover: PictureProps;
}

export const PostPage: React.FC<PostPageProps> = ({
  variant = 'article',
  breadcrumb,
  cover,
  summary,
  children,
  ...postPageContent
}) => (
  <div className="post-page mx-auto">
    <Breadcrumb
      {...breadcrumb}
      className="
        mx-xs my-s
        md:mx-0
      "
    />
    <Picture
      {...cover}
      className="
        mx-xs
        md:mx-0
      "
      img={{ className: 'h-[160px] w-full rounded-xs object-cover md:h-[330px]', ...cover?.img }}
    />
    <LayoutContentWithSidebar
      content={
        <PostPageContent {...postPageContent} variant={variant} summary={summary}>
          {children}
        </PostPageContent>
      }
      sidebar={
        <SummaryCard
          variant={variant === 'tutorial' ? 'secondary' : 'primary'}
          className="
            hidden
            md:block
          "
          {...summary}
        />
      }
    />
  </div>
);
