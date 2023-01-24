import classNames from 'classnames';
import * as React from 'react';

import { ChoiceChip, ChoiceChipProps, Flex, FlexProps } from '@/components';

export interface ChoiceChipGroupProps extends Omit<FlexProps, 'children'> {
  choices: ({ name: string; label: string } & Omit<ChoiceChipProps, 'isActive' | 'children'>)[];
  choiceActive?: string;
}

export const ChoiceChipGroup: React.FC<ChoiceChipGroupProps> = ({
  choices,
  choiceActive,
  className,
  ...nativeProps
}) => (
  <Flex
    gap={{ xs: 'xs', md: 'xl' }}
    alignItems="center"
    className={classNames('choiceChipGroup', className)}
    {...nativeProps}
  >
    {choices.map(({ name, label, ...choiceProps }) => (
      <ChoiceChip key={name} isActive={(choiceActive || choices[0].name) === name} {...choiceProps}>
        {label}
      </ChoiceChip>
    ))}
  </Flex>
);
