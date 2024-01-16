import React from 'react';

import { Box, Button, Flex, Heading, Text } from '@/components';
import type { ComponentPropsWithoutRef } from '@/types';

import './HomeIntroBlock.scss';

export interface HomeIntroBlockProps {
  intro: string;
  title: string;
  description: string;
  elevenLabsLink: { label: string } & ComponentPropsWithoutRef<'a'>;
}

export const HomeIntroBlock: React.FC<HomeIntroBlockProps> = ({
  intro,
  title,
  description,
  elevenLabsLink: { label: elevelLabsLinkLabel, ...elevenLabsLink },
}) => (
  <Box py="xl" className="home-intro-block">
    <Flex
      alignItems="baseline"
      flexDirection="column"
      gap="l"
      p="l"
      ml={{ xs: '0', md: 'xxl' }}
      className="home-intro-block__container"
    >
      <Text size="m" fontWeight="bold" color="info" textTransform="uppercase">
        {intro}
      </Text>
      <Heading color="primary" textTransform="uppercase" dangerouslySetInnerHTML={{ __html: title }} />
      <Text className="home-intro-block__description" dangerouslySetInnerHTML={{ __html: description }} />
      <Button as="a" {...elevenLabsLink}>
        {elevelLabsLinkLabel}
      </Button>
    </Flex>
  </Box>
);
