import React from 'react';

import { Box, Button, Flex, Heading, Text } from '@/components';
import type { ComponentPropsWithoutRef } from '@/types';

import './HomeIntroBlock.scss';

export interface HomeIntroBlockProps {
  intro: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
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
      <Heading size="s" color="info">
        {intro}
      </Heading>
      <Heading size="xl" color="primary">
        {title}
      </Heading>
      <Text>{description}</Text>
      <Button as="a" {...elevenLabsLink}>
        {elevelLabsLinkLabel}
      </Button>
    </Flex>
  </Box>
);
