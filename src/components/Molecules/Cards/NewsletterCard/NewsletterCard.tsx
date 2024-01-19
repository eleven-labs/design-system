import classNames from 'classnames';
import React from 'react';

import type { FlexProps } from '@/components';
import { Icon } from '@/components';
import { Box, Flex, Heading, Text } from '@/components';

import './NewsletterCard.scss';
import './webmecanik.scss';

export const newsletterCardVariant = ['horizontal', 'vertical'] as const;
export type NewsletterCardVariantType = (typeof newsletterCardVariant)[number];

export interface NewsletterCardProps extends Omit<FlexProps, 'title'> {
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
  variant?: NewsletterCardVariantType;
}

export const NewsletterCard: React.FC<NewsletterCardProps> = ({
  title,
  description,
  children,
  variant = 'vertical',
  ...props
}) => (
  <Flex
    {...props}
    p="l"
    bg="primary"
    color="white"
    className={classNames('newsletter-card', `newsletter-card--${variant}`)}
  >
    <Box className="newsletter-card__intro">
      <Heading size="m" color="accent">
        {title}
      </Heading>
      <Icon name="underline" color="accent" width="56px" />
      <Text mt="m">{description}</Text>
    </Box>
    <Box>{children}</Box>
  </Flex>
);
