import './SubHeader.scss';

import React from 'react';

import { Box, ChoiceChipGroup, ChoiceChipGroupProps, Flex, Heading, Text } from '@/components';

export interface SubHeaderProps {
  introBlock: {
    title: string;
    description: string;
  };
  choiceCategoryLabel: string;
  choiceCategoryActive?: string;
  choiceCategories: ChoiceChipGroupProps['choices'];
}

export const SubHeader: React.FC<SubHeaderProps> = ({
  introBlock,
  choiceCategoryLabel,
  choiceCategories,
  choiceCategoryActive,
}) => (
  <Box bg="azure" color="white" className="sub-header">
    <Flex
      direction="column"
      pt={{ xs: 's' }}
      pb={{ xs: 'l' }}
      justifyContent={{ md: 'center' }}
      alignItems={{ md: 'center' }}
    >
      <Box>
        <Box px={{ xs: 'm' }}>
          <Text size="m" weight="medium">
            {introBlock.title}
          </Text>
          <Heading mt={{ xs: 'xxs-3' }} size="l" weight="bold" className="sub-header__description-container">
            {introBlock.description}
          </Heading>
          <Text mt={{ xs: 's', md: 'l' }} size="m" weight="medium">
            {choiceCategoryLabel}
          </Text>
        </Box>
        <Box className="sub-header__choice-chip-group">
          <ChoiceChipGroup
            mt={{ xs: 's', md: 'm' }}
            px={{ xs: 'm' }}
            choices={choiceCategories}
            choiceActive={choiceCategoryActive}
          />
        </Box>
      </Box>
    </Flex>
  </Box>
);
