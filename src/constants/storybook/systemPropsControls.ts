import { ArgTypes } from '@storybook/csf';

import { hiddenSystemPropsControls } from '@/constants/storybook/hiddenSystemPropsControls';
import type { SystemProps } from '@/types';

import { colorSystemPropsControls } from './colorSystemPropsControls';
import { layoutSystemPropsControls } from './layoutSystemPropsControls';
import { spacingSystemPropsControls } from './spacingSystemPropsControls';

export const systemPropsControls: Partial<ArgTypes<SystemProps>> = {
  ...spacingSystemPropsControls,
  ...colorSystemPropsControls,
  ...layoutSystemPropsControls,
  ...hiddenSystemPropsControls,
};
