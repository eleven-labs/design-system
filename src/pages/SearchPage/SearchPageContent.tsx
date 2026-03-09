import React from 'react';

import { NotFoundBlock, Skeleton } from '@/components';
import type { NotFoundBlockProps } from '@/components';

export type SearchPageContentProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  postCardList: React.ReactNode;
  searchNotFound?: NotFoundBlockProps;
  isLoading?: boolean;
};

export const SearchPageContent: React.FC<SearchPageContentProps> = ({
  title,
  description,
  postCardList,
  searchNotFound,
  isLoading = false,
}) =>
  !isLoading && searchNotFound ? (
    <NotFoundBlock {...searchNotFound} />
  ) : (
    <div>
      <Skeleton isLoading={isLoading}>
        <h2 className="typography-heading-m font-medium text-primary">{title}</h2>
      </Skeleton>
      <Skeleton isLoading={isLoading}>
        <h3 className="mb-l typography-heading-s">{description}</h3>
      </Skeleton>
      {postCardList}
    </div>
  );
