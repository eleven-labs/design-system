import React from 'react';

import {
  Box,
  Divider,
  Heading,
  NewsletterBlock,
  NewsletterBlockProps,
  PostPreviewList,
  PostPreviewListProps,
  SubHeader,
  SubHeaderProps,
} from '@/components';

export interface PostListPageProps extends PostPreviewListProps, SubHeaderProps {
  postPreviewListTitle: string;
  newsletterBlockProps: NewsletterBlockProps;
}

export const PostListPage: React.FC<PostListPageProps> = ({
  introBlock,
  choiceCategoryLabel,
  choiceCategories,
  choiceCategoryActive,
  postPreviewListContainerProps,
  postPreviewListTitle,
  posts,
  textNumberOfItems,
  percentageOfItemDisplayed,
  loadMoreButtonLabel,
  onLoadMore,
  newsletterBlockProps,
}) => (
  <>
    <Divider m="0" bg="white" />
    <SubHeader
      introBlock={introBlock}
      choiceCategories={choiceCategories}
      choiceCategoryLabel={choiceCategoryLabel}
      choiceCategoryActive={choiceCategoryActive}
    />
    <Box as="main" className="container-content">
      <Heading mb="l" size="m" weight="medium">
        {postPreviewListTitle}
      </Heading>
      <PostPreviewList
        postPreviewListContainerProps={postPreviewListContainerProps}
        posts={posts}
        textNumberOfItems={textNumberOfItems}
        percentageOfItemDisplayed={percentageOfItemDisplayed}
        loadMoreButtonLabel={loadMoreButtonLabel}
        onLoadMore={onLoadMore}
      />
      <NewsletterBlock my={{ xs: 'xl', md: 'xxl' }} {...newsletterBlockProps} />
    </Box>
  </>
);
