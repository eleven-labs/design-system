import React from 'react';

import type { FlexProps } from '@/components';
import { Box, Flex, Heading, Link, Text } from '@/components';
import { getCdnAssetsFile } from '@/helpers/getCdnAssetsFile';

import './AuthorCard.scss';

export interface AuthorCardProps extends FlexProps {
  name: string;
  description: string;
  avatarImageUrl?: string;
  link: React.ComponentPropsWithoutRef<'a'>;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({ name, avatarImageUrl, description, link, ...props }) => (
  <Flex {...props} alignItems="center" justifyContent="between" px="s" py="m" bg="white" className="author-card">
    <Flex gap="s" flex="1">
      <img
        src={avatarImageUrl ?? getCdnAssetsFile('/imgs/astronaut.png')}
        alt={name}
        className="author-card__avatar-img"
      />
      <Box>
        <Heading color="navy" size="s">
          {name}
        </Heading>
        <Text
          as="div"
          size="xs"
          mt="xxs-3"
          style={{ fontStyle: 'italic' }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
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
      Voir le profil
    </Link>
  </Flex>
);
