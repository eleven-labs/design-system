import React from 'react';

import type { FlexProps } from '@/components';
import { Box, Flex, Heading, Link, Text } from '@/components';
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
    <Flex gap="s" flex="1">
      <img src={avatarImageUrl ?? '/imgs/astronaut.png'} alt={name} className="author-card__avatar-img" />
      <Box>
        <Heading color="primary" size="s">
          {name}
        </Heading>
        <Text as="div" size="xs" mt="xxs-3" style={{ fontStyle: 'italic' }}>
          {description}
        </Text>
      </Box>
    </Flex>
    <Link
      {...link}
      px="m"
      fontWeight="medium"
      textTransform="uppercase"
      data-internal-link="author"
      className="author-card__link"
    >
      {linkLabel}
    </Link>
  </Flex>
);
