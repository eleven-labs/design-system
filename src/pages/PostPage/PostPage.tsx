import React from 'react';

import { Box, Breadcrumb, type BreadcrumbProps, SummaryCard } from '@/components';
import { LayoutContentWithSidebar } from '@/templates/LayoutContentWithSidebar';
import type { ComponentPropsWithoutRef } from '@/types';

import './PostPage.scss';
import { PostPageContent } from './PostPageContent';

import type { PostPageContentProps } from './PostPageContent';

export interface PostPageProps extends PostPageContentProps {
  breadcrumb: BreadcrumbProps;
  cover: ComponentPropsWithoutRef<'img'>;
}

export const PostPage: React.FC<PostPageProps> = ({
  variant = 'article',
  breadcrumb,
  cover,
  summary,
  children,
  ...postPageContent
}) => (
  <Box mx="auto" width="content-container" className="post-page">
    <Breadcrumb {...breadcrumb} className="post-page__breadcrumb" />
    <img className="post-page__cover" {...cover} alt={cover.alt} />
    <LayoutContentWithSidebar
      content={
        <PostPageContent {...postPageContent} variant={variant} summary={summary}>
          {children}
        </PostPageContent>
      }
      sidebar={<SummaryCard hiddenBelow="md" variant={variant === 'tutorial' ? 'secondary' : 'primary'} {...summary} />}
    />
  </Box>
);
