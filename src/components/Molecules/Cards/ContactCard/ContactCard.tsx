import React from 'react';

import type { FlexProps } from '@/components';
import { Button, Flex, Heading, Text } from '@/components';
import type { ComponentPropsWithoutRef } from '@/types';

import './ContactCard.scss';

export type ContactCardProps = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  description: React.ReactNode;
  link: { label: React.ReactNode } & ComponentPropsWithoutRef<'a'>;
} & FlexProps;

export const ContactCard: React.FC<ContactCardProps> = ({
  title,
  subtitle,
  description,
  link: { label: linkLabel, ...link },
  ...props
}) => (
  <Flex {...props} justifyContent="center" alignItems="center" py="l" className="contact-card">
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="m"
      className="contact-card__container"
    >
      <Heading as="p" size="l" color="primary" textAlign="center">
        {title}{' '}
        <Text as="span" fontWeight="bold">
          {subtitle}
        </Text>
      </Heading>
      <Text size="s">{description}</Text>
      <Button as="a" {...link}>
        {linkLabel}
      </Button>
    </Flex>
  </Flex>
);
