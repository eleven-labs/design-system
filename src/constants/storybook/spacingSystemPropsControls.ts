import type { ArgTypes } from '@storybook/csf';

import { spacingTokenNameList } from '@/constants';
import { paddingSystemProps, spacingSystemProps } from '@/constants';
import { createControls } from '@/helpers/storybookHelper';
import type { MarginSystemProps, PaddingSystemProps, SpacingSystemProps } from '@/types';

export const marginSystemPropsControls = createControls<MarginSystemProps>({
  category: 'Spacing System Props',
  subCategory: 'Margin System Props',
  props: spacingSystemProps,
  options: spacingTokenNameList,
});

export const paddingSystemPropsControls = createControls<PaddingSystemProps>({
  category: 'Spacing System Props',
  subCategory: 'Padding System Props',
  props: paddingSystemProps,
  options: spacingTokenNameList,
});

export const spacingSystemPropsControls: Partial<ArgTypes<SpacingSystemProps>> = {
  ...marginSystemPropsControls,
  ...paddingSystemPropsControls,
};
