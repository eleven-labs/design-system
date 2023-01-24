import React from 'react';

import {
  BackLink,
  Box,
  BoxProps,
  Divider,
  Heading,
  LinkProps,
  NewsletterBlock,
  NewsletterBlockProps,
  PostPreviewList,
  PostPreviewListProps,
  SearchNotFound,
  SearchNotFoundProps,
  Text,
} from '@/components';

export interface SearchPageProps extends PostPreviewListProps {
  backLinkLabel: string;
  backLinkProps: Omit<LinkProps, 'children'>;
  numberOfSearchLabel: string;
  description: string;
  searchNotFoundProps: SearchNotFoundProps;
  newsletterBlockProps: NewsletterBlockProps;
  searchResultListContainerProps?: BoxProps;
}

export const SearchPage: React.FC<SearchPageProps> = ({
  backLinkLabel,
  backLinkProps,
  postPreviewListContainerProps = {},
  posts,
  textNumberOfItems,
  percentageOfItemDisplayed,
  loadMoreButtonLabel,
  onLoadMore,
  numberOfSearchLabel,
  description,
  searchNotFoundProps,
  newsletterBlockProps,
  searchResultListContainerProps = {},
}) => (
  <Box as="main" className="container-content">
    <BackLink label={backLinkLabel} {...backLinkProps} />
    <Box {...searchResultListContainerProps}>
      {posts.length === 0 ? (
        <SearchNotFound {...searchNotFoundProps} />
      ) : (
        <>
          <Heading mt={{ xs: 'm' }} weight="medium" size="l">
            {numberOfSearchLabel}
          </Heading>
          <Text size="s">{description}</Text>
          <Divider mt={{ xs: 'xs' }} mx="0" size="l" bg="yellow" />
          <PostPreviewList
            postPreviewListContainerProps={{
              ...postPreviewListContainerProps,
              mt: { xs: 'l', md: 'm' },
            }}
            posts={posts}
            textNumberOfItems={textNumberOfItems}
            percentageOfItemDisplayed={percentageOfItemDisplayed}
            loadMoreButtonLabel={loadMoreButtonLabel}
            onLoadMore={onLoadMore}
          />
        </>
      )}
    </Box>
    <NewsletterBlock my={{ xs: 'xl', md: 'xxl' }} {...newsletterBlockProps} />
  </Box>
);
