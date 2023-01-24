import './AuthorPage.scss';

import React from 'react';

import {
  BackLink,
  Box,
  Divider,
  Flex,
  LinkProps,
  NewsletterBlock,
  NewsletterBlockProps,
  PostPreviewList,
  PostPreviewListProps,
  Text,
} from '@/components';

export interface AuthorPageProps extends PostPreviewListProps {
  author: {
    username: string;
    name: string;
    avatarImageUrl?: string;
    description: string;
  };
  postPreviewListTitle: string;
  backLinkLabel: string;
  backLinkProps: Omit<LinkProps, 'children'>;
  newsletterBlockProps: NewsletterBlockProps;
}

export const AuthorPage: React.FC<AuthorPageProps> = ({
  author,
  backLinkLabel,
  backLinkProps,
  postPreviewListContainerProps,
  postPreviewListTitle,
  posts,
  textNumberOfItems,
  percentageOfItemDisplayed,
  loadMoreButtonLabel,
  newsletterBlockProps,
}) => (
  <Box as="main" className="container-content author-page">
    <BackLink label={backLinkLabel} {...backLinkProps} />
    <Flex
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      textAlign={{ xs: 'center', md: 'left' }}
      mt={{ xs: 'm' }}
    >
      {author.avatarImageUrl && (
        <img src={author.avatarImageUrl} alt={author.name} className="author-page__avatar_img" />
      )}
      <Box mt={{ xs: 's' }} ml={{ xs: 'm' }}>
        <Text size="m" weight="medium" color="amaranth">
          {author.name}
        </Text>
        <Text size="s" dangerouslySetInnerHTML={{ __html: author.description }} />
      </Box>
    </Flex>
    <Divider mt={{ xs: 'm' }} className="author-page__divider" />
    <Text size="m" my="m" weight="medium">
      {postPreviewListTitle}
    </Text>
    <PostPreviewList
      postPreviewListContainerProps={postPreviewListContainerProps}
      posts={posts}
      textNumberOfItems={textNumberOfItems}
      percentageOfItemDisplayed={percentageOfItemDisplayed}
      loadMoreButtonLabel={loadMoreButtonLabel}
    />
    <NewsletterBlock my={{ xs: 'xl', md: 'xxl' }} {...newsletterBlockProps} />
  </Box>
);
