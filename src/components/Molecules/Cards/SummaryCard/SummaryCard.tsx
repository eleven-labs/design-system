import classNames from 'classnames';
import React from 'react';

import type { BoxProps } from '@/components';
import { Divider } from '@/components';
import { Box, Flex, Heading, Text } from '@/components';

import './SummaryCard.scss';

export const SummaryCardVariant = ['primary', 'secondary'] as const;
export type SummaryCardVariantType = (typeof SummaryCardVariant)[number];

export interface SummaryCardProps extends BoxProps {
  variant?: SummaryCardVariantType;
  title: string;
  sectionActive?: string;
  sections: ({ name: string; label: string } & React.ComponentPropsWithoutRef<'a'>)[];
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  variant = 'primary',
  title,
  sectionActive,
  sections,
  ...props
}) => (
  <Box bg="white" p="m" className={classNames('summary-card', { [`summary-card--${variant}`]: variant })} {...props}>
    <Heading size="l" fontWeight="bold" color="navy">
      {title}
    </Heading>
    <Flex flexDirection="column" mt="m">
      {sections.map(({ name, label, ...link }, index) => (
        <React.Fragment key={index}>
          <Flex
            as="a"
            gap="s"
            fontWeight="medium"
            className={classNames('summary-card__section', {
              'summary-card__section--active': sectionActive === name,
            })}
            {...link}
          >
            <Text color={variant === 'primary' ? 'amaranth' : undefined}>
              {variant === 'secondary' ? index + 1 : '•'}
            </Text>
            <Text>{label}</Text>
          </Flex>
          {index !== sections.length - 1 && <Divider my="xxs" />}
        </React.Fragment>
      ))}
    </Flex>
  </Box>
);
