import React from 'react';

import { SummaryCard } from '@/components';
import { LayoutContentWithSidebar } from '@/templates/LayoutContentWithSidebar';

import './PostPage.scss';
import { PostPageContent } from './PostPageContent';

import type { PostPageContentProps } from './PostPageContent';

export interface PostPageProps extends PostPageContentProps {}

export const PostPage: React.FC<PostPageProps> = ({ variant = 'article', summary, children, ...postPageContent }) => (
  <LayoutContentWithSidebar
    content={
      <PostPageContent variant={variant} summary={summary} {...postPageContent}>
        {children}
      </PostPageContent>
    }
    sidebar={<SummaryCard hiddenBelow="md" variant={variant === 'tutorial' ? 'secondary' : 'primary'} {...summary} />}
  />
);
