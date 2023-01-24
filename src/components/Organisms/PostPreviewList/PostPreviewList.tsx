import React from 'react';

import { Box, BoxProps, Button, Divider, Flex, PostPreview, PostPreviewProps, ProgressBar, Text } from '@/components';

export interface PostPreviewListProps {
  posts: ({ slug: string } & PostPreviewProps)[];
  textNumberOfItems?: string;
  percentageOfItemDisplayed?: number;
  loadMoreButtonLabel?: string;
  onLoadMore?: () => void;
  postPreviewListContainerProps?: BoxProps;
}

export const PostPreviewList: React.FC<PostPreviewListProps> = ({
  posts,
  textNumberOfItems,
  percentageOfItemDisplayed,
  loadMoreButtonLabel,
  onLoadMore,
  postPreviewListContainerProps = {},
}) => {
  const hasPagination = textNumberOfItems && percentageOfItemDisplayed && loadMoreButtonLabel;
  return (
    <Box {...postPreviewListContainerProps}>
      {posts.map(({ slug, ...post }, index) => (
        <React.Fragment key={slug}>
          <PostPreview hasMask={Boolean(hasPagination && index === posts.length - 1)} {...post} />
          {posts.length - 1 !== index && <Divider my="m" />}
        </React.Fragment>
      ))}
      {hasPagination && (
        <>
          <Box my="m" px={{ md: 'xl' }}>
            <Divider size="m" bg="azure" />
          </Box>
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Text size="xs">{textNumberOfItems}</Text>
            <ProgressBar value={percentageOfItemDisplayed} mt="xxs" />
            <Button my="s" onClick={onLoadMore}>
              {loadMoreButtonLabel}
            </Button>
          </Flex>
        </>
      )}
    </Box>
  );
};
