import React from 'react';

import { Box, Divider, Flex, Icon, Link, Text } from '@/components';
import type { NewsletterCardProps } from '@/components/Molecules/Cards/NewsletterCard';
import { NewsletterCard } from '@/components/Molecules/Cards/NewsletterCard';
import { LayoutContentWithSidebar } from '@/templates/LayoutContentWithSidebar';

import './AuthorPage.scss';

export type SocialNetworkName = 'github' | 'twitter' | 'linkedin';

export type AuthorPageProps = {
  author: {
    username: string;
    name: string;
    avatarImageUrl?: string;
    content: string;
    socialNetworks?: {
      name: SocialNetworkName;
      url: string;
      username: string;
    }[];
  };
  emptyAvatarImageUrl: string;
  title: React.ReactNode;
  postCardList: React.ReactNode;
  newsletterCard: NewsletterCardProps;
};

export const AuthorPage: React.FC<AuthorPageProps> = ({
  author,
  emptyAvatarImageUrl,
  title,
  postCardList,
  newsletterCard,
}) => (
  <LayoutContentWithSidebar
    className="author-page"
    content={
      <>
        <Flex
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="center"
          alignItems="center"
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <img
            src={author.avatarImageUrl ?? emptyAvatarImageUrl}
            alt={author.name}
            className={author.avatarImageUrl ? 'author-page__avatar-img' : 'author-page__empty-avatar-img'}
          />
          <Box mt="s" ml="s">
            <Text size="m" fontWeight="medium" color="info">
              {author.name}
            </Text>
            <Box dangerouslySetInnerHTML={{ __html: author.content }} />
            {author.socialNetworks && (
              <Flex
                flexDirection={{ xs: 'column', sm: 'row' }}
                mt="s"
                alignItems="center"
                justifyContent={{ xs: 'center', md: 'start' }}
                className="author-page__social_networks"
              >
                {author.socialNetworks.map((socialNetwork, index) => (
                  <React.Fragment key={socialNetwork.name}>
                    <Text>
                      <Icon name={socialNetwork.name} size="24px" />{' '}
                      <Link href={socialNetwork.url} target="_blank">
                        {socialNetwork.username}
                      </Link>
                    </Text>
                    {index !== (author.socialNetworks?.length ?? 0) - 1 && (
                      <Text as="span" mx="xxs">
                        •
                      </Text>
                    )}
                  </React.Fragment>
                ))}
              </Flex>
            )}
          </Box>
        </Flex>
        <Divider className="author-page__divider" />
        <Text size="m" fontWeight="medium">
          {title}
        </Text>
        {postCardList}
      </>
    }
    sidebar={<NewsletterCard {...newsletterCard} />}
  />
);
