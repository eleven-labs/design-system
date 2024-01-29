import React from 'react';

import type { FlexProps } from '@/components';
import { Box, Flex, Link, Text } from '@/components';
import type { ComponentPropsWithoutRef } from '@/types';

import './AuthorCard.scss';

export interface AuthorCardProps extends FlexProps {
  name: string;
  description: React.ReactNode;
  avatarImageUrl?: string;
  link: { label: string } & ComponentPropsWithoutRef<'a'>;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  avatarImageUrl,
  description,
  link: { label: linkLabel, ...link },
  ...props
}) => (
  <Flex {...props} alignItems="center" justifyContent="between" px="s" py="m" bg="white" className="author-card">
    <Flex gap="s" flex="1" alignItems="center">
      {avatarImageUrl ? (
        <img src={avatarImageUrl} alt={name} className="author-card__avatar-img" />
      ) : (
        <div className="author-card__avatar-img author-card__avatar-img--empty" />
      )}
      <Box>
        <Text color="primary" size="m" fontWeight="semi-bold">
          {name}
        </Text>
        <Text as="div" size="xs" mt="xxs-3" italic>
          {description}
        </Text>
      </Box>
    </Flex>
    <Link {...link} px="m" textTransform="uppercase" data-internal-link="author" className="author-card__link">
      {linkLabel}
    </Link>
  </Flex>
);
