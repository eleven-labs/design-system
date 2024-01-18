import React from 'react';

import type { SummaryCardProps } from '@/components';
import { SummaryCard } from '@/components';
import { LayoutContentWithSidebar } from '@/templates/LayoutContentWithSidebar';

import { PostPageContent } from './PostPageContent';

import type { PostPageContentProps } from './PostPageContent';

export interface PostPageProps extends PostPageContentProps {
  summary: SummaryCardProps;
}

export const PostPage: React.FC<PostPageProps> = ({ variant = 'article', summary, children, ...postPageContent }) => (
  <LayoutContentWithSidebar
    content={
      <PostPageContent variant={variant} {...postPageContent}>
        {children}
      </PostPageContent>
    }
    sidebar={<SummaryCard variant={variant === 'tutorial' ? 'secondary' : 'primary'} {...summary} />}
  />
);
