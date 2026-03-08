import React from 'react';

import type { CategoryEndingBlockProps } from '@/components';
import { CategoryEndingBlock, Divider } from '@/components';

export type CategoryPageContentProps = {
  categoryEndingBlock?: CategoryEndingBlockProps;
  title: React.ReactNode;
  postCardList: React.ReactNode;
};

export const CategoryPageContent: React.FC<CategoryPageContentProps> = ({
  title,
  postCardList,
  categoryEndingBlock,
}) => (
  <div>
    <h2 className="mb-l typography-heading-m text-primary">{title}</h2>
    {postCardList}
    {categoryEndingBlock && (
      <>
        <Divider className="mt-m" />
        <CategoryEndingBlock className="mt-l" {...categoryEndingBlock} />
      </>
    )}
  </div>
);
