import type { ArgTypes } from '@storybook/csf';

import { hiddenSystemPropsControls } from '@/constants/storybook/hiddenSystemPropsControls';
import type { SystemProps } from '@/types';

import { colorSystemPropsControls } from './colorSystemPropsControls';
import { flexBoxSystemPropsControls } from './flexBoxSystemPropsControls';
import { layoutSystemPropsControls } from './layoutSystemPropsControls';
import { spacingSystemPropsControls } from './spacingSystemPropsControls';
import { typographySystemPropsControls } from './typographySystemPropsControls';

export const systemPropsControls: Partial<ArgTypes<SystemProps>> = {
  ...spacingSystemPropsControls,
  ...colorSystemPropsControls,
  ...layoutSystemPropsControls,
  ...hiddenSystemPropsControls,
  ...flexBoxSystemPropsControls,
  ...typographySystemPropsControls,
};
