import React from 'react';

import type { PictureProps } from '@/components';
import { Box, Breadcrumb, type BreadcrumbProps, Picture, SummaryCard } from '@/components';
import { LayoutContentWithSidebar } from '@/templates/LayoutContentWithSidebar';

import './PostPage.scss';
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
  <Box mx="auto" className="post-page">
    <Breadcrumb mx={{ xs: 'xs', md: '0' }} {...breadcrumb} />
    <Picture {...cover} mx={{ xs: 'xs', md: '0' }} img={{ className: 'post-page__cover', ...cover?.img }} />
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
