import React from 'react';

import type { BoxProps } from '@/components';
import { Box, Button, Text } from '@/components';
import type { ComponentPropsWithoutRef } from '@/types';

export interface CategoryEndingBlockProps extends BoxProps {
  title: React.ReactNode;
  description: React.ReactNode;
  expertiseLink?: { label: string } & ComponentPropsWithoutRef<'a'>;
}

export const CategoryEndingBlock: React.FC<CategoryEndingBlockProps> = ({
  title,
  description,
  expertiseLink: { label: expertiseLinkLabel, ...expertiseLink } = {},
  ...props
}) => (
  <Box {...props}>
    <Text size="m" fontWeight="bold">
      {title}
    </Text>
    <Text mt="m">{description}</Text>
    {expertiseLinkLabel && (
      <Button as="a" mt="l" {...expertiseLink}>
        {expertiseLinkLabel}
      </Button>
    )}
  </Box>
);
