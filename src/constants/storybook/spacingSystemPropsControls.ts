import { ArgTypes } from '@storybook/csf';

import { spacingTokenNameList } from '@/constants';
import { createControls } from '@/helpers/storybookHelper';
import type { SpacingSystemProps } from '@/types';

import { paddingSystemProps, spacingSystemProps } from '../systemProps';

export const marginSystemPropsControls = createControls({
  category: 'Spacing',
  subCategory: 'Margin',
  props: spacingSystemProps,
  options: spacingTokenNameList,
});
export const paddingSystemPropsControls = createControls({
  category: 'Spacing',
  subCategory: 'Padding',
  props: paddingSystemProps,
  options: spacingTokenNameList,
});

export const spacingSystemPropsControls: Partial<ArgTypes<SpacingSystemProps>> = {
  ...marginSystemPropsControls,
  ...paddingSystemPropsControls,
};
